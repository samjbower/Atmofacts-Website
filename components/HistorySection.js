'use client';

import { useState } from 'react';
import Timeline from '@/components/Timeline';

export default function HistorySection() {
  const [timelineOpen, setTimelineOpen] = useState(false);

  return (
    <div className="history-section">
      <button className="history-header" onClick={() => setTimelineOpen(!timelineOpen)}>
        <span className="history-arrow">{timelineOpen ? '▼' : '▶'}</span>
        Our history
      </button>
      <div className={`history-content ${timelineOpen ? 'open' : 'closed'}`}>
        <Timeline />
      </div>
    </div>
  );
}
