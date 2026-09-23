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
    setFormData((prev) => ({
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
          Accept: 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
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
    <div className="contact-form-container">
      <h3>Send us a message</h3>
      <p>Have a question or want to work with us? Fill out the form below and we&apos;ll get back to you soon.</p>

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

        <button type="submit" className="btn btn-solid" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>

        {submitStatus === 'success' && (
          <div className="contact-form-message success">
            Thank you! Your message has been sent. We&apos;ll be in touch soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="contact-form-message error">
            There was an error sending your message. Please try again, or email info@atmofacts.com.
          </div>
        )}
      </form>
    </div>
  );
}
