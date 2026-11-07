import { vi } from './vi';
import { en } from './en';
import { ru } from './ru';
import type { Dict } from './vi';
import { prefixes, pageSlugs, categorySlugs } from './slugs.mjs';

export type { Dict };
export { pageSlugs, categorySlugs };

// Tiếng Việt là gốc (ở "/"), các ngôn ngữ khác có tiền tố.
// Thêm ngôn ngữ mới (vd ko): tạo src/i18n/ko.ts đúng kiểu Dict, thêm vào đây và vào slugs.mjs,
// tạo các file trong src/pages/ko/, thêm 'ko' vào i18n và sitemap trong astro.config.mjs.
export const languages = {
	vi: { label: 'Tiếng Việt', short: 'VI' },
	en: { label: 'English', short: 'EN' },
	ru: { label: 'Русский', short: 'RU' },
} as const;

export type Lang = keyof typeof languages;
export type PageKey = keyof typeof pageSlugs;
export type Category = keyof typeof categorySlugs;
export const categories = Object.keys(categorySlugs) as Category[];
export const langs = Object.keys(languages) as Lang[];
export const dicts: Record<Lang, Dict> = { vi, en, ru };
export const getDict = (lang: Lang): Dict => dicts[lang];

// Đường dẫn nội bộ có tính đến `base` (khi chạy ở github.io/ten-repo/)
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const pagePath = (lang: Lang, page: PageKey = 'home') => base + prefixes[lang] + pageSlugs[page][lang];
export const catPath = (lang: Lang, cat: Category) => base + prefixes[lang] + categorySlugs[cat][lang] + '/';
export const postPath = (lang: Lang, cat: Category, slug: string) => catPath(lang, cat) + slug + '/';
export const localePath = (lang: Lang) => pagePath(lang, 'home');
export const assetPath = (p: string) => base + p.replace(/^\//, '');

// Bôi đậm, nổi bật mọi chỗ có giá tiền trong một câu (trả về HTML, dùng với set:html)
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
export function hl(text: string, t: Dict) {
	// Khoảng trắng trong giá (vd "80 000 донгов") có thể là dấu cách thường hoặc dấu cách không ngắt → khớp cả hai
	const pattern = [...new Set([t.priceLong, t.price])]
		.sort((a, b) => b.length - a.length)
		.map((p) => esc(p).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/[\s\u00a0\u202f]+/g, '[\\s\\u00a0\\u202f]+'))
		.join('|');
	return esc(text).replace(new RegExp(pattern, 'g'), (m) => `<strong class="price-hl">${m}</strong>`);
}
