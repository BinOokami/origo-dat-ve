// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { prefixes, categorySlugs } from './src/i18n/slugs.mjs';

// Sitemap chỉ chứa trang được phép lập chỉ mục, khớp với thẻ noindex trong trang:
// - bài chưa có người soát (không có "reviewed: true")
// - trang chuyên mục chưa có bài nào
const excluded = [];
for (const [lang, prefix] of Object.entries(prefixes)) {
	const dir = `./src/content/blog/${lang}`;
	const usedCats = new Set();
	if (existsSync(dir)) {
		for (const file of readdirSync(dir).filter((f) => f.endsWith('.md'))) {
			const text = readFileSync(`${dir}/${file}`, 'utf8');
			const cat = /^category:\s*['"]?(\w+)/m.exec(text)?.[1] ?? '';
			usedCats.add(cat);
			if (!/^reviewed:\s*true\s*$/m.test(text) && cat in categorySlugs) {
				excluded.push(`/${prefix}${categorySlugs[/** @type {keyof typeof categorySlugs} */ (cat)][lang]}/${file.replace(/\.md$/, '')}/`);
			}
		}
	}
	for (const [cat, slugs] of Object.entries(categorySlugs)) {
		if (!usedCats.has(cat)) excluded.push(`/${prefix}${slugs[/** @type {'vi'|'en'|'ru'} */ (lang)]}/`);
	}
}

// Địa chỉ site. Demo trên GitHub Pages: site 'https://binookami.github.io' + base '/origo-dat-ve'.
// Khi có tên miền thật: đổi `site` thành https://tenmien.com và XÓA dòng `base`, đổi dòng Sitemap trong public/robots.txt.
const SITE = 'https://origo.io.vn';
const BASE = '';

// Link gõ tay trong bài Markdown dạng "/cam-nang-nha-trang/..." tự được thêm `base`, nên bỏ/đổi `base` không phải sửa từng bài.
function rehypeBaseLinks() {
	const prefix = BASE.replace(/\/$/, '');
	/** @param {any} node */
	const walk = (node) => {
		if (node.type === 'element' && node.tagName === 'a') {
			const href = node.properties?.href;
			if (typeof href === 'string' && prefix && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(prefix + '/')) {
				node.properties.href = prefix + href;
			}
		}
		node.children?.forEach(walk);
	};
	return walk;
}

export default defineConfig({
	site: SITE,
	base: BASE,
	markdown: { rehypePlugins: [rehypeBaseLinks] },
	trailingSlash: 'always',
	i18n: {
		defaultLocale: 'vi',
		locales: ['vi', 'en', 'ru'], // thêm 'ko' khi làm tiếp
		routing: { prefixDefaultLocale: false },
	},
	integrations: [
		sitemap({
			i18n: { defaultLocale: 'vi', locales: { vi: 'vi-VN', en: 'en-US', ru: 'ru-RU' } },
			filter: (page) => !excluded.some((p) => new URL(page).pathname === BASE.replace(/\/$/, '') + p),
		}),
	],
});
