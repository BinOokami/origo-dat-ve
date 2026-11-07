// Đường dẫn (slug) của mọi trang, theo ngôn ngữ. Dùng chung cho code (src/i18n/index.ts) và astro.config.mjs (sitemap).
// ĐÃ ĐẶT THÌ KHÔNG ĐỔI (SEO). Nếu buộc đổi, phải có chuyển hướng 301.

export const prefixes = { vi: '', en: 'en/', ru: 'ru/' };

// Trang cố định. File trong src/pages phải khớp.
export const pageSlugs = {
	home: { vi: '', en: '', ru: '' },
	about: { vi: 'gioi-thieu/', en: 'about/', ru: 'o-nas/' },
	blog: { vi: 'blog/', en: 'blog/', ru: 'blog/' }, // trang tổng hợp mọi chuyên mục
};

// Chuyên mục bài viết: domain/<chuyên mục>/<slug bài>/
export const categorySlugs = {
	service: { vi: 'dich-vu', en: 'services', ru: 'uslugi' }, // Bản tin dịch vụ Origo
	guide: { vi: 'cam-nang-nha-trang', en: 'nha-trang-guide', ru: 'putevoditel-nyachang' }, // Cẩm nang du lịch Nha Trang
	news: { vi: 'tin-tuc-nha-trang', en: 'nha-trang-news', ru: 'novosti-nyachanga' }, // Tin tức Nha Trang
};
