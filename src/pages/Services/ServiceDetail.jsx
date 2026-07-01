import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, SectionHeading, Button } from '@/components';
import { getServiceBySlug, SERVICES_DETAIL } from './serviceData';
import './Services.css';

export function ServiceDetail() {
  const { serviceSlug } = useParams();
  const service = getServiceBySlug(serviceSlug);
  const relatedServices = SERVICES_DETAIL.filter((item) => item.slug !== serviceSlug).slice(0, 3);

  if (!service) {
    return (
      <div className="rcss-page rcss-services-page">
        <Container>
          <SectionHeading
            title="Service Not Found"
            subtitle="The service you requested could not be located."
            badgeText="404"
            align="center"
          />
          <div style={{ textAlign: 'center' }}>
            <Link to="/services">
              <Button variant="secondary">Back to Services</Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="rcss-page rcss-services-page">
      <Container>
        <SectionHeading
          title={service.title}
          subtitle={service.summary}
          badgeText="Service Details"
          align="center"
        />

        <article className="rcss-service-detail rcss-service-detail--single rcss-service-detail--featured">
          <div className="rcss-service-detail__image-wrapper">
            <img
              src={service.image}
              alt={`${service.title} - Royal Crown Security Services`}
              className="rcss-service-detail__image"
            />
            <div className="rcss-service-detail__image-badge">Tailored Coverage</div>
          </div>

          <div className="rcss-service-detail__content">
            <p className="rcss-service-detail__desc">{service.description}</p>

            <div className="rcss-service-detail__facts">
              <div className="rcss-service-detail__fact">
                <span className="rcss-service-detail__fact-label">Best suited for</span>
                <span className="rcss-service-detail__fact-value">{service.idealFor}</span>
              </div>
              <div className="rcss-service-detail__fact">
                <span className="rcss-service-detail__fact-label">Delivery style</span>
                <span className="rcss-service-detail__fact-value">Strategic, visible, and command-led</span>
              </div>
            </div>

            <div className="rcss-service-detail__panel">
              <h3 className="rcss-service-detail__panel-title">What this service includes</h3>
              <ul className="rcss-service-detail__features">
                {service.features.map((feat) => (
                  <li key={feat} className="rcss-service-detail__feature-item">
                    <span className="rcss-service-detail__check">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rcss-service-detail__grid">
              <div className="rcss-service-detail__panel rcss-service-detail__panel--soft">
                <h3 className="rcss-service-detail__panel-title">Why it works</h3>
                <ul className="rcss-service-detail__list">
                  {service.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="rcss-service-detail__panel rcss-service-detail__panel--soft">
                <h3 className="rcss-service-detail__panel-title">Our process</h3>
                <ol className="rcss-service-detail__steps">
                  {service.workflow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
            </div>

            <div className="rcss-service-detail__actions">
              <Link to="/contact">
                <Button variant="secondary" size="sm">
                  Request Consultation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="sm">
                  Back to Services
                </Button>
              </Link>
            </div>
          </div>
        </article>

        <section className="rcss-service-detail__related">
          <h3 className="rcss-service-detail__related-title">Related services</h3>
          <div className="rcss-service-detail__related-grid">
            {relatedServices.map((related) => (
              <Link key={related.id} to={`/services/${related.slug}`} className="rcss-service-detail__related-card">
                <span className="rcss-service-detail__related-kicker">Explore next</span>
                <strong>{related.title}</strong>
                <span>{related.summary}</span>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}

export default ServiceDetail;
