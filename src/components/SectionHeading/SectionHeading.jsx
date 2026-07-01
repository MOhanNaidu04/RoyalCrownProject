import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './SectionHeading.css';

gsap.registerPlugin(ScrollTrigger);

/**
 * Standard Section Heading with GSAP ScrollTrigger staggered text reveal
 */
export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  badgeText = null,
  className = '',
  ...props
}) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const targets = el.querySelectorAll(
      '.rcss-section-heading__badge, .rcss-section-heading__title, .rcss-section-heading__subtitle'
    );
    if (!targets.length) return;

    gsap.set(targets, { opacity: 0, y: 24 });

    const anim = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration: 0.65,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom-=60px',
        toggleActions: 'play none none none'
      }
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  const classes = [
    'rcss-section-heading',
    `rcss-section-heading--${align}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div ref={wrapperRef} className={classes} {...props}>
      {badgeText && <span className="rcss-section-heading__badge">{badgeText}</span>}
      <h2 className="rcss-section-heading__title">{title}</h2>
      {subtitle && <p className="rcss-section-heading__subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionHeading;
