'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ImpactsClient({ impacts, searchParams }) {
  const [sortBy, setSortBy] = useState(searchParams?.sort || 'year-desc');
  const [authorFilter, setAuthorFilter] = useState(searchParams?.author?.toLowerCase() || '');
  const [typeFilter, setTypeFilter] = useState(searchParams?.type || '');

  // Sorting
  const sortedImpacts = [...impacts].sort((a, b) => {
    switch (sortBy) {
      case 'year-asc':
        return a.year - b.year;
      case 'title':
        return a.title.localeCompare(b.title);
      case 'author':
        return a.authors.localeCompare(b.authors);
      case 'year-desc':
      default:
        return b.year - a.year;
    }
  });

  // Filtering by author
  const filteredImpacts = authorFilter 
    ? sortedImpacts.filter(impact => 
        impact.authors.toLowerCase().includes(authorFilter)
      )
    : sortedImpacts;

  // Filtering by type
  const typeFilteredImpacts = typeFilter
    ? filteredImpacts.filter(impact => impact.type === typeFilter)
    : filteredImpacts;

  // Pagination
  const [page, setPage] = useState(parseInt(searchParams?.page || '1', 10));
  const itemsPerPage = 12;
  const totalPages = Math.ceil(typeFilteredImpacts.length / itemsPerPage);
  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedImpacts = typeFilteredImpacts.slice(startIdx, endIdx);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setPage(1);
  };

  const handleAuthorSearch = (e) => {
    if (e.key === 'Enter') {
      setAuthorFilter(e.target.value.toLowerCase());
      setPage(1);
    }
  };

  const clearFilters = () => {
    setSortBy('year-desc');
    setAuthorFilter('');
    setTypeFilter('');
    setPage(1);
  };

  return (
    <>
      <style>{`
        .impacts-controls {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          align-items: flex-end;
        }

        .impacts-control-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .impacts-control-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #1b1b1b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .impacts-control-group select,
        .impacts-control-group input {
          padding: 0.75rem 1rem;
          border: 1px solid #d8dce0;
          border-radius: 6px;
          font-size: 0.95rem;
          background: #ffffff;
          color: #1b1b1b;
          transition: border-color 0.2s ease;
          min-width: 200px;
        }

        .impacts-control-group select:focus,
        .impacts-control-group input:focus {
          outline: none;
          border-color: #ed7124ff;
          box-shadow: 0 0 0 3px rgba(237, 113, 36, 0.1);
        }

        .clear-filters {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 1px solid #ed7124;
          color: #ed7124;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .clear-filters:hover {
          background: #ed7124;
          color: #ffffff;
        }

        .impacts-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .impact-card {
          background: #ffffff;
          border: 1px solid rgba(237, 113, 36, 0.18);
          border-radius: 12px;
          overflow: hidden;
          transition: all 0.2s ease;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .impact-card:hover {
          border-color: #ed7124ff;
          box-shadow: 0 8px 24px rgba(237, 113, 36, 0.12);
        }

        .impact-image {
          width: 100%;
          height: 180px;
          overflow: hidden;
          background: #f5f5f5;
        }

        .impact-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .impact-content {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .impact-year {
          font-size: 0.75rem;
          color: #ed7124;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 0.5rem;
        }

        .impact-title {
          margin: 0 0 0.5rem 0;
          font-size: 1.05rem;
          font-weight: 600;
          line-height: 1.4;
        }

        .impact-title a {
          color: #ed7124;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .impact-title a:hover {
          color: #f28f3f;
        }

        .impact-authors {
          font-size: 0.8rem;
          color: #999999;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .impact-summary {
          font-size: 0.9rem;
          color: #555555;
          line-height: 1.5;
          flex-grow: 1;
          margin-bottom: 1rem;
        }

        .impact-link {
          display: inline-block;
          padding: 0.5rem 0;
          color: #ed7124;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
          border-bottom: 2px solid transparent;
          transition: border-color 0.2s ease;
        }

        .impact-link:hover {
          border-bottom-color: #ed7124;
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

        .results-count {
          font-size: 0.9rem;
          color: #999999;
          margin-bottom: 1.5rem;
        }

        .no-results {
          text-align: center;
          padding: 3rem;
          color: #999999;
        }

        .no-results p:first-child {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .impacts-controls {
            flex-direction: column;
          }

          .impacts-control-group {
            width: 100%;
          }

          .impacts-control-group select,
          .impacts-control-group input {
            min-width: 100%;
          }

          .impacts-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Controls */}
      <div className="impacts-controls">
        <div className="impacts-control-group">
          <label htmlFor="sort">Sort by</label>
          <select 
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
          >
            <option value="year-desc">Most Recent</option>
            <option value="year-asc">Oldest First</option>
            <option value="title">Title (A-Z)</option>
            <option value="author">Author (A-Z)</option>
          </select>
        </div>

        <div className="impacts-control-group">
          <label htmlFor="author">Filter by author</label>
          <input 
            id="author"
            type="text"
            placeholder="e.g., Metzger..."
            defaultValue={authorFilter}
            onKeyDown={handleAuthorSearch}
          />
        </div>

        <div className="impacts-control-group">
          <label htmlFor="type">Filter by type</label>
          <select 
            id="type"
            value={typeFilter}
            onChange={(e) => {
              setTypeFilter(e.target.value);
              setPage(1);
            }}
          >
            <option value="">All Types</option>
            <option value="publication">Publication</option>
            <option value="abstract">Abstract</option>
            <option value="technical">Technical</option>
            <option value="review">Review</option>
          </select>
        </div>

        {(authorFilter || sortBy !== 'year-desc' || typeFilter) && (
          <button 
            className="clear-filters"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        )}
      </div>

      <p className="results-count">
        Showing {startIdx + 1}–{Math.min(endIdx, typeFilteredImpacts.length)} of {typeFilteredImpacts.length} results
      </p>

      {paginatedImpacts.length > 0 ? (
        <>
          <div className="impacts-grid">
            {paginatedImpacts.map((entry) => (
              <article key={entry.slug} className="impact-card">
                {entry.image && (
                  <div className="impact-image">
                    <Image 
                      src={entry.image} 
                      alt={entry.title} 
                      width={300} 
                      height={180}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                )}
                <div className="impact-content">
                  <div className="impact-year">{entry.year}</div>
                  <h3 className="impact-title">
                    <a href={entry.link} target="_blank" rel="noreferrer">
                      {entry.title}
                    </a>
                  </h3>
                  {entry.authors && <p className="impact-authors">{entry.authors}</p>}
                  {entry.summary && <p className="impact-summary">{entry.summary}</p>}
                  <a href={entry.link} target="_blank" rel="noreferrer" className="impact-link">
                    Access →
                  </a>
                </div>
              </article>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination">
              {page > 1 && (
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  className="pagination-btn"
                >
                  ← Previous
                </button>
              )}

              <span className="pagination-info">
                Page {page} of {totalPages}
              </span>

              {page < totalPages && (
                <button
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  className="pagination-btn"
                >
                  Next →
                </button>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="no-results">
          <p>No results found</p>
          <p>Try adjusting your filters</p>
        </div>
      )}
    </>
  );
}
