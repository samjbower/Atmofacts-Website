'use client';

import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section className="page-section" style={{ paddingBottom: 'clamp(3rem, 7vw, 5.5rem)' }}>
      <div className="page-container">
        <div className="page-header">
          <span className="eyebrow">Contact</span>
          <h1>Get in touch</h1>
          <p>
            Please reach out using any of the methods below. We will do our best to respond within
            one to two business days. We look forward to hearing from you.
          </p>
        </div>

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
            <h3>Mailing list</h3>
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('openSubscriptionModal'));
              }}
            >
              Join our mailing list
            </button>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
