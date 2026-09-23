import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/posts';

const POSTS_PER_PAGE = 10;

export const metadata = {
  title: 'News'
};

export default function BlogIndex({ searchParams }) {
  const posts = getAllPostsMeta();
  const currentPage = parseInt(searchParams?.page || '1', 10);

  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));

  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section className="page-section">
      <div className="page-container">
        <div className="page-header">
          <span className="eyebrow">News</span>
          <h1>The latest from AtmoFacts</h1>
        </div>

        <div className="news-list">
          {paginatedPosts.map((post) => (
            <article key={post.slug} className="news-item">
              <div className="news-date">{formatDate(post.date)}</div>
              <h2 className="news-title">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              {post.description && <p className="news-blurb">{post.description}</p>}
            </article>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <Link
              href={`/blog?page=${Math.max(1, currentPage - 1)}`}
              className={`pagination-btn ${currentPage === 1 ? 'disabled' : ''}`}
            >
              &larr; Previous
            </Link>

            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>

            <Link
              href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
              className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
            >
              Next &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
