'use client';

import { useState } from 'react';
import Timeline from '@/components/Timeline';

export default function HistorySection() {
  const [timelineOpen, setTimelineOpen] = useState(false);

  return (
    <div className="history-section">
      <style>{`
        .history-section {
          margin-top: 2rem;
        }

        .history-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          cursor: pointer;
          color: #1b1b1b;
          background: none;
          border: none;
          padding: 0;
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          transition: color 0.2s ease;
        }

        .history-header:hover {
          color: #ed7124;
        }

        .history-arrow {
          display: inline-block;
          transition: transform 0.3s ease;
          font-size: 0.9rem;
        }

        .history-content {
          overflow: hidden;
          transition: max-height 0.3s ease, opacity 0.3s ease;
        }

        .history-content.open {
          max-height: 2000px;
          opacity: 1;
        }

        .history-content.closed {
          max-height: 0;
          opacity: 0;
        }

        @media (max-width: 768px) {
          .history-content.open {
            max-height: 4000px;
          }
        }
      `}</style>
      <button 
        className="history-header"
        onClick={() => setTimelineOpen(!timelineOpen)}
      >
        <span className="history-arrow">{timelineOpen ? '▼' : '▶'}</span>
        Our History
      </button>
      <div className={`history-content ${timelineOpen ? 'open' : 'closed'}`}>
        <Timeline />
      </div>
    </div>
  );
}
