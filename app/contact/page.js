'use client';

import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <>
      <style>{`
        .contact-page {
          background-color: #ffffff;
          padding: clamp(2rem, 5vw, 4rem) 0;
        }

        .contact-page-header {
          border-left: 6px solid #ed7124ff;
          padding-left: 1.5rem;
          margin-bottom: 2rem;
          color: #1b1b1b;
        }

        .contact-section {
          margin-bottom: 3rem;
        }

        .contact-methods {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
          margin-top: 2rem;
        }

        .contact-method {
          padding: 2rem;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid rgba(237, 113, 36, 0.18);
          text-align: center;
        }

        .contact-method h3 {
          font-size: 1.25rem;
          color: #1b1b1b;
          margin-bottom: 1rem;
          margin-top: 0;
        }

        .contact-method a,
        .contact-method button {
          color: #ed7124;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .contact-method a:hover,
        .contact-method button:hover {
          color: #f28f3f;
        }

        @media (max-width: 768px) {
          .newsletter-card {
            padding: 2rem 1.5rem;
          }
        }
      `}</style>

      <section className="contact-page">
        <div className="page-container">
            <h1 className="section-title contact-page-header">Get in Touch</h1>
            
            <p style={{ color: '#555555', fontSize: '1rem', lineHeight: '1.6' }}>
              Please contact us using any of the methods below. We will do our best to respond within 1-2 business days.
              We look forward to hearing from you!
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <a href="mailto:info@atmofacts.com">info@atmofacts.com</a>
              </div>
              <div className="contact-method">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/company/atmofacts/" target="_blank" rel="noreferrer">
                  Follow us on LinkedIn
                </a>
              </div>
              <div className="contact-method">
                <h3>Mailing List</h3>
                <button 
                  onClick={() => {
                    const event = new CustomEvent('openSubscriptionModal');
                    window.dispatchEvent(event);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    fontSize: 'inherit',
                  }}
                >
                  Join our mailing list
                </button>
              </div>
            </div>

        </div>
      </section>

      <section style={{ backgroundColor: '#f5f5f5', color: '#1b1b1b' }}>
        <div className="page-container">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
