'use client';

import Link from 'next/link';

const footerLinks = [
  { href: '/technology', label: 'Our Technology' },
  { href: '/blog', label: 'News' },
  { href: '/#team', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
  { href: '/legal', label: 'Legal Notice' }
];

export default function Footer() {
  const handleMailingListClick = () => {
    const event = new CustomEvent('openSubscriptionModal');
    window.dispatchEvent(event);
  };

  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-columns">
          <div>
            <h3 className="footer-title">AtmoFacts</h3>
            <ul className="footer-links">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <button 
                  onClick={handleMailingListClick}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'inherit',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: 'inherit',
                    textDecoration: 'none'
                  }}
                >
                  Mailing List
                </button>
              </li>
            </ul>
          </div>
          <div className="footer-meta">
            <p className="mb-1">info@atmofacts.com</p>
            <div className="d-flex gap-3">
              <a href="https://www.linkedin.com/company/atmofacts/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/AtmoFacts" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <p className="small mb-0">&copy; {new Date().getFullYear()} AtmoFacts LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
