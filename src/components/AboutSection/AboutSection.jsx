import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, SectionHeading, Icon } from '@/components';
import operationsImg from '@/assets/images/operations_center.png';
import './AboutSection.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Premium About Section component featuring GSAP ScrollTrigger image reveals
 */
export const AboutSection = memo(function AboutSection() {
  const [activeTab, setActiveTab] = useState('mission');
  const [badgeVisible, setBadgeVisible] = useState(false);
  const imageRef = useRef(null);
  const sectionRef = useRef(null);

  // useCallback: stable handler prevents unnecessary re-renders of tab buttons
  const handleTabClick = useCallback((tabKey) => setActiveTab(tabKey), []);

  useEffect(() => {
    const img = imageRef.current;
    if (!img) return;

    // Smooth entry clip and scale zoom
    const anim = gsap.fromTo(img,
      { scale: 1.15, clipPath: 'inset(10% 10% 10% 10% round 12px)' },
      {
        scale: 1,
        clipPath: 'inset(0% 0% 0% 0% round 12px)',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: img,
          start: 'top bottom-=100px',
          toggleActions: 'play none none none'
        }
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === 'undefined') return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBadgeVisible(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const tabContents = {
    mission: {
      title: 'Our Vision',
      text: "In today's rapidly changing world security plays an important role to meet basic needs of security in multi-dimensional growth. The development around us increases the need for safety in an unbelievable fastness. The aim of protecting my country since the beginning of my life is what led me to ARMY and from there to this security industry where I strive to give my best at every point in time.",
      icon: 'shield'
    },
    vision: {
      title: 'Value Additions',
      text: 'Quick Response Team (QRT) in case of emergency. Key Account Manager provided as a single point of contact (SPOC) for all locations. 24/7 command center. Liaising with all local authorities.',
      icon: 'crown'
    },
    values: {
      title: 'Quality Assurance',
      text: 'Quality checks and audits will be carried out for fire and safety on a quarterly basis. Monthly and quarterly management review meetings will be carried out. Licensed and insured security provider.',
      icon: 'guard'
    }
  };

  return (
    <section className="rcss-about-section" ref={sectionRef}>
      <Container>
        <div className="rcss-about-grid">
          {/* Left Visual Column */}
          <div className="rcss-about__visual-side">
            <div className="rcss-about__image-container" style={{ overflow: 'hidden', borderRadius: '12px' }}>
              <img 
                ref={imageRef} 
                src={operationsImg} 
                alt="Tactical Command Control Operations Room" 
                className="rcss-about__image" 
              />
              
              {/* Floating Experience Badge */}
              <div className={`rcss-about__experience-badge ${badgeVisible ? 'rcss-about__experience-badge--visible' : ''}`}>
                <span className="rcss-about__exp-number">15+</span>
                <span className="rcss-about__exp-label">Years of Elite Service</span>
              </div>
            </div>
          </div>

          {/* Right Narrative Column */}
          <div className="rcss-about__content-side">
            <SectionHeading
              className="rcss-about__section-heading--compact"
              title="Company Profile"
              subtitle="Royal Crown Security Services provides comprehensive security solutions including personal security, surveillance systems, and guard services."
              align="left"
            />

            {/* Interactive Tabs Menu */}
            <div className="rcss-about__tabs">
              {Object.keys(tabContents).map((tabKey) => (
                <button
                  key={tabKey}
                  type="button"
                  className={`rcss-about__tab-btn ${activeTab === tabKey ? 'rcss-about__tab-btn--active' : ''}`}
                  onClick={() => handleTabClick(tabKey)}
                >
                  {tabContents[tabKey].title}
                </button>
              ))}
            </div>

            {/* Tabs Content View */}
            <div className="rcss-about__tabs-body">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="rcss-about__tab-content"
                >
                  <p className="rcss-about__tab-text">
                    {tabContents[activeTab].text}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* CEO blockquote message */}
            <blockquote className="rcss-about__ceo-quote">
              <p className="rcss-about__quote-text">
                "Providing professional security services and peace of mind since 2008."
              </p>
              <footer className="rcss-about__quote-footer">
                <Icon name="crown" size={16} className="rcss-text-gold" />
                <cite className="rcss-about__quote-author">Royal Crown Security Services — Licensed & Insured</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
});

export default AboutSection;
