import React from 'react';
import { Link } from 'react-router-dom';
import { Container, SectionHeading, Button } from '@/components';
import { SERVICES_DETAIL } from './serviceData';
import './Services.css';

/**
 * Services page - displays full details and descriptions for each service.
 * Users can open each service-specific detail page from here or from the portfolio section.
 */
export function Services() {
  return (
    <div className="rcss-page rcss-services-page">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Detailed overview of every security and facility solution we offer. Royal Crown Security Services delivers excellence across every engagement."
          badgeText="What We Offer"
          align="center"
        />

        <div className="rcss-services-detail-list">
          {SERVICES_DETAIL.map((service, index) => (
            <article
              key={service.id}
              className={`rcss-service-detail ${index % 2 !== 0 ? 'rcss-service-detail--reversed' : ''}`}
            >
              <div className="rcss-service-detail__image-wrapper">
                <img
                  src={service.image}
                  alt={`${service.title} - Royal Crown Security Services`}
                  className="rcss-service-detail__image"
                />
              </div>
              <div className="rcss-service-detail__content">
                <h3 className="rcss-service-detail__title">{service.title}</h3>
                <p className="rcss-service-detail__desc">{service.description}</p>
                <ul className="rcss-service-detail__features">
                  {service.features.map((feat) => (
                    <li key={feat} className="rcss-service-detail__feature-item">
                      <span className="rcss-service-detail__check">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="rcss-service-detail__actions">
                  <Link to={`/services/${service.slug}`}>
                    <Button variant="secondary" size="sm">
                      Read full details
                    </Button>
                  </Link>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() =>
                      window.alert(
                        `Consultation requested for: "${service.title}". An advisor will contact you shortly.`
                      )
                    }
                  >
                    Book Consultation
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Services;
