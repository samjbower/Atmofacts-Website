import Link from 'next/link';
import { getAllPostsMeta } from '@/lib/posts';

const POSTS_PER_PAGE = 10;

export default function BlogIndex({ searchParams }) {
  const posts = getAllPostsMeta();
  const currentPage = parseInt(searchParams?.page || '1', 10);

  // Sort posts by date (newest first)
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
    <>
      <style>{`
        .news-container {
          background-color: #ffffff;
          color: #1b1b1b;
          padding: clamp(2rem, 5vw, 4rem) 0;
        }

        .news-header {
          text-align: left;
          border-left: 6px solid #ed7124ff;
          padding-left: 1.5rem;
          margin-bottom: 2.5rem;
          color: #1b1b1b;
        }

        .news-list {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .news-item {
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          padding-bottom: 2.5rem;
        }

        .news-item:last-child {
          border-bottom: none;
        }

        .news-date {
          font-size: 0.85rem;
          color: #ed7124;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 0.5rem;
        }

        .news-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0.5rem 0 0.75rem 0;
          line-height: 1.3;
          font-family: 'Georgia', 'Times New Roman', serif;
        }

        .news-title a {
          color: #1b1b1b;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .news-title a:hover {
          color: #ed7124;
        }

        .news-blurb {
          margin: 0;
          color: #555555;
          font-size: 1rem;
          line-height: 1.6;
          font-family: 'Georgia', 'Times New Roman', serif;
        }

        .pagination {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          align-items: center;
          flex-wrap: wrap;
        }

        .pagination-btn {
          padding: 0.5rem 1rem;
          border: 1px solid #ed7124;
          background: none;
          color: #ed7124;
          cursor: pointer;
          border-radius: 4px;
          font-weight: 600;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }

        .pagination-btn:hover:not(.disabled) {
          background-color: #ed7124;
          color: #ffffff;
        }

        .pagination-btn.active {
          background-color: #ed7124;
          color: #ffffff;
        }

        .pagination-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          pointer-events: none;
        }

        .pagination-info {
          color: #555555;
          font-size: 0.95rem;
          margin: 0 1rem;
        }
      `}</style>

      <section className="news-container">
        <div className="page-container">
          <h1 className="section-title news-header">Latest News</h1>
          
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
                ← Previous
              </Link>

              <span className="pagination-info">
                Page {currentPage} of {totalPages}
              </span>

              <Link
                href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}
                className={`pagination-btn ${currentPage === totalPages ? 'disabled' : ''}`}
              >
                Next →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
