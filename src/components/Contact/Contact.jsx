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
          // title="Connect to our Commando's"
          // badgeText="Contact Center"
          title="Contact Center"
          subtitle="Discover tailored security support, risk assessments, and facilities staffing solutions designed to protect what matters most."
          align="center"
          className="rcss-contact-section-heading"
        />

        <div className="rcss-contact-hero">
          <div className="rcss-contact-hero__left">
            <ContactInfo />
          </div>

          <div className="rcss-contact-hero__right">
            <div className="rcss-contact-hero__form-card">
              <h3 className="rcss-contact-hero__form-title">Tell Us What You Need</h3>
              <p className="rcss-contact-hero__form-subtitle">
                Our team is ready to assist with every detail, big or small.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
