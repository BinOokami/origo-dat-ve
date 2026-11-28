import { defineMiddleware } from 'astro:middleware';
import { features, isBlogPath } from './data/features.mjs';

// Phần đang tạm ẩn thì địa chỉ cũ (đã lên Google, đã chia sẻ) dẫn về trang chủ, không còn đọc được nội dung
export const onRequest = defineMiddleware((context, next) => {
	const path = context.url.pathname;
	if (!features.blog && isBlogPath(path)) {
		const lang = /^\/(en|ru)\//.exec(path)?.[1];
		return context.redirect(lang ? `/${lang}/` : '/');
	}
	return next();
});
