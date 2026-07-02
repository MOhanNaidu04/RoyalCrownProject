import React, { useCallback, memo } from 'react';
import { Link } from 'react-router-dom';
import { Container, Icon } from '@/components';
import './Footer.css';

/**
 * Premium Global Footer - Royal Crown Security Services
 */
export const Footer = memo(function Footer() {
  const handleBackToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const mainContent = document.querySelector('.rcss-main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <footer className="rcss-footer" role="contentinfo">
      <Container>
        <div className="rcss-footer-grid">
          <div className="rcss-footer-col rcss-footer-col--profile">
            <h3 className="rcss-footer__logo">
              ROYAL <span className="rcss-text-gold">CROWN</span>
            </h3>
            <p className="rcss-footer__desc">
              Providing professional security services and peace of mind since 2008. Licensed and insured security provider.
            </p>
            <nav aria-label="Royal Crown Security Services social media links">
              <div className="rcss-footer__socials">
                <a href="https://facebook.com" className="rcss-footer__social-link" target="_blank" rel="noreferrer noopener" aria-label="Visit Royal Crown Security Services on Facebook (opens in new tab)">
                  <Icon name="facebook" size={16} aria-hidden="true" />
                </a>
                <a href="https://linkedin.com" className="rcss-footer__social-link" target="_blank" rel="noreferrer noopener" aria-label="Visit Royal Crown Security Services on LinkedIn (opens in new tab)">
                  <Icon name="linkedin" size={16} aria-hidden="true" />
                </a>
                <a href="https://twitter.com" className="rcss-footer__social-link" target="_blank" rel="noreferrer noopener" aria-label="Visit Royal Crown Security Services on Twitter (opens in new tab)">
                  <Icon name="twitter" size={16} aria-hidden="true" />
                </a>
              </div>
            </nav>
          </div>

          <div className="rcss-footer-col">
            <h4 className="rcss-footer__col-title">Navigation</h4>
            <ul className="rcss-footer__links-list" aria-label="Site navigation links">
              <li><Link to="/">Home Dashboard</Link></li>
              <li><Link to="/about">Our Agency</Link></li>
              <li><Link to="/services">Specialties</Link></li>
              <li><Link to="/gallery">Gallery Logs</Link></li>
              <li><Link to="/contact">Contact Center</Link></li>
            </ul>
          </div>

          <div className="rcss-footer-col">
            <h4 className="rcss-footer__col-title">Core Services</h4>
            <ul className="rcss-footer__links-list" aria-label="Core service links">
              <li><Link to="/services">Guard Services</Link></li>
              <li><Link to="/services">Bouncer Security</Link></li>
              <li><Link to="/services">Surveillance Systems</Link></li>
              <li><Link to="/services">House Keeping</Link></li>
              <li><Link to="/services">Event Security</Link></li>
            </ul>
          </div>

        </div>

        <div className="rcss-footer__divider" role="separator" />

        <div className="rcss-footer-bottom-flex">
          <span className="rcss-footer__copyright">
            © {new Date().getFullYear()} Royal Crown Security Services. All rights reserved.
          </span>
          <nav aria-label="Legal links">
            <div className="rcss-footer-bottom-links">
              <Link to="/privacy">Privacy Protocols</Link>
              <span className="rcss-footer-bottom-sep" aria-hidden="true">|</span>
              <Link to="/terms">Terms of Protection</Link>
            </div>
          </nav>

          <button
            type="button"
            className="rcss-footer__back-to-top-btn"
            onClick={handleBackToTop}
            aria-label="Scroll back to top of page"
          >
            <Icon name="arrow-up" size={16} aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  );
});

export default Footer;
