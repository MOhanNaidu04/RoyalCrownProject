import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, Button, Icon } from '@/components';
import lobbyImg from '@/assets/images/office_lobby.png';
import officerImg from '@/assets/images/security_officer.png';
import './CallToAction.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Premium Call To Action section with GSAP ScrollTrigger parallax effects
 */
export function CallToAction() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    const bg = bgRef.current;
    const section = sectionRef.current;
    if (!bg || !section) return;

    // Build parallax timeline scrubbed by scroll position
    const anim = gsap.fromTo(bg, 
      { yPercent: -15 },
      { 
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  const handleEmergencyCall = () => {
    window.location.href = 'tel:+919573902632';
  };

  return (
    <section ref={sectionRef} className="rcss-cta-section">
      {/* Parallax Background Image */}
      <img ref={bgRef} src={lobbyImg} alt="" className="rcss-cta__bg-parallax" />

      {/* Dark tint backing */}
      <div className="rcss-cta__overlay" />

      <Container>
        <div className="rcss-cta-grid">
          {/* Left Text side */}
          <div className="rcss-cta__text-side">
            <span className="rcss-cta__badge">Secure Your Assets Today</span>
            <h2 className="rcss-cta__heading">
              Ready to Upgrade to Elite Level Protection?
            </h2>
            <p className="rcss-cta__desc">
              Contact our dispatch team now for an obligation-free risk audit. We customize shielding schedules for healthcare clinics, banks, construction lines, and estates.
            </p>

            <div className="rcss-cta__actions">
              <a href="#contact">
                <Button variant="primary" size="lg">Get a Quote</Button>
              </a>
              <button
                type="button"
                className="rcss-cta__phone-btn"
                onClick={handleEmergencyCall}
                aria-label="Call Royal Crown Security Services: +91 9573902632"
              >
                <Icon name="phone" size={18} className="rcss-text-gold" />
                <span>Call Now: +91 9573902632</span>
              </button>
            </div>
          </div>

          {/* Right graphics side */}
          <div className="rcss-cta__visual-side">
            <img src={officerImg} alt="Security Guard standing confident" className="rcss-cta__officer-img" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CallToAction;
