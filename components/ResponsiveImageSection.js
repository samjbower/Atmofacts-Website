'use client';

import Image from 'next/image';

export default function ResponsiveImageSection() {

  return (
    <div className="responsive-image-container">
      {/* Desktop view - horizontal image */}
      <div className="desktop-image-wrapper">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '1rem', maxWidth: '100%' }}>
            <Image
              src="/images/websiteoverview.jpg"
              alt="FluxMapper overview"
              width={1400}
              height={800}
              priority
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* Mobile view - vertical image */}
      <div className="mobile-image-wrapper">
        <div style={{ backgroundColor: '#ffffff', borderRadius: '12px', padding: '1rem', width: '100%' }}>
          <Image
            src="/images/FM-vertical.svg"
            alt="FluxMapper overview vertical"
            width={500}
            height={1400}
            priority
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
      </div>

      <style jsx>{`
        .responsive-image-container {
          width: 100%;
        }

        .desktop-image-wrapper {
          display: block;
        }

        .mobile-image-wrapper {
          display: none;
        }

        @media (max-width: 768px) {
          .responsive-image-container {
            width: 100vw;
            position: relative;
            left: 50%;
            right: 50%;
            margin-left: -50vw;
            margin-right: -50vw;
          }

          .desktop-image-wrapper {
            display: none;
          }

          .mobile-image-wrapper {
            display: block;
            padding: 1rem;
            width: 100%;
          }

          .mobile-image-wrapper > div {
            margin: 0 auto;
          }
        }
      `}</style>
    </div>
  );
}
