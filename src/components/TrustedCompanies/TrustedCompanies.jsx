import React, { useState, useEffect, useRef, memo } from 'react';
import { motion } from 'framer-motion';
import { Card, Container, SectionHeading } from '@/components';
import './TrustedCompanies.css';

/**
 * AnimatedCounter component increments numbers smoothly from 0 when visible
 */
function AnimatedCounter({ end, duration = 1500, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.1 });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = progress * end;
      setCount(currentVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };
    window.requestAnimationFrame(step);
  }, [isInView, end, duration]);

  return (
    <span ref={elementRef} className="rcss-counter-number">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

// Grayscale Mock SVG Corporate Logos
const LOGO_LIST = [
  {
    name: 'Apex Health',
    svg: (
      <svg viewBox="0 0 160 50" width="120" height="38" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 25h10v10h10V25h10v-10h-10v-10h-10v10H10v10z" fill="currentColor"/>
        <text x="50" y="32" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold" fill="currentColor">ApexHealth</text>
      </svg>
    )
  },
  {
    name: 'Sovereign Bank',
    svg: (
      <svg viewBox="0 0 160 50" width="120" height="38" xmlns="http://www.w3.org/2000/svg">
        <polygon points="25,5 45,20 5,20" fill="currentColor"/>
        <rect x="10" y="20" width="30" height="15" fill="currentColor"/>
        <rect x="5" y="35" width="40" height="5" fill="currentColor"/>
        <text x="55" y="32" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold" fill="currentColor">Sovereign</text>
      </svg>
    )
  },
  {
    name: 'Metro Transit',
    svg: (
      <svg viewBox="0 0 160 50" width="120" height="38" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15h30v20H5V15zm6 4v12h18V19H11z" fill="currentColor"/>
        <circle cx="12" cy="38" r="3" fill="currentColor"/>
        <circle cx="28" cy="38" r="3" fill="currentColor"/>
        <text x="45" y="32" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold" fill="currentColor">MetroRail</text>
      </svg>
    )
  },
  {
    name: 'Industrial Hub',
    svg: (
      <svg viewBox="0 0 160 50" width="120" height="38" xmlns="http://www.w3.org/2000/svg">
        <polygon points="5,35 15,25 25,35 35,25 45,35 45,15 5,15" fill="currentColor"/>
        <text x="55" y="32" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold" fill="currentColor">InduHub</text>
      </svg>
    )
  },
  {
    name: 'Grand Plaza',
    svg: (
      <svg viewBox="0 0 160 50" width="120" height="38" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="10" height="35" fill="currentColor"/>
        <rect x="20" y="15" width="10" height="25" fill="currentColor"/>
        <rect x="35" y="10" width="10" height="30" fill="currentColor"/>
        <text x="50" y="32" fontSize="16" fontFamily="Arial, sans-serif" fontWeight="bold" fill="currentColor">GrandPlaza</text>
      </svg>
    )
  }
];

export const TrustedCompanies = memo(function TrustedCompanies() {
  return (
    <section className="rcss-trusted-section">
      <Container>
        {/* Minimal Section Title */}
        <SectionHeading
          title="Endorsed by Leading Institutions"
          subtitle="Deploying professional guarding and monitoring operations across high-risk corporate, municipal, and residential sectors."
          badgeText="Verified Partners"
          align="center"
        />

        {/* CSS Infinite Scrolling Logo Marquee */}
        <div className="rcss-marquee">
          <div className="rcss-marquee__inner">
            {/* Duplicated arrays to ensure seamless infinite scrolling loop */}
            <div className="rcss-marquee__group">
              {LOGO_LIST.map((logo, idx) => (
                <div key={`group1-${idx}`} className="rcss-marquee__logo-wrapper" title={logo.name}>
                  {logo.svg}
                </div>
              ))}
            </div>
            <div className="rcss-marquee__group" aria-hidden="true">
              {LOGO_LIST.map((logo, idx) => (
                <div key={`group2-${idx}`} className="rcss-marquee__logo-wrapper" title={logo.name}>
                  {logo.svg}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spacing Divider */}
        <div className="rcss-trusted-section__divider" />

        {/* Statistics Grid using Reusable Card component */}
        <div className="rcss-grid rcss-grid--cols-3 rcss-trusted-section__stats">
          <Card hoverEffect="lift" className="rcss-trust-card">
            <h3 className="rcss-trust-card__stat">
              <AnimatedCounter end={99.8} decimals={1} suffix="%" />
            </h3>
            <span className="rcss-trust-card__title">Client Retention Rate</span>
            <p className="rcss-trust-card__desc">
              Long-term service agreements based on reliable performance, response times, and premium guarding.
            </p>
          </Card>
          <Card hoverEffect="lift" className="rcss-trust-card">
            <h3 className="rcss-trust-card__stat">
              <AnimatedCounter end={15} suffix="+" />
            </h3>
            <span className="rcss-trust-card__title">Years Active Operations</span>
            <p className="rcss-trust-card__desc">
              Securing assets, logistics lines, hospital wards, and commercial perimeters since 2011.
            </p>
          </Card>
          <Card hoverEffect="lift" className="rcss-trust-card">
            <h3 className="rcss-trust-card__stat">
              <span className="rcss-counter-number">24/7</span>
            </h3>
            <span className="rcss-trust-card__title">SOC Center Monitoring</span>
            <p className="rcss-trust-card__desc">
              Full redundancy communications link dispatching tactical response guards in minutes.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
});

export default TrustedCompanies;
