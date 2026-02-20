'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null
  const MAX_MESSAGE_LENGTH = 500;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mojnvrrp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus(null), 5000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        .contact-form-container {
          background: #ffffff;
          border-radius: 16px;
          padding: 2.5rem;
          border: 1px solid rgba(237, 113, 36, 0.18);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
        }

        .contact-form-container h3 {
          margin-top: 0;
          margin-bottom: 0.5rem;
          font-size: 1.5rem;
          color: #1b1b1b;
        }

        .contact-form-container p {
          color: #666666;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .contact-form-group {
          display: flex;
          flex-direction: column;
          margin-bottom: 1.25rem;
        }

        .contact-form-group label {
          font-weight: 600;
          color: #1b1b1b;
          margin-bottom: 0.35rem;
          font-size: 0.95rem;
        }

        .contact-form-group input,
        .contact-form-group textarea {
          border: 1px solid #d8dce0;
          border-radius: 12px;
          padding: 0.85rem;
          font-size: 1rem;
          font-family: 'Source Sans Pro', sans-serif;
          background: rgba(17, 17, 17, 0.02);
          color: #1b1b1b;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .contact-form-group input:focus,
        .contact-form-group textarea:focus {
          border-color: #ed7124ff;
          box-shadow: 0 0 0 3px rgba(237, 113, 36, 0.2);
          outline: none;
          background: #ffffff;
        }

        .contact-form-group input::placeholder,
        .contact-form-group textarea::placeholder {
          color: rgba(27, 27, 27, 0.6);
        }

        .contact-form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .character-count {
          font-size: 0.75rem;
          color: #999999;
          margin-top: 0.25rem;
          text-align: right;
        }

        .character-count.warning {
          color: #ed7124;
          font-weight: 600;
        }

        .contact-form-submit {
          background: #ed7124ff;
          border: none;
          color: #ffffff;
          font-weight: 600;
          padding: 0.95rem 1.5rem;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background 0.2s ease, transform 0.2s ease, opacity 0.2s ease;
        }

        .contact-form-submit:hover:not(:disabled) {
          background: #f28f3f;
          transform: translateY(-1px);
        }

        .contact-form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .contact-form-message {
          margin-top: 1.5rem;
          padding: 1rem;
          border-radius: 12px;
          font-weight: 500;
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .contact-form-message.success {
          background: rgba(76, 175, 80, 0.1);
          border-left: 4px solid #4caf50;
          color: #2e7d32;
        }

        .contact-form-message.error {
          background: rgba(244, 67, 54, 0.1);
          border-left: 4px solid #f44336;
          color: #c62828;
        }

        @media (max-width: 768px) {
          .contact-form-container {
            padding: 1.5rem;
          }

          .contact-form-container h3 {
            font-size: 1.25rem;
          }
        }
      `}</style>

      <div className="contact-form-container">
        <h3>Send us a message</h3>
        <p>Have a question or want to work with us? Fill out the form below and we'll get back to you soon.</p>
        
        <form onSubmit={handleSubmit}>
          <div className="contact-form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what's on your mind..."
              maxLength={MAX_MESSAGE_LENGTH}
              required
            />
            <div className={`character-count ${formData.message.length > MAX_MESSAGE_LENGTH * 0.85 ? 'warning' : ''}`}>
              {formData.message.length} / {MAX_MESSAGE_LENGTH}
            </div>
          </div>

          <button
            type="submit"
            className="contact-form-submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>

          {submitStatus === 'success' && (
            <div className="contact-form-message success">
              ✓ Thank you! Your message has been sent successfully. We'll be in touch soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="contact-form-message error">
              ✕ Oops! There was an error sending your message. Please try again.
            </div>
          )}
        </form>
      </div>
    </>
  );
}
