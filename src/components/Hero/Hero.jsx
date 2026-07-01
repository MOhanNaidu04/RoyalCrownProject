import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon, Badge, Container } from '@/components';
import officerImg from '@/assets/images/security_officer.png';
import './Hero.css';

export function Hero() {
  return (
    <section className="rcss-hero-section" aria-label="Hero - Your Safety, Our Priority">
      <div className="rcss-hero__ambient-bg" aria-hidden="true" />
      <div className="rcss-hero__grid-overlay" aria-hidden="true" />
      <div className="rcss-hero__sweep-light" aria-hidden="true" />

      <Container>
        <div className="rcss-hero-grid">
          <div className="rcss-hero__text-side">
            <div className="rcss-hero__hotline-tag">
              <span className="rcss-hotline-ping" aria-hidden="true" />
              <span className="rcss-hotline-txt">
                Emergency Hotline (24/7): <strong>+91 9573902632</strong>
              </span>
            </div>

            <h1 className="rcss-hero__title-heading">
              Your Safety,<br />
              <span className="rcss-txt-gold">Our Priority</span>
            </h1>

            <p className="rcss-hero__subtitle-paragraph">
              Royal Crown Security Services provides comprehensive security solutions tailored to your specific needs. Trust us to protect what matters most.
            </p>

            <div className="rcss-hero__statistics" aria-label="Company statistics">
              <div className="rcss-hero-metric">
                <span className="rcss-hero-metric__val">15+</span>
                <span className="rcss-hero-metric__lbl">Years Active</span>
              </div>
              <div className="rcss-hero-metric__divider" aria-hidden="true" />
              <div className="rcss-hero-metric">
                <span className="rcss-hero-metric__val">500+</span>
                <span className="rcss-hero-metric__lbl">Security Personnel</span>
              </div>
              <div className="rcss-hero-metric__divider" aria-hidden="true" />
              <div className="rcss-hero-metric">
                <span className="rcss-hero-metric__val">24/7</span>
                <span className="rcss-hero-metric__lbl">Command Center</span>
              </div>
            </div>

            <div className="rcss-hero__action-buttons">
              <Link to="/contact">
                <Button variant="secondary" size="lg" icon={<Icon name="shield" size={20} />}>
                  Get a Quote
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="rcss-hero__outline-button">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="rcss-hero__trust-seals">
              <Badge variant="primary" className="rcss-hero-seal">🛡️ Government Approved</Badge>
              <Badge variant="primary" className="rcss-hero-seal">⭐ ISO 9001 Certified</Badge>
              <Badge variant="primary" className="rcss-hero-seal">💼 Licensed & Insured</Badge>
            </div>
          </div>

          <div className="rcss-hero__graphics-side">
            <div className="rcss-hero__graphics-viewport">
              <div className="rcss-hero__radar-ring rcss-hero__radar-ring--one" aria-hidden="true" />
              <div className="rcss-hero__radar-ring rcss-hero__radar-ring--two" aria-hidden="true" />
              <div className="rcss-hero__status-chip rcss-hero__status-chip--top" aria-hidden="true">
                <span>Active Patrol</span>
              </div>
              <div className="rcss-hero__status-chip rcss-hero__status-chip--bottom" aria-hidden="true">
                <span>24/7 Monitoring</span>
              </div>
              <div className="rcss-hero__graphics-glow" aria-hidden="true" />
              <img
                src={officerImg}
                alt="Elite Royal Crown Security Officer"
                className="rcss-hero__graphics-officer"
                loading="eager"
                fetchpriority="high"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
