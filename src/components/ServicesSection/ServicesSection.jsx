import React, { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, SectionHeading, ServiceCard } from '@/components';
import { SERVICES_DETAIL } from '@/pages/Services/serviceData';
import './ServicesSection.css';

const ROLLING_SERVICES = [...SERVICES_DETAIL, ...SERVICES_DETAIL];

gsap.registerPlugin(ScrollTrigger);

/**
 * ServicesSection showcases the full service lineup as a seamless horizontal marquee.
 * The duplicated list keeps the motion loop continuous while the visible cards remain interactive.
 */
export function ServicesSection() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);
  const trackRef = useRef(null);

  const handleReadMore = useCallback((serviceSlug) => {
    navigate(`/services/${serviceSlug}`);
  }, [navigate]);

  useEffect(() => {
    const section = sectionRef.current;
    const marquee = marqueeRef.current;
    const track = trackRef.current;

    if (!section || !marquee || !track) return undefined;

    const ctx = gsap.context(() => {
      const getTravel = () => Math.max(0, track.scrollWidth - marquee.clientWidth);

      const tween = gsap.fromTo(
        track,
        { x: 0 },
        {
          x: () => -getTravel(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 88px',
            end: () => `+=${getTravel()}`,
            scrub: 0.85,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true
          }
        }
      );

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="rcss-services-showcase">
      <Container>
        <SectionHeading
          title="Integrated Facility & Protection Solutions"
          subtitle="Scroll to explore our complete range of security, patrol, and facility support services as they glide across the page."
          badgeText="Our Services"
          align="center"
        />

        <div ref={marqueeRef} className="rcss-services-marquee" aria-label="Services rolling showcase">
          <div ref={trackRef} className="rcss-services-marquee__track">
            {ROLLING_SERVICES.map((service, index) => {
              const isDuplicate = index >= SERVICES_DETAIL.length;

              return (
                <div
                  key={`${service.id}-${index}`}
                  className="rcss-services-marquee__item"
                  aria-hidden={isDuplicate ? 'true' : undefined}
                >
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    image={service.image}
                    ctaText="Read more"
                    onCtaClick={() => handleReadMore(service.slug)}
                    hoverEffect="scale"
                    className="rcss-service-card--marquee"
                    ctaButtonProps={isDuplicate ? { tabIndex: -1 } : undefined}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ServicesSection;
