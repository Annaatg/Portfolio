// Server-side market snapshot for the homepage ticker strip.
//
// Data source: Yahoo Finance's public chart endpoint
// (https://query1.finance.yahoo.com/v8/finance/chart/<SYMBOL>), one request
// per symbol, run in parallel with Promise.allSettled so a single slow or
// failing symbol never blocks the others. It is unofficial and keyless —
// no API key, no env var to set.
//
// For each symbol: `meta.regularMarketPrice` is used as the last value, and
// the previous daily close is the second-to-last non-null entry in
// `indicators.quote[0].close` (falling back to `meta.chartPreviousClose` if
// that series is too short). A symbol is dropped entirely — never invented
// or estimated — if its request failed, timed out, or its price/previous
// close is missing or zero.
//
// NOTE: outbound network access to finance-data hosts could not be verified
// from the sandbox this function was written and tested in (every external
// host, including plain google.com, was refused by this session's egress
// proxy) — the parsing/drop logic below was verified against mocked
// chart-endpoint payloads, not a live call. Verify on the actual Vercel
// deployment.

const SYMBOLS = [
	{ id: 'sp500', label: 'S&P 500', symbol: '^GSPC' },
	{ id: 'nasdaq100', label: 'Nasdaq 100', symbol: '^NDX' },
	{ id: 'dowjones', label: 'Dow Jones', symbol: '^DJI' },
	{ id: 'eurostoxx50', label: 'Euro Stoxx 50', symbol: '^STOXX50E' },
	{ id: 'ftse100', label: 'FTSE 100', symbol: '^FTSE' },
	{ id: 'cac40', label: 'CAC 40', symbol: '^FCHI' },
	{ id: 'dax', label: 'DAX', symbol: '^GDAXI' },
	{ id: 'nikkei225', label: 'Nikkei 225', symbol: '^N225' },
	{ id: 'hangseng', label: 'Hang Seng', symbol: '^HSI' },
	{ id: 'vix', label: 'VIX', symbol: '^VIX', unit: '' },
	// ^TNX: Yahoo's chart endpoint reports this symbol's price directly as a
	// yield in percent (e.g. 4.27 means 4.27%), not scaled by 10 as some
	// older feeds did historically. This is an assumption we could not
	// verify live from this sandbox — check the real deployment's first
	// response for a plausible US 10Y value (roughly 3-5% as of 2024-2026)
	// before trusting it.
	{ id: 'us10y', label: 'US 10Y', symbol: '^TNX', unit: '%' },
	{ id: 'eurusd', label: 'EUR/USD', symbol: 'EURUSD=X' },
	{ id: 'gbpusd', label: 'GBP/USD', symbol: 'GBPUSD=X' },
	{ id: 'usdjpy', label: 'USD/JPY', symbol: 'USDJPY=X' },
	{ id: 'wti', label: 'WTI Crude', symbol: 'CL=F' },
	{ id: 'gold', label: 'Gold', symbol: 'GC=F' },
];

const REQUEST_TIMEOUT_MS = 5000;

function formatValue(value) {
	return value.toLocaleString('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}

// The previous daily close: the second-to-last non-null close in the
// 5-day daily series (the last non-null entry is today's/most recent bar,
// which regularMarketPrice already represents), falling back to
// meta.chartPreviousClose if the series is too short to tell.
function getPreviousClose(result) {
	const closes = result && result.indicators && result.indicators.quote && result.indicators.quote[0]
		? result.indicators.quote[0].close
		: null;
	if (Array.isArray(closes)) {
		const nonNull = closes.filter((c) => typeof c === 'number');
		if (nonNull.length >= 2) {
			return nonNull[nonNull.length - 2];
		}
	}
	const fallback = result && result.meta ? result.meta.chartPreviousClose : null;
	return typeof fallback === 'number' ? fallback : null;
}

function getQuoteTimestamp(result) {
	if (result && result.meta && typeof result.meta.regularMarketTime === 'number') {
		return result.meta.regularMarketTime;
	}
	if (result && Array.isArray(result.timestamp) && result.timestamp.length > 0) {
		return result.timestamp[result.timestamp.length - 1];
	}
	return null;
}

async function fetchSymbol(symbol) {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
	try {
		const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=5d&interval=1d`;
		const resp = await fetch(url, {
			headers: {
				'User-Agent': 'Mozilla/5.0 (compatible; portfolio-ticker)',
				Accept: 'application/json',
			},
			signal: controller.signal,
		});
		if (!resp.ok) {
			throw new Error(`upstream status ${resp.status} for ${symbol}`);
		}
		const data = await resp.json();
		const result = data && data.chart && Array.isArray(data.chart.result) ? data.chart.result[0] : null;
		if (!result) {
			throw new Error(`no chart result for ${symbol}`);
		}
		return result;
	} finally {
		clearTimeout(timeout);
	}
}

async function fetchQuotes() {
	const settled = await Promise.allSettled(SYMBOLS.map((s) => fetchSymbol(s.symbol)));

	const items = [];
	let latestTimestamp = 0;

	SYMBOLS.forEach((s, i) => {
		const outcome = settled[i];
		if (outcome.status !== 'fulfilled') {
			// Request failed or timed out: drop the instrument, never invent a value.
			return;
		}

		const result = outcome.value;
		const price = result && result.meta ? result.meta.regularMarketPrice : null;
		const prevClose = getPreviousClose(result);

		if (typeof price !== 'number' || typeof prevClose !== 'number' || prevClose === 0) {
			return;
		}

		const changePct = ((price - prevClose) / prevClose) * 100;
		const quoteTime = getQuoteTimestamp(result);
		if (typeof quoteTime === 'number' && quoteTime > latestTimestamp) {
			latestTimestamp = quoteTime;
		}

		items.push({
			id: s.id,
			label: s.label,
			value: formatValue(price),
			unit: s.unit === undefined ? '' : s.unit,
			changePct: Math.round(changePct * 100) / 100,
		});
	});

	return { items, latestTimestamp };
}

export default async function handler(req, res) {
	try {
		const { items, latestTimestamp } = await fetchQuotes();

		if (items.length === 0) {
			res.status(502).json({ error: 'quotes_empty' });
			return;
		}

		const asOf = latestTimestamp > 0 ? new Date(latestTimestamp * 1000).toISOString() : new Date().toISOString();

		res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
		res.status(200).json({ asOf, items });
	} catch (err) {
		res.status(502).json({ error: 'quotes_unavailable', message: String((err && err.message) || err) });
	}
}
