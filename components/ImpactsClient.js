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
