import React, { memo } from 'react';
import { Card, Button } from '@/components';
import './ServiceCard.css';

/**
 * Reusable ServiceCard — memoized since it renders 11 times in the services grid.
 * Re-renders only when title, description, image, or ctaText props change.
 */
export const ServiceCard = memo(function ServiceCard({
  title,
  description,
  image,
  ctaText = 'Request Details',
  onCtaClick,
  className = '',
  ...props
}) {
  return (
    <Card
      hoverEffect="scale"
      className={`rcss-service-card ${className}`}
      image={image}
      imageAlt={`${title} — Royal Crown Security Services`}
      {...props}
    >
      <div className="rcss-service-card__content">
        <h3 className="rcss-service-card__title">{title}</h3>
        {/* Description removed for portfolio view, shown on separate page */}
        <div className="rcss-service-card__action">
          {onCtaClick ? (
            <Button
              variant="secondary"
              size="sm"
              onClick={onCtaClick}
              aria-label={`Read more about ${title}`}
              style={{ width: '100%', marginTop: '1rem' }}
            >
              {ctaText}
            </Button>
          ) : null}
        </div>
      </div>
    </Card>
  );
});

export default ServiceCard;
