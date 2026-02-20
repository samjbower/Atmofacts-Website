import { getAllPostSlugs, getPostBySlug } from '@/lib/posts';

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug);
  return (
    <>
      <style>{`
        .article-container {
          background-color: #ffffff;
          color: #1b1b1b;
          padding: clamp(2rem, 5vw, 4rem) 0;
          min-height: 80vh;
        }

        .article-content {
          max-width: 800px;
          margin: 0 auto;
          background: none;
          border: none;
          padding: 0;
          box-shadow: none;
        }

        .article-header {
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          font-size: 0.95rem;
        }

        .article-header a {
          color: #ed7124;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .article-header a:hover {
          color: #d65910;
        }

        .article-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 600;
          margin-bottom: 1rem;
          line-height: 1.2;
          color: #1b1b1b;
        }

        .article-meta {
          font-size: 0.95rem;
          color: #ed7124;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 2.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .article-body {
          font-family: 'Georgia', 'Times New Roman', serif;
          font-size: 1.1rem;
          line-height: 1.8;
          color: #1b1b1b;
        }

        .article-body h2 {
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1.75rem;
          font-weight: 600;
          margin: 2rem 0 1rem 0;
          color: #1b1b1b;
        }

        .article-body h3 {
          font-family: 'Source Sans Pro', sans-serif;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 1.5rem 0 0.75rem 0;
          color: #1b1b1b;
        }

        .article-body p {
          margin-bottom: 1.5rem;
        }

        .article-body ul,
        .article-body ol {
          margin-bottom: 1.5rem;
          padding-left: 2rem;
        }

        .article-body li {
          margin-bottom: 0.75rem;
        }

        .article-body a {
          color: #ed7124;
          text-decoration: underline;
          transition: color 0.2s ease;
        }

        .article-body a:hover {
          color: #d65910;
        }

        .article-body blockquote {
          border-left: 4px solid #ed7124;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #555555;
        }

        .article-body code {
          background-color: #f5f5f5;
          padding: 0.2rem 0.4rem;
          border-radius: 3px;
          font-family: 'Courier New', monospace;
          font-size: 0.95rem;
        }

        .article-body pre {
          background-color: #f5f5f5;
          padding: 1rem;
          border-radius: 6px;
          overflow-x: auto;
          margin-bottom: 1.5rem;
        }

        .article-body pre code {
          background: none;
          padding: 0;
        }

        .article-body img {
          max-width: 100%;
          height: auto;
          margin: 2rem 0;
          border-radius: 8px;
        }
      `}</style>

      <section className="article-container">
        <div className="page-container">
          <article className="article-content">
            <div className="article-header">
              <a href="/">&larr; Home</a>
              <a href="/blog">News index</a>
            </div>
            <h1 className="article-title">{post.title}</h1>
            <div className="article-meta">{post.date}</div>
            <div className="article-body" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </article>
        </div>
      </section>
    </>
  );
}
