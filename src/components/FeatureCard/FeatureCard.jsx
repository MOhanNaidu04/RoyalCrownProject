import React, { memo } from 'react';
import { Card, Icon } from '@/components';
import './FeatureCard.css';

/**
 * Reusable FeatureCard — memoized to prevent re-renders when parent scrolls
 * Only re-renders if title, description, or iconName props actually change
 */
export const FeatureCard = memo(function FeatureCard({
  title,
  description,
  iconName,
  className = '',
  ...props
}) {
  return (
    <Card hoverEffect="lift" className={`rcss-feature-card ${className}`} {...props}>
      <div className="rcss-feature-card__icon-wrapper">
        <Icon name={iconName} size={28} className="rcss-text-gold" />
      </div>
      <h3 className="rcss-feature-card__title">{title}</h3>
      <p className="rcss-feature-card__desc">{description}</p>
    </Card>
  );
});

export default FeatureCard;
