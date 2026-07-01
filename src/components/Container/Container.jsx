import React from 'react';
import './Container.css';

/**
 * Common layout Container wrapper supporting varied widths (sm, md, lg, xl)
 */
export function Container({
  children,
  size = 'xl',
  className = '',
  ...props
}) {
  const classes = [
    'rcss-container',
    `rcss-container--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}

export default Container;
