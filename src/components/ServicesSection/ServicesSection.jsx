import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, SectionHeading, ServiceCard } from '@/components';
import { SERVICES_DETAIL } from '@/pages/Services/serviceData';
import './ServicesSection.css';

const ROLLING_SERVICES = [...SERVICES_DETAIL, ...SERVICES_DETAIL];

/**
 * ServicesSection showcases the full service lineup as a seamless horizontal marquee.
 * The duplicated list keeps the motion loop continuous while the visible cards remain interactive.
 */
export function ServicesSection() {
  const navigate = useNavigate();

  const handleReadMore = useCallback((serviceSlug) => {
    navigate(`/services/${serviceSlug}`);
  }, [navigate]);

  return (
    <section className="rcss-services-showcase">
      <Container>
        <SectionHeading
          title="Integrated Facility & Protection Solutions"
          subtitle="Explore our complete portfolio of security, patrol, and facility support services as they glide across the page."
          badgeText="Our Portfolio"
          align="center"
        />

        <div className="rcss-services-marquee" aria-label="Services portfolio marquee">
          <div className="rcss-services-marquee__track">
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
