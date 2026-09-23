'use client';

import { useState } from 'react';
import faqs from '@/content/faq.json';

export default function FAQAccordion() {
  const [openId, setOpenId] = useState(null);

  const categories = [...new Set(faqs.map((faq) => faq.category))];

  return (
    <div className="faq-container">
      <div className="page-header">
        <h1 className="tech-header">Frequently asked questions</h1>
        <p>How FluxMapper works, what it needs, and what you get back.</p>
      </div>

      {categories.map((category) => (
        <div key={category} className="faq-category">
          <h2 className="faq-category-title">{category}</h2>
          {faqs
            .filter((faq) => faq.category === category)
            .map((faq) => (
              <div key={faq.id} className={`faq-item ${openId === faq.id ? 'open' : ''}`}>
                <button
                  className="faq-question"
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  aria-expanded={openId === faq.id}
                >
                  <span>{faq.question}</span>
                  <span className="faq-toggle-icon">&darr;</span>
                </button>
                <div className="faq-answer">
                  <p className="faq-answer-text">{faq.answer}</p>
                </div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}
