import React from 'react';
import { AboutSection } from '@/components';
import './About.css';

/**
 * About page mounting the reusable AboutSection component
 */
export function About() {
  return (
    <div className="rcss-page rcss-about-page">
      <AboutSection />
    </div>
  );
}

export default About;
