import React from 'react';
import { Icon } from '@/components';

/**
 * Renders structured contact details and mock map interfaces
 */
export function ContactInfo() {
  const infoItems = [
    {
      icon: 'location',
      title: 'Our Address',
      content: 'Flat No. 304, M.S Estates Building, Balaji Nagar, Nizampet, Bachupally, Hyderabad – 500090'
    },
    {
      icon: 'phone',
      title: 'Phone',
      content: '+91 9573902632'
    },
    {
      icon: 'check',
      title: 'Email',
      content: 'royalcrownsecser@gmail.com'
    },
    {
      icon: 'crown',
      title: 'Operational Hours',
      content: 'Administrative Desk: Mon – Sat (9:00 AM – 6:00 PM) | Security Teams: 24/7 Active'
    }
  ];

  return (
    <div className="rcss-contact-info">
      {/* Information Cards List */}
      <div className="rcss-contact-info__list">
        {infoItems.map((item, idx) => (
          <div key={idx} className="rcss-contact-info__card">
            <div className="rcss-contact-info__icon-wrapper">
              <Icon name={item.icon} size={20} className="rcss-text-gold" />
            </div>
            <div className="rcss-contact-info__text">
              <h4 className="rcss-contact-info__title">{item.title}</h4>
              <p className="rcss-contact-info__content">{item.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Styled Google Map Placeholder */}
      <div className="rcss-contact-map-placeholder">
        <div className="rcss-contact-map-placeholder__overlay">
          <Icon name="location" size={32} className="rcss-text-gold rcss-map-pin" />
          <h4 className="rcss-contact-map-placeholder__title">Balaji Nagar, Nizampet</h4>
          <span className="rcss-contact-map-placeholder__subtitle">Bachupally, Hyderabad – 500090</span>
          <button
            type="button"
            className="rcss-contact-map-placeholder__btn"
            onClick={() => window.open('https://maps.google.com/?q=Balaji+Nagar+Nizampet+Bachupally+Hyderabad', '_blank')}
          >
            Open in Google Maps
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
