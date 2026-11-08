// Dependency-free static site build: assembles partials/head.html +
// partials/header.html + pages/<page>.html + partials/footer.html into
// dist/<page>.html, substituting per-page {{PLACEHOLDER}} metadata.
// Run: node build.mjs

import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://anne-marieatignon-portfolio.vercel.app';

const PAGES = [
	{
		file: 'home.html',
		out: 'index.html',
		path: '/',
		title: 'Anne-Marie Atignon — Aspiring Sales & Trading Analyst',
		description: "Portfolio of Anne-Marie Atignon, an aspiring Sales & Trading analyst completing an MSc in Financial Engineering at WorldQuant University. Projects in quantitative finance, machine learning and risk.",
	},
	{
		file: 'about.html',
		out: 'about.html',
		path: '/about',
		title: 'About — Anne-Marie Atignon',
		description: 'About Anne-Marie Atignon: MSc Financial Engineering candidate at WorldQuant University, MBA in Finance from the African School of Economics.',
	},
	{
		file: 'skills.html',
		out: 'skills.html',
		path: '/skills',
		title: 'Skills — Anne-Marie Atignon',
		description: 'Skills in financial engineering, data & machine learning, markets & trading, tools (Python, R) and languages.',
	},
	{
		file: 'projects.html',
		out: 'projects.html',
		path: '/projects',
		title: 'Projects — Anne-Marie Atignon',
		description: '22 quantitative finance and machine learning projects from the WorldQuant MScFE, including a market-neutral pairs trading capstone thesis.',
	},
	{
		file: 'experience.html',
		out: 'experience.html',
		path: '/experience',
		title: 'Experience — Anne-Marie Atignon',
		description: "Anne-Marie Atignon's work experience and education, including an MSc in Financial Engineering and an MBA in Finance.",
	},
	{
		file: 'certifications.html',
		out: 'certifications.html',
		path: '/certifications',
		title: 'Certifications — Anne-Marie Atignon',
		description: 'Certifications in quantitative finance, data science, machine learning, programming and professional skills.',
	},
	{
		file: 'contact.html',
		out: 'contact.html',
		path: '/contact',
		title: 'Contact — Anne-Marie Atignon',
		description: 'Get in touch with Anne-Marie Atignon by email, LinkedIn or GitHub.',
	},
];

const NOT_FOUND = {
	file: '404.html',
	out: '404.html',
	path: '/404',
	title: '404 — Anne-Marie Atignon',
	description: 'Page not found.',
};

const ROOT = __dirname;
const DIST = join(ROOT, 'dist');

function readPartial(name) {
	return readFileSync(join(ROOT, 'partials', name), 'utf8');
}

function readPage(name) {
	return readFileSync(join(ROOT, 'pages', name), 'utf8');
}

function formatLastUpdated(date) {
	return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

function buildPage(meta, { excludeFromSitemap = false } = {}) {
	const head = readPartial('head.html');
	const header = readPartial('header.html');
	const footer = readPartial('footer.html');
	const body = readPage(meta.file);

	const canonical = SITE_URL + meta.path;
	const lastUpdated = formatLastUpdated(new Date());

	let html = `<!DOCTYPE html>\n<html lang="en">\n<head>\n${head}</head>\n<body>\n${header}\n${body}\n${footer}\n</body>\n</html>\n`;

	html = html
		.split('{{TITLE}}').join(meta.title)
		.split('{{DESCRIPTION}}').join(meta.description)
		.split('{{CANONICAL}}').join(canonical)
		.split('{{OG_TITLE}}').join(meta.title)
		.split('{{OG_DESCRIPTION}}').join(meta.description)
		.split('{{LAST_UPDATED}}').join(lastUpdated);

	writeFileSync(join(DIST, meta.out), html, 'utf8');

	return excludeFromSitemap ? null : canonical;
}

function buildSitemap(urls) {
	const entries = urls
		.map((url) => `  <url>\n    <loc>${url}</loc>\n  </url>`)
		.join('\n');
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
	writeFileSync(join(DIST, 'sitemap.xml'), xml, 'utf8');
}

function buildRobots() {
	const txt = `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
	writeFileSync(join(DIST, 'robots.txt'), txt, 'utf8');
}

function main() {
	if (existsSync(DIST)) {
		rmSync(DIST, { recursive: true, force: true });
	}
	mkdirSync(DIST, { recursive: true });

	const urls = [];
	for (const meta of PAGES) {
		urls.push(buildPage(meta));
	}
	buildPage(NOT_FOUND, { excludeFromSitemap: true });

	buildSitemap(urls);
	buildRobots();

	cpSync(join(ROOT, 'css'), join(DIST, 'css'), { recursive: true });
	cpSync(join(ROOT, 'assets'), join(DIST, 'assets'), { recursive: true });

	// js/main.js embeds translation strings (incl. the footer's
	// "Last updated" label) that must get the same {{LAST_UPDATED}}
	// substitution as the HTML, since it's loaded as an external script
	// and changeLanguage() re-renders [data-key] text from it on load.
	mkdirSync(join(DIST, 'js'), { recursive: true });
	const now = new Date();
	const lastUpdatedEn = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
	const lastUpdatedFr = now.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
	const mainJs = readFileSync(join(ROOT, 'js', 'main.js'), 'utf8')
		.split('{{LAST_UPDATED_EN}}').join(lastUpdatedEn)
		.split('{{LAST_UPDATED_FR}}').join(lastUpdatedFr);
	writeFileSync(join(DIST, 'js', 'main.js'), mainJs, 'utf8');

	console.log(`Built ${PAGES.length + 1} pages into dist/`);
}

main();
