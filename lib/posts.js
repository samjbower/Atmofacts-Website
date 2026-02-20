import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getAllPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}

export function getAllPostsMeta() {
  return getAllPostSlugs()
    .map((slug) => {
      const fullPath = path.join(postsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? '',
        description: data.description ?? ''
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? '',
    description: data.description ?? '',
    contentHtml
  };
}
