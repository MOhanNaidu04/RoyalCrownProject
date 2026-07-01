import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { Container, SectionHeading, ServiceCard } from '@/components';
import { SERVICES_DETAIL } from '@/pages/Services/serviceData';
import './ServicesSection.css';

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  { key: 'all',        label: 'All Services'      },
  { key: 'guarding',   label: 'Guard & Patrol'    },
  { key: 'facilities', label: 'Facility Services' },
  { key: 'technology', label: 'Surveillance'      }
];

/**
 * ServicesSection — useCallback stabilises event handler, useMemo filters array
 * without recalculating on every re-render
 */
export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const headerRef = useRef(null);

  // useMemo: only re-filters when activeCategory changes, not on every render
  const filteredServices = useMemo(
    () =>
        activeCategory === 'all'
        ? SERVICES_DETAIL
        : SERVICES_DETAIL.filter((s) => {
            if (activeCategory === 'guarding') return ['guard-services', 'bouncer-security', 'event-security-services', 'mobile-patrols', 'executive-escort'].includes(s.slug);
            if (activeCategory === 'facilities') return ['house-keeping-services'].includes(s.slug);
            if (activeCategory === 'technology') return ['surveillance-systems', 'alarm-response'].includes(s.slug);
            return true;
          }),
    [activeCategory]
  );

  const navigate = useNavigate();

  // useCallback: stable reference, prevents ServiceCard children re-rendering
  // from a new function reference on every parent render
  const handleReadMore = useCallback((serviceSlug) => {
    navigate(`/services/${serviceSlug}`);
  }, [navigate]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    gsap.set(el, { opacity: 0, y: 20 });
    const anim = gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom-=80px',
        toggleActions: 'play none none none'
      }
    });
    return () => { anim.scrollTrigger?.kill(); anim.kill(); };
  }, []);

  return (
    <section className="rcss-services-showcase">
      <Container>
        <SectionHeading
          title="Integrated Facility & Protection Solutions"
          subtitle="Explore our comprehensive services catalog spanning armed security, facilities management, and digital monitoring systems."
          badgeText="Our Portfolio"
          align="center"
        />

        <div
          ref={headerRef}
          className="rcss-services__filters"
          role="tablist"
          aria-label="Filter services by category"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              type="button"
              role="tab"
              aria-pressed={activeCategory === cat.key}
              aria-selected={activeCategory === cat.key}
              className={`rcss-services__filter-btn ${activeCategory === cat.key ? 'rcss-services__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <motion.div layout className="rcss-grid rcss-grid--cols-3 rcss-services__grid">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.25 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  ctaText="Read more"
                  onCtaClick={() => handleReadMore(service.slug)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

export default ServicesSection;
