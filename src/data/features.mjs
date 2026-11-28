// Bật / tắt tạm các phần của web. Dùng chung cho trang, middleware và astro.config.mjs (sitemap).
// blog = Tin tức, Cẩm nang, Bản tin dịch vụ (menu, trang chủ, chân trang và các trang bài viết).
// faq = Câu hỏi thường gặp.
// LƯU Ý khi bật lại blog: bài trong src/content/blog còn chữ "vé xe", phải sửa lại cách gọi trước.
import { prefixes, categorySlugs } from '../i18n/slugs.mjs';

export const features = { blog: false, faq: false };

const blogRoots = Object.entries(prefixes).flatMap(([lang, prefix]) =>
	['blog', ...Object.values(categorySlugs).map((s) => s[/** @type {'vi'|'en'|'ru'} */ (lang)])].map((slug) => `/${prefix}${slug}/`),
);
/** @param {string} path đường dẫn trong site, bắt đầu bằng "/" */
export const isBlogPath = (path) => blogRoots.some((root) => path.startsWith(root));
