import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Container, SectionHeading, StatisticCard } from '@/components';
import './CompanyStatistics.css';

gsap.registerPlugin(ScrollTrigger);

const STATS_DATA = [
  { value: 15,   suffix: '+',  label: 'Years Experience',    iconName: 'crown'    },
  { value: 500,  suffix: '+',  label: 'Security Personnel',  iconName: 'guard'    },
  { value: 120,  suffix: '+',  label: 'Corporate Clients',   iconName: 'shield'   },
  { value: 25,   suffix: '+',  label: 'Cities Served',       iconName: 'location' },
  { value: 1800, suffix: '+',  label: 'Projects Completed',  iconName: 'check'    },
  { value: 24,   suffix: '/7', label: 'Support Center',      iconName: 'phone'    }
];

/**
 * Section presenting operational stats via GSAP ScrollTrigger stagger + StatisticCard count-ups
 */
export function CompanyStatistics() {
  const gridRef = useRef(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.rcss-stats-card-wrapper');
    if (!cards?.length) return;

    gsap.set(cards, { opacity: 0, y: 40 });

    const anim = gsap.to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.65,
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
    <section className="rcss-stats-section">
      <Container>
        <SectionHeading
          // title="Our Strength in Numbers"
          subtitle="A track record of protective excellence, operational scale, and client commitment across the nation."
          // badgeText="Operational Metrics"
          title="Our Strength in Numbers"
          align="center"
        />

        <div
          ref={gridRef}
          className="rcss-grid rcss-grid--cols-3 rcss-stats-section__grid"
        >
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="rcss-stats-card-wrapper">
              <StatisticCard
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                iconName={stat.iconName}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default CompanyStatistics;
