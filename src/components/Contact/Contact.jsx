import React from 'react';
import { Container, SectionHeading } from '@/components';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import './Contact.css';

/**
 * Main Contact component coordinate layout grid
 */
export function Contact() {
  return (
    <section className="rcss-contact-section-wrapper">
      <Container>
        <SectionHeading
          title="Connect With Our Commanders"
          subtitle="Establish active shielding, request risk assessment audits, or inquire about facilities staffing protocols today."
          badgeText="Contact Center"
          align="center"
        />

        <div className="rcss-contact-layout">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export default Contact;
