import React from 'react';
import { Icon } from '@/components';

/**
 * Compact contact/profile column with a reduced map footprint.
 */
export function ContactInfo() {
  return (
    <div className="rcss-contact-info">
      <div className="rcss-contact-info__details">
        <div className="rcss-contact-info__detail-card">
          <div className="rcss-contact-info__icon-circle" aria-hidden="true">
            <Icon name="location" size={22} className="rcss-contact-info__icon" />
          </div>
          <div>
            <h4 className="rcss-contact-info__detail-title">Address</h4>
            <address className="rcss-contact-info__detail-text" style={{fontStyle: 'normal'}}>
              Flat No. 304, M.S Estates Building,
              <br />Balaji Nagar, Nizampet,
              <br />Bachupally, Hyderabad- 500090
            </address>
          </div>
        </div>

        <div className="rcss-contact-info__detail-card">
          <div className="rcss-contact-info__icon-circle" aria-hidden="true">
            <Icon name="phone" size={22} className="rcss-contact-info__icon" />
          </div>
          <div>
            <h4 className="rcss-contact-info__detail-title">Phone</h4>
            <p className="rcss-contact-info__detail-text">+91 9573902632</p>
          </div>
        </div>

        <div className="rcss-contact-info__detail-card">
          <div className="rcss-contact-info__icon-circle" aria-hidden="true">
            <Icon name="envelope" size={22} className="rcss-contact-info__icon" />
          </div>
          <div>
            <h4 className="rcss-contact-info__detail-title">Email</h4>
            <p className="rcss-contact-info__detail-text">royalcrownsecser@gmail.com</p>
          </div>
        </div>
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
