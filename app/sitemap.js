import { getAllPostsMeta } from '@/lib/posts';

const SITE = 'https://www.atmofacts.com';

export default function sitemap() {
  const pages = [
    { path: '/', priority: 1.0 },
    { path: '/technology/packages', priority: 0.8 },
    { path: '/technology/faq', priority: 0.7 },
    { path: '/technology/tutorials', priority: 0.6 },
    { path: '/impacts', priority: 0.7 },
    { path: '/blog', priority: 0.7 },
    { path: '/contact', priority: 0.6 },
    { path: '/schedule', priority: 0.3 },
    { path: '/legal', priority: 0.2 }
  ].map(({ path, priority }) => ({ url: `${SITE}${path}`, priority }));

  const posts = getAllPostsMeta().map((post) => ({
    url: `${SITE}/blog/${post.slug}`,
    lastModified: post.date || undefined,
    priority: 0.6
  }));

  return [...pages, ...posts];
}
