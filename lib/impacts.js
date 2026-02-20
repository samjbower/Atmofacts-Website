import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const impactsDirectory = path.join(process.cwd(), 'content', 'impacts');

export function getAllImpactSlugs() {
  return fs
    .readdirSync(impactsDirectory)
    .filter((name) => name.endsWith('.md'))
    .map((name) => name.replace(/\.md$/, ''));
}

export function getAllImpactsMeta() {
  return getAllImpactSlugs()
    .map((slug) => {
      const fullPath = path.join(impactsDirectory, `${slug}.md`);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);
      return {
        slug,
        title: data.title ?? slug,
        year: data.year ?? new Date().getFullYear(),
        authors: data.authors ?? '',
        link: data.link ?? '',
        image: data.image ?? '',
        type: data.type ?? 'publication',
        summary: content.trim()
      };
    })
    .sort((a, b) => b.year - a.year);
}

export async function getImpactBySlug(slug) {
  const fullPath = path.join(impactsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title ?? slug,
    year: data.year ?? new Date().getFullYear(),
    authors: data.authors ?? '',
    link: data.link ?? '',
    image: data.image ?? '',
    type: data.type ?? 'publication',
    summary: content.trim()
  };
}
