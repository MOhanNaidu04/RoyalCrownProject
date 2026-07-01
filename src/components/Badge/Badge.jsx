import React from 'react';
import './Badge.css';

/**
 * Reusable Badge component for displaying tags, statuses, or pricing tiers
 */
export function Badge({
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = [
    'rcss-badge',
    `rcss-badge--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}

export default Badge;
