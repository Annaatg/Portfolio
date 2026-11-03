// Server-side market snapshot for the homepage ticker strip.
//
// Data source: Yahoo Finance's public quote endpoint
// (https://query1.finance.yahoo.com/v7/finance/quote). It is unofficial and
// keyless — no API key, no env var to set. It was chosen because it returns
// regularMarketPrice and regularMarketPreviousClose for every instrument
// below (indices, FX pairs, futures and the 10Y yield) in a single batched
// request, which is exactly the "change vs. previous close" the UI needs.
// It can occasionally rate-limit or change shape without notice, which is
// why every field is read defensively and a symbol is dropped (not
// invented) if its data is missing or malformed.
//
// NOTE: outbound network access to finance-data hosts could not be
// verified from the sandbox this function was written in (see the PR
// notes) — verify this endpoint still returns the expected shape once
// deployed on Vercel.

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
	{ id: 'us10y', label: 'US 10Y', symbol: '^TNX', unit: '%' },
	{ id: 'eurusd', label: 'EUR/USD', symbol: 'EURUSD=X' },
	{ id: 'gbpusd', label: 'GBP/USD', symbol: 'GBPUSD=X' },
	{ id: 'usdjpy', label: 'USD/JPY', symbol: 'JPY=X' },
	{ id: 'wti', label: 'WTI Crude', symbol: 'CL=F' },
	{ id: 'gold', label: 'Gold', symbol: 'GC=F' },
];

function formatValue(value) {
	return value.toLocaleString('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	});
}

async function fetchQuotes() {
	const symbolsParam = SYMBOLS.map((s) => encodeURIComponent(s.symbol)).join(',');
	const url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbolsParam}`;

	const resp = await fetch(url, {
		headers: {
			'User-Agent': 'Mozilla/5.0 (compatible; portfolio-ticker/1.0; +https://anne-marieatignon-portfolio.vercel.app/)',
			Accept: 'application/json',
		},
	});

	if (!resp.ok) {
		throw new Error(`upstream status ${resp.status}`);
	}

	const data = await resp.json();
	const quotes = Array.isArray(data?.quoteResponse?.result) ? data.quoteResponse.result : [];
	const bysymbol = new Map(quotes.map((q) => [q.symbol, q]));

	const items = [];
	for (const s of SYMBOLS) {
		const q = bysymbolGet(bysymbol, s.symbol);
		const price = q && typeof q.regularMarketPrice === 'number' ? q.regularMarketPrice : null;
		const prevClose =
			q && typeof q.regularMarketPreviousClose === 'number'
				? q.regularMarketPreviousClose
				: q && typeof q.chartPreviousClose === 'number'
				? q.chartPreviousClose
				: null;

		if (price === null || prevClose === null || prevClose === 0) {
			// Drop the instrument rather than invent a value.
			continue;
		}

		const changePct = ((price - prevClose) / prevClose) * 100;
		items.push({
			id: s.id,
			label: s.label,
			value: formatValue(price),
			unit: s.unit === undefined ? '' : s.unit,
			changePct: Math.round(changePct * 100) / 100,
		});
	}

	return items;
}

function bysymbolGet(map, key) {
	return map.get(key);
}

export default async function handler(req, res) {
	try {
		const items = await fetchQuotes();

		if (items.length === 0) {
			res.status(502).json({ error: 'quotes_empty' });
			return;
		}

		res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
		res.status(200).json({ asOf: new Date().toISOString(), items });
	} catch (err) {
		res.status(502).json({ error: 'quotes_unavailable', message: String((err && err.message) || err) });
	}
}
