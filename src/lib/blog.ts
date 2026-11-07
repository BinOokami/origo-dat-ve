import { getCollection, type CollectionEntry } from 'astro:content';
import { categories, categorySlugs, postPath, type Category, type Lang } from '../i18n';

export type Post = CollectionEntry<'blog'>;

// id có dạng "vi/ten-bai" → đường dẫn bài là "ten-bai"
export const postSlug = (p: Post) => p.id.split('/').pop()!;
export const postUrl = (p: Post) => postPath(p.data.lang, p.data.category, postSlug(p));

export async function postsFor(lang: Lang) {
	const posts = await getCollection('blog', (p) => p.data.lang === lang);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function translationsOf(post: Post) {
	return getCollection('blog', (p) => p.data.translationKey === post.data.translationKey);
}

// Cho src/pages/[<lang>/]<cat>/index.astro: mọi chuyên mục (kể cả chưa có bài)
export async function catPaths(lang: Lang) {
	return categories.map((cat) => ({ params: { cat: categorySlugs[cat][lang] }, props: { cat: cat as Category } }));
}

// Cho src/pages/[<lang>/]<cat>/<slug>.astro
export async function postPaths(lang: Lang) {
	const posts = await postsFor(lang);
	return posts.map((post) => ({ params: { cat: categorySlugs[post.data.category][lang], slug: postSlug(post) }, props: { post } }));
}
