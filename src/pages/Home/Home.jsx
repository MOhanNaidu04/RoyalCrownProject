import React from 'react';
import { 
  Hero, 
  TrustedCompanies, 
  AboutSection, 
  WhyChooseUs, 
  ServicesSection, 
  CompanyStatistics, 
  Testimonials, 
  FaqSection,
  Contact
} from '@/components';
import './Home.css';

/**
 * Home landing page containing all sections in order
 */
export function Home() {
  return (
    <div className="rcss-home-page">
      <Hero />
      {/* <TrustedCompanies /> */}
      <AboutSection />
      <WhyChooseUs />
      <ServicesSection />
      <CompanyStatistics />
      <Testimonials />
      <FaqSection />
      <Contact />
    </div>
  );
}

export default Home;
