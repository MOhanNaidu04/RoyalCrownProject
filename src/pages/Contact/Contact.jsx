import React from 'react';
import { Contact as ContactSection } from '@/components';
import './Contact.css';

/**
 * Contact page mounting the reusable Contact component
 */
export function Contact() {
  return (
    <div className="rcss-page rcss-contact-page">
      <ContactSection />
    </div>
  );
}

export default Contact;
