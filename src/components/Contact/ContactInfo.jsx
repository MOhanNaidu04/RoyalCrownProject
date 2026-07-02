import React from 'react';
import { Icon } from '@/components';

/**
 * Contact information column with embedded map
 */
export function ContactInfo() {
  const infoItems = [
    {
      icon: 'location',
      title: 'Our Address',
      content: 'Flat No. 304, M.S Estates Building, Balaji Nagar, Nizampet, Bachupally, Hyderabad - 500090'
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
      content: 'Administrative Desk: Mon - Sat (9:00 AM - 6:00 PM) | Security Teams: 24/7 Active'
    }
  ];

  return (
    <div className="rcss-contact-info">
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
