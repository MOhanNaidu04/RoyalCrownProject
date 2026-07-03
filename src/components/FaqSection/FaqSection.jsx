import React from 'react';
import { Container, Accordion, SectionHeading } from '@/components';
import './FaqSection.css';

const FAQ_ITEMS = [
  {
    id: 'faq1',
    title: 'How quickly can guards be deployed?',
    content: 'Emergency guard deployment can be executed within 2 to 4 hours depending on the location. Standard contract deployment typically takes 3 to 5 business days for full risk profiling and site instruction mapping.'
  },
  {
    id: 'faq2',
    title: 'Do you provide armed guards?',
    content: 'Yes. We provide highly trained, licensed armed protection officers for high-risk assets, cash-in-transit logistics, and executive escorts. All armed officers undergo rigorous tactical training.'
  },
  {
    id: 'faq3',
    title: 'Are all guards police verified?',
    content: 'Absolutely. Every security officer undergoes mandatory police background verification, triple-reference checks, and regular drug screening before being deployed on-site.'
  },
  {
    id: 'faq4',
    title: 'Do you install CCTV?',
    content: 'Yes, our electronic security division designs and installs integrated CCTV networks, remote access controls, and fire alarm systems linked directly to our central SOC.'
  },
  {
    id: 'faq5',
    title: 'Can I hire temporary security?',
    content: 'Yes. We offer flexible contracts ranging from single-day event security and short-term construction site guarding to multi-year corporate agreements.'
  },
  {
    id: 'faq6',
    title: 'How can I request a quotation?',
    content: 'You can click "Request Risk Assessment" or visit our Contact page. Our security consultants will conduct a threat sweep and provide a custom, obligation-free quote.'
  }
];

/**
 * FAQ Section component organizing general questions into an Accordion
 */
export function FaqSection() {
  return (
    <section className="rcss-faq-section">
      <Container>
        <SectionHeading
          badgeText="FAQ"
          // title="Frequently Asked Questions"
          subtitle={
            <strong>Find answers to common inquiries regarding guard deployment times, safety compliance, and technological setups.</strong>
          }
          align="center"
        />

        <div className="rcss-faq__accordion-container">
          <Accordion items={FAQ_ITEMS} allowMultiple={false} />
        </div>
      </Container>
    </section>
  );
}

export default FaqSection;
