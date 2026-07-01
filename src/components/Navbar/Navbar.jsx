import React, { useState, useEffect, useCallback, memo, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Icon } from '@/components';
import logoImg from '@/assets/logos/ChatGPT Image Jul 1, 2026, 02_10_50 PM.png';
import './Navbar.css';

// Static data defined outside component — never recreated on render
const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Services',
    path: '/services',
    dropdown: [
      { label: 'Tactical Guarding', path: '/services/guard-services' },
      { label: 'Mobile Patrols',   path: '/services/mobile-patrols' },
      { label: 'Executive Escort', path: '/services/executive-escort' }
    ]
  },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' }
];

const MOBILE_VARIANTS = {
  hidden:  { x: '100%' },
  visible: { x: 0,     transition: { type: 'tween', ease: 'easeInOut', duration: 0.3 } },
  exit:    { x: '100%', transition: { type: 'tween', ease: 'easeInOut', duration: 0.25 } }
};

/**
 * Premium responsive Navbar for Royal Crown Security Services.
 * useCallback stabilises all event handlers to prevent child re-renders.
 * memo wraps the entire Navbar so location-unrelated re-renders are blocked.
 */
export const Navbar = memo(function Navbar() {
  const [isScrolled,      setIsScrolled]       = useState(false);
  const [mobileMenuOpen,  setMobileMenuOpen]   = useState(false);
  const [dropdownOpen,    setDropdownOpen]     = useState(false);
  const [isDarkMode,      setIsDarkMode]       = useState(() => {
    // Check local storage or system preference on initial load
    const saved = localStorage.getItem('rcss-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const location = useLocation();

  // useMemo: derived booleans — recalculate only when location/scroll changes
  const isHomePage = useMemo(() => location.pathname === '/', [location.pathname]);
  const isSolid    = useMemo(() => !isHomePage || isScrolled, [isHomePage, isScrolled]);

  // useCallback: stable handler refs so scroll listener doesn't re-attach
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  const handleDropdownEnter = useCallback(() => setDropdownOpen(true),  []);
  const handleDropdownLeave = useCallback(() => setDropdownOpen(false), []);
  const toggleMobileMenu    = useCallback(() => setMobileMenuOpen(prev => !prev), []);
  const closeMobileMenu     = useCallback(() => setMobileMenuOpen(false), []);

  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }
    handleScroll(); // Check immediately on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, handleScroll]);

  // Handle theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('rcss-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('rcss-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = useCallback(() => setIsDarkMode(prev => !prev), []);

  // Collapse on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`rcss-navbar ${isSolid ? 'rcss-navbar--solid' : 'rcss-navbar--transparent'} ${isScrolled ? 'rcss-navbar--scrolled' : ''}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="rcss-navbar__container">
        {/* Brand Logo */}
        <Link to="/" className="rcss-navbar__logo" aria-label="Royal Crown Security Services — Home">
          <img
            src={logoImg}
            alt="Royal Crown Security Services"
            className="rcss-navbar__logo-img"
            loading="eager"
            fetchpriority="high"
          />
          <div className="rcss-navbar__logo-text">
            Royal Crown <span className="rcss-navbar__logo-highlight">Security Services</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="rcss-navbar__desktop-links" role="list">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className={`rcss-navbar__nav-item ${link.dropdown ? 'rcss-navbar__nav-item--has-dropdown' : ''}`}
              onMouseEnter={link.dropdown ? handleDropdownEnter : undefined}
              onMouseLeave={link.dropdown ? handleDropdownLeave : undefined}
            >
              {link.dropdown ? (
                <>
                  <button
                    type="button"
                    className="rcss-navbar__link-btn"
                    aria-expanded={dropdownOpen}
                    aria-haspopup="true"
                  >
                    {link.label} <span className="rcss-navbar__chevron-arrow">▼</span>
                  </button>
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        className="rcss-navbar__dropdown"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0  }}
                        exit={{ opacity: 0, y: 10    }}
                        transition={{ duration: 0.2  }}
                      >
                        {link.dropdown.map((subItem) => (
                          <li key={subItem.label}>
                            <Link to={subItem.path} className={`rcss-navbar__dropdown-link ${location.pathname === subItem.path ? 'rcss-navbar__dropdown-link--active' : ''}`}>
                              {subItem.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link to={link.path} className={`rcss-navbar__link ${location.pathname === link.path ? 'rcss-navbar__link--active' : ''}`}>
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="rcss-navbar__actions">
          <button
            type="button"
            className="rcss-navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <Icon name={isDarkMode ? 'sun' : 'moon'} size={20} />
          </button>

          <Link to="/contact" className="rcss-navbar__cta-btn" aria-label="Request a security quote">
            <Button variant={isSolid ? 'primary' : 'secondary'} size="sm">
              Secure Quote
            </Button>
          </Link>

          <button
            type="button"
            className={`rcss-navbar__hamburger ${mobileMenuOpen ? 'rcss-navbar__hamburger--open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="rcss-mobile-drawer"
          >
            <span className="rcss-navbar__hamburger-bar" />
            <span className="rcss-navbar__hamburger-bar" />
            <span className="rcss-navbar__hamburger-bar" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="rcss-navbar__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              aria-hidden="true"
            />
            <motion.div
              id="rcss-mobile-drawer"
              className="rcss-navbar__mobile-drawer"
              variants={MOBILE_VARIANTS}
              initial="hidden"
              animate="visible"
              exit="exit"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="rcss-navbar__mobile-drawer-header">
                <div className="rcss-navbar__mobile-brand-wrap">
                  <img
                    src={logoImg}
                    alt="Royal Crown Security Services"
                    className="rcss-navbar__mobile-logo-img"
                  />
                </div>
                <button
                  type="button"
                  className="rcss-navbar__mobile-close"
                  onClick={closeMobileMenu}
                  aria-label="Close navigation menu"
                >
                  <Icon name="close" size={24} aria-hidden="true" />
                </button>
              </div>

              <ul className="rcss-navbar__mobile-links" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className="rcss-navbar__mobile-nav-item">
                    {link.dropdown ? (
                      <div className="rcss-navbar__mobile-dropdown-group">
                        <span className="rcss-navbar__mobile-link-header">{link.label}</span>
                        <ul className="rcss-navbar__mobile-dropdown-list" role="list">
                          {link.dropdown.map((subItem) => (
                            <li key={subItem.label}>
                              <Link
                                to={subItem.path}
                                className={`rcss-navbar__mobile-dropdown-link ${location.pathname === subItem.path ? 'rcss-navbar__mobile-dropdown-link--active' : ''}`}
                                onClick={closeMobileMenu}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        to={link.path}
                        className={`rcss-navbar__mobile-link ${location.pathname === link.path ? 'rcss-navbar__mobile-link--active' : ''}`}
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
                <li className="rcss-navbar__mobile-nav-item rcss-navbar__mobile-nav-item--cta">
                  <Link to="/contact" onClick={closeMobileMenu}>
                    <Button variant="secondary" fullWidth>Secure Quote</Button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
});

export default Navbar;
