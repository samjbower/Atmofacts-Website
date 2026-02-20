'use client';

import { useState, useEffect } from 'react';

export default function SubscriptionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if modal has already been shown this session
    const hasShownModal = sessionStorage.getItem('subscriptionModalShown');
    if (hasShownModal) {
      setHasShown(true);
    }
  }, []);

  useEffect(() => {
    // Listen for event from contact page or footer button
    const handleOpenModal = () => {
      setIsOpen(true);
      setHasShown(true);
      sessionStorage.setItem('subscriptionModalShown', 'true');
    };

    window.addEventListener('openSubscriptionModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('openSubscriptionModal', handleOpenModal);
    };
  }, []);

  useEffect(() => {
    // Handle scroll to show modal
    if (hasShown) return;

    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage > 25 && !isOpen && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        sessionStorage.setItem('subscriptionModalShown', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown, isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .subscription-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.3s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .subscription-modal-content {
          background: #ffffff;
          border-radius: 16px;
          box-shadow: 0 25px 55px rgba(0, 0, 0, 0.2);
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.3s ease-out;
          position: relative;
        }

        @keyframes slideUp {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .subscription-modal-close {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #ed7124;
          cursor: pointer;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
          z-index: 10000;
        }

        .subscription-modal-close:hover {
          color: #f28f3f;
        }

        .subscription-modal-inner {
          padding: 3rem;
        }

        /* Web (50% width) */
        @media (min-width: 769px) {
          .subscription-modal-content {
            width: 50%;
            max-width: 600px;
          }
        }

        /* Mobile (full screen) */
        @media (max-width: 768px) {
          .subscription-modal-overlay {
            align-items: flex-end;
          }

          .subscription-modal-content {
            width: 100%;
            border-radius: 16px 16px 0 0;
            max-height: 90vh;
          }

          .subscription-modal-inner {
            padding: 2rem 1.5rem;
          }

          .subscription-modal-close {
            top: 1rem;
            right: 1rem;
          }
        }

        /* Mailchimp form styles within modal */
        #mc_embed_signup {
          text-align: left;
          width: 100%;
          margin: 0 auto;
        }

        #mc_embed_signup form {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        #mc_embed_signup .mc-field-group {
          display: flex;
          flex-direction: column;
        }

        #mc_embed_signup label {
          font-weight: 600;
          color: #1b1b1b;
          margin-bottom: 0.35rem;
        }

        #mc_embed_signup input[type="email"],
        #mc_embed_signup input[type="text"],
        #mc_embed_signup input[type="tel"],
        #mc_embed_signup select {
          border: 1px solid #d8dce0;
          border-radius: 12px;
          padding: 0.85rem;
          font-size: 1rem;
          background: rgba(17, 17, 17, 0.02);
          color: #1b1b1b;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }

        #mc_embed_signup input[type="email"]:focus,
        #mc_embed_signup input[type="text"]:focus,
        #mc_embed_signup input[type="tel"]:focus,
        #mc_embed_signup select:focus {
          border-color: #ed7124ff;
          box-shadow: 0 0 0 3px rgba(237, 113, 36, 0.2);
          outline: none;
          background: #ffffff;
          color: #1b1b1b;
        }

        #mc_embed_signup input::placeholder,
        #mc_embed_signup textarea::placeholder {
          color: rgba(27, 27, 27, 0.6);
        }

        #mc_embed_signup .button {
          background: #ed7124ff;
          border: none;
          color: #ffffff;
          font-weight: 600;
          padding: 0.95rem 1rem;
          border-radius: 999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          cursor: pointer;
          width: 100%;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        #mc_embed_signup .button:hover {
          background: #f28f3f;
          transform: translateY(-1px);
        }

        #mc_embed_signup .indicates-required,
        #mc_embed_signup .asterisk {
          color: #ed7124ff;
        }

        #mc_embed_signup .indicates-required {
          display: block;
          text-align: right;
          font-size: 0.85rem;
          margin-bottom: -0.5rem;
        }

        #mc_embed_signup .clear {
          width: 100%;
        }

        #mc_embed_signup .response {
          background: rgba(237, 113, 36, 0.08);
          border-left: 4px solid #ed7124ff;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          font-size: 0.9rem;
          color: #333333;
        }

        #mc_embed_signup h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
          color: #1b1b1b;
        }

        .newsletter-disclaimer {
          font-size: 0.8rem;
          color: rgba(27, 27, 27, 0.6);
          margin-top: 0.5rem;
          line-height: 1.4;
        }
      `}</style>

      <div className="subscription-modal-overlay" onClick={handleClose}>
        <div className="subscription-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="subscription-modal-close" onClick={handleClose} aria-label="Close">
            ✕
          </button>
          
          <div className="subscription-modal-inner">
            <div id="mc_embed_shell">
              <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
              <div id="mc_embed_signup">
                <form
                  action="https://atmofacts.us14.list-manage.com/subscribe/post?u=d6553a9607eb11c8dda1557f5&id=6d335228a4&f_id=00f287e0f0"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                >
                  <div id="mc_embed_signup_scroll">
                    <h2>Join our mailing list</h2>
                    <p style={{ color: '#1b1b1b', marginBottom: '1.5rem' }}>
                      Get updates on the latest in atmospheric science and sustainable climate solutions.
                    </p>
                    <div className="indicates-required">
                      <span className="asterisk">*</span> indicates required
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">
                        Email Address <span className="asterisk">*</span>
                      </label>
                      <input
                        type="email"
                        name="EMAIL"
                        className="required email"
                        id="mce-EMAIL"
                        required
                        defaultValue=""
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-FNAME">First Name</label>
                      <input
                        type="text"
                        name="FNAME"
                        className="text"
                        id="mce-FNAME"
                        defaultValue=""
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-LNAME">Last Name</label>
                      <input
                        type="text"
                        name="LNAME"
                        className="text"
                        id="mce-LNAME"
                        defaultValue=""
                      />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-MMERGE7">Affiliation</label>
                      <input
                        type="text"
                        name="MMERGE7"
                        className="text"
                        id="mce-MMERGE7"
                        defaultValue=""
                      />
                    </div>
                    <div id="mce-responses" className="clear">
                      <div
                        className="response"
                        id="mce-error-response"
                        style={{ display: 'none' }}
                      ></div>
                      <div
                        className="response"
                        id="mce-success-response"
                        style={{ display: 'none' }}
                      ></div>
                    </div>
                    <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                      <input
                        type="text"
                        name="b_d6553a9607eb11c8dda1557f5_6d335228a4"
                        tabIndex="-1"
                        defaultValue=""
                      />
                    </div>
                    <div className="clear">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                        value="Subscribe"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <script
                type="text/javascript"
                src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
              ></script>
              <script type="text/javascript">
                {`
                  (function($) {
                    window.fnames = new Array();
                    window.ftypes = new Array();
                    fnames[0] = 'EMAIL';
                    ftypes[0] = 'email';
                    fnames[1] = 'FNAME';
                    ftypes[1] = 'text';
                    fnames[2] = 'LNAME';
                    ftypes[2] = 'text';
                    fnames[7] = 'MMERGE7';
                    ftypes[7] = 'text';
                    fnames[3] = 'ADDRESS';
                    ftypes[3] = 'address';
                    fnames[4] = 'PHONE';
                    ftypes[4] = 'phone';
                    fnames[5] = 'BIRTHDAY';
                    ftypes[5] = 'birthday';
                    fnames[6] = 'COMPANY';
                    ftypes[6] = 'text';
                  }(jQuery));
                  var $mcj = jQuery.noConflict(true);
                `}
              </script>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
