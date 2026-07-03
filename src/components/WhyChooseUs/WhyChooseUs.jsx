import React, { useEffect, useRef, memo } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, SectionHeading, FeatureCard } from '@/components';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

const FEATURES_DATA = [
  {
    title: 'Quick Response Team (QRT)',
    description: 'Rapid deployment QRT teams available in case of emergency, ensuring fast and effective incident response at any time.',
    iconName: 'guard'
  },
  {
    title: '24/7 Command Center',
    description: 'A round-the-clock command center constantly monitoring all locations and coordinating security operations without interruption.',
    iconName: 'phone'
  },
  {
    title: 'Single Point of Contact',
    description: 'Dedicated Key Account Manager provided as a single point of contact (SPOC) for seamless communication across all locations.',
    iconName: 'shield'
  },
  {
    title: 'Licensed & Insured',
    description: 'Full compliance with regulatory requirements. Licensed and insured security provider with liaison to all local authorities.',
    iconName: 'check'
  },
  {
    title: 'Fire & Safety Audits',
    description: 'Quality checks and audits carried out for fire and safety on a quarterly basis to ensure compliance and workplace safety.',
    iconName: 'crown'
  },
  {
    title: 'Management Reviews',
    description: 'Monthly and quarterly management review meetings to evaluate performance, address concerns, and continually improve service quality.',
    iconName: 'location'
  }
];

/**
 * Section presenting the six key values/features using GSAP ScrollTrigger stagger reveals.
 * memo: no props, no context — safe to skip re-renders entirely.
 */
export const WhyChooseUs = memo(function WhyChooseUs() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.rcss-why-card-wrapper');
    if (!cards?.length) return;

    // Set initial invisible state immediately to prevent FOUC
    gsap.set(cards, { opacity: 0, y: 50 });

    const anim = gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: gridRef.current,
        start: 'top bottom-=80px',
        toggleActions: 'play none none none'
      }
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <section className="rcss-why-section">
      <Container>
        <SectionHeading
          // title="Why Leading Brands Trust Royal Crown Security Services"
          subtitle="Deploying reliable guarding and strategic protection systems designed to mitigate risks and secure corporate properties."
          badgeText="Our Advantages"
          align="center"
        />

        <div
          ref={gridRef}
          className="rcss-grid rcss-grid--cols-3 rcss-why-section__grid"
        >
          {FEATURES_DATA.map((feature, idx) => (
            <div key={idx} className="rcss-why-card-wrapper">
              <FeatureCard
                title={feature.title}
                description={feature.description}
                iconName={feature.iconName}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
});

export default WhyChooseUs;
