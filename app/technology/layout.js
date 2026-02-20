'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TechnologyLayout({ children }) {
  const pathname = usePathname();
  
  const tabs = [
    { label: 'Platforms', href: '/technology/packages' },
    { label: 'FAQ', href: '/technology/faq' },
    { label: 'Use Cases', href: '/technology/use-cases' },
    { label: 'Tutorials', href: '/technology/tutorials' }
  ];

  const isActive = (href) => {
    if (href === '/technology/packages' && pathname === '/technology') return true;
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <>
      <style>{`
        .technology-layout-container {
          display: flex;
          gap: 0;
          min-height: 100vh;
          background-color: #ffffff;
        }

        .technology-sidebar {
          width: 220px;
          background-color: #f8f8f8;
          border-right: 1px solid #e5e5e5;
          padding: 2rem 0;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow-y: auto;
        }

        .technology-sidebar-header {
          padding: 0 1.5rem 1.5rem 1.5rem;
          border-bottom: 1px solid #e5e5e5;
          margin-bottom: 1.5rem;
        }

        .technology-sidebar-header h2 {
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: #1b1b1b;
          margin: 0;
        }

        .technology-tabs {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .technology-tab {
          display: block;
          padding: 0.85rem 1.5rem;
          color: #555555;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          border-left: 4px solid transparent;
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .technology-tab:hover {
          background-color: #f0f0f0;
          color: #1b1b1b;
        }

        .technology-tab.active {
          background-color: #fff4f0;
          border-left-color: #ed7124;
          color: #ed7124;
          font-weight: 600;
        }

        .technology-main-content {
          flex: 1;
          padding: clamp(2rem, 5vw, 4rem);
          overflow-y: auto;
        }

        @media (max-width: 768px) {
          .technology-layout-container {
            flex-direction: column;
          }

          .technology-sidebar {
            width: 100%;
            height: auto;
            position: relative;
            border-right: none;
            border-bottom: 1px solid #e5e5e5;
            padding: 1rem 0;
            display: flex;
            overflow-x: auto;
            overflow-y: visible;
          }

          .technology-sidebar-header {
            display: none;
          }

          .technology-tabs {
            flex-direction: row;
            width: 100%;
            padding: 0 1rem;
            gap: 0.5rem;
          }

          .technology-tab {
            padding: 0.75rem 1rem;
            white-space: nowrap;
            border-left: none;
            border-bottom: 3px solid transparent;
          }

          .technology-tab.active {
            border-left: none;
            border-bottom-color: #ed7124;
            background-color: transparent;
          }

          .technology-main-content {
            padding: clamp(1.5rem, 5vw, 3rem);
          }
        }
      `}</style>

      <div className="technology-layout-container">
        <aside className="technology-sidebar">
          <div className="technology-sidebar-header">
            <h2>Technology</h2>
          </div>
          <nav className="technology-tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.href}
                href={tab.href}
                className={`technology-tab ${isActive(tab.href) ? 'active' : ''}`}
              >
                {tab.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="technology-main-content">
          {children}
        </main>
      </div>
    </>
  );
}
