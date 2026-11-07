import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Bài blog: src/content/blog/<ngôn ngữ>/<slug>.md. Tên file = đường dẫn bài (không dấu, có từ khóa), đặt rồi không đổi.
// URL: /<chuyên mục>/<slug>/ (vd /cam-nang-nha-trang/tu-san-bay-cam-ranh-ve-trung-tam-nha-trang/), xem src/i18n/slugs.mjs
const blog = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string().max(70), // tiêu đề SEO, nên 50–65 ký tự, có từ khóa chính
		description: z.string().max(170), // mô tả SEO 120–160 ký tự
		lang: z.enum(['vi', 'en', 'ru']),
		// service = Bản tin dịch vụ (/dich-vu/), guide = Cẩm nang du lịch Nha Trang (/cam-nang-nha-trang/), news = Tin tức Nha Trang (/tin-tuc-nha-trang/)
		category: z.enum(['service', 'guide', 'news']),
		keywords: z.array(z.string()).min(1), // từ khóa chính đứng đầu
		faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(), // nếu có → thêm schema FAQPage
		date: z.coerce.date(),
		updated: z.coerce.date().optional(),
		cover: z.string(),
		coverAlt: z.string(),
		// Bản dịch của cùng một bài dùng chung translationKey (để gắn hreflang và nút đổi ngôn ngữ)
		translationKey: z.string(),
		// Nội dung do AI viết phải có người soát. false = trang gắn noindex, Google không lập chỉ mục.
		reviewed: z.boolean().default(false),
	}),
});

export const collections = { blog };
