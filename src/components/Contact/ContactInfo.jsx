import React from 'react';
import { Icon } from '@/components';

/**
 * Compact contact/profile column with a reduced map footprint.
 */
export function ContactInfo() {
  return (
    <div className="rcss-contact-info">
      <div className="rcss-contact-info__summary">
        <h3 className="rcss-contact-info__summary-title">Company Profile</h3>
        <p className="rcss-contact-info__summary-text">
          Royal Crown Security Services provides comprehensive security solutions including personal security,
          surveillance systems, and guard services.
        </p>
      </div>

      <div className="rcss-contact-map">
        <iframe
          title="Royal Crown Security Services location map"
          className="rcss-contact-map__iframe"
          src="https://www.google.com/maps?q=Balaji%20Nagar%2C%20Nizampet%2C%20Bachupally%2C%20Hyderabad%20500090&z=14&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="rcss-contact-map__badge">
          <Icon name="location" size={16} className="rcss-text-gold" />
          <span>Balaji Nagar, Nizampet</span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
