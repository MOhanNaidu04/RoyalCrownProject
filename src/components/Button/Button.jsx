import React from 'react';
import './Button.css';

/**
 * Reusable Button component for Royal Crown Security Services
 * Supports variants (primary, secondary, outline, danger) and sizes (sm, md, lg)
 */
export function Button({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon = null,
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  const classes = [
    'rcss-btn',
    `rcss-btn--${variant}`,
    `rcss-btn--${size}`,
    fullWidth ? 'rcss-btn--full-width' : '',
    icon ? 'rcss-btn--has-icon' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && <span className="rcss-btn__icon">{icon}</span>}
      <span className="rcss-btn__content">{children}</span>
    </button>
  );
}

export default Button;
