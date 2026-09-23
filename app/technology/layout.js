'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TechnologyLayout({ children }) {
  const pathname = usePathname();

  const tabs = [
    { label: 'Platforms', href: '/technology/packages' },
    { label: 'FAQ', href: '/technology/faq' },
    { label: 'Tutorials', href: '/technology/tutorials' }
  ];

  const isActive = (href) => {
    if (href === '/technology/packages' && pathname === '/technology') return true;
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <div className="technology-layout-container">
      <aside className="technology-sidebar">
        <div className="technology-sidebar-header">
          <h2>Technology</h2>
        </div>
        <nav className="technology-tabs">
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href} className={`technology-tab ${isActive(tab.href) ? 'active' : ''}`}>
              {tab.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="technology-main-content">{children}</main>
    </div>
  );
}
