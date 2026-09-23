import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug);
  return {
    title: post.title,
    description: post.description || undefined
  };
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section className="article-section">
      <div className="page-container--narrow">
        <article>
          <div className="article-header">
            <Link className="text-link" href="/">
              &larr; Home
            </Link>
            <Link className="text-link" href="/blog">
              News index
            </Link>
          </div>
          <h1 className="article-title">{post.title}</h1>
          <div className="article-meta">{formatDate(post.date)}</div>
          <div className="article-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </div>
    </section>
  );
}
