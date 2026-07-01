import React from 'react';
import './Card.css';

/**
 * Reusable Card component supporting hover effects, layouts, and header images
 */
export function Card({
  title,
  subtitle,
  image = null,
  hoverEffect = 'lift',
  children,
  className = '',
  ...props
}) {
  const classes = [
    'rcss-card',
    hoverEffect !== 'none' ? `rcss-card--hover-${hoverEffect}` : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {image && (
        <div className="rcss-card__image-wrapper">
          <img src={image} alt={title || 'Card Media'} className="rcss-card__image" />
        </div>
      )}
      {(title || subtitle) && (
        <div className="rcss-card__header">
          {title && <h3 className="rcss-card__title">{title}</h3>}
          {subtitle && <span className="rcss-card__subtitle">{subtitle}</span>}
        </div>
      )}
      {children && <div className="rcss-card__body">{children}</div>}
    </div>
  );
}

export default Card;
