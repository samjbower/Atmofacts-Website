'use client';

import Link from 'next/link';

const exploreLinks = [
  { href: '/technology', label: 'Technology' },
  { href: '/impacts', label: 'Impacts' },
  { href: '/blog', label: 'News' },
  { href: '/contact', label: 'Contact' },
  { href: '/legal', label: 'Legal notice' }
];

export default function Footer() {
  const handleMailingListClick = () => {
    window.dispatchEvent(new CustomEvent('openSubscriptionModal'));
  };

  return (
    <footer className="site-footer">
      <div className="page-container">
        <div className="footer-columns">
          <div className="footer-tagline">
            <p className="footer-motto">Where every molecule meets its map.&trade;</p>
            <p>
              AtmoFacts makes land-atmosphere exchange visible, attributable, and actionable at the
              scale where land is managed.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-links">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
              <li>
                <button onClick={handleMailingListClick}>Mailing list</button>
              </li>
            </ul>
          </div>
          <div className="footer-meta">
            <h3 className="footer-title">Reach us</h3>
            <p style={{ marginBottom: '0.35rem' }}>
              <a href="mailto:info@atmofacts.com">info@atmofacts.com</a>
            </p>
            <p>Longmont, Colorado</p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/company/atmofacts/" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://github.com/AtmoFacts" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} AtmoFacts LLC. All rights reserved.</span>
          <span>Built in the Colorado Front Range.</span>
        </div>
      </div>
    </footer>
  );
}
