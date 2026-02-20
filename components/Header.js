"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/#story', label: 'About' },
  { href: '/technology', label: 'Technology' },
  { href: '/impacts', label: 'Impacts' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'News' }
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return undefined;
    }

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isHome]);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`site-header ${scrolled ? 'is-solid' : 'is-transparent'}`}>
      <div className="page-container header-row">
        <Link href="/" className="brand d-inline-flex align-items-center text-decoration-none">
          <Image
            src="/pub-images/full-color-logo-FINAL.png"
            alt="AtmoFacts logo"
            width={176}
            height={42}
            priority
          />
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link${isActive ? ' active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <button
          className={`hamburger-btn${mobileMenuOpen ? ' active' : ''}`}
          onClick={handleMobileMenuToggle}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav className={`mobile-nav${mobileMenuOpen ? ' open' : ''}`} aria-label="Mobile">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href || (item.href !== '/' && pathname.startsWith(`${item.href}/`));
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActive ? ' active' : ''}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
