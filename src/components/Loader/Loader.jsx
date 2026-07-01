import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import logoImg from '@/assets/logos/ChatGPT Image Jul 1, 2026, 02_10_50 PM.png';
import armyBg from '@/assets/images/image.png';
import './Loader.css';

/* ── Small utility: floating particle ── */
const Particle = ({ style }) => (
  <span className="rcss-loader-particle" style={style} aria-hidden="true" />
);

export function Spinner({
  size = 'md',
  color = 'gold',
  className = '',
  ...props
}) {
  const classes = [
    'rcss-spinner',
    `rcss-spinner--${size}`,
    `rcss-spinner--${color}`,
    className
  ].filter(Boolean).join(' ');

  return <div className={classes} {...props} />;
}

/**
 * Premium full-screen Loader with:
 * – Indian Army photo background
 * – Real RCSS logo (no shield SVG)
 * – GSAP timeline: logo pulse → ring spin → progress → curtain exit
 */
export function Loader({ onLoadingComplete, className = '', ...props }) {
  const [progress, setProgress] = useState(0);
  const screenRef   = useRef(null);
  const contentRef  = useRef(null);
  const logoRef     = useRef(null);
  const ring1Ref    = useRef(null);
  const ring2Ref    = useRef(null);
  const taglineRef  = useRef(null);
  const barRef      = useRef(null);

  /* Generate particle positions once */
  const particles = useRef(
    Array.from({ length: 18 }, (_, i) => ({
      left:     `${Math.random() * 100}%`,
      top:      `${Math.random() * 100}%`,
      delay:    `${(Math.random() * 3).toFixed(2)}s`,
      duration: `${(2 + Math.random() * 3).toFixed(2)}s`,
      size:     `${Math.floor(3 + Math.random() * 6)}px`,
      opacity:  (0.2 + Math.random() * 0.5).toFixed(2),
    }))
  ).current;

  /* ── Entrance animation ── */
  useEffect(() => {
    const tl = gsap.timeline();

    // Logo pop-in
    gsap.set(logoRef.current, { scale: 0, opacity: 0, rotation: -15 });
    tl.to(logoRef.current, {
      scale: 1, opacity: 1, rotation: 0,
      duration: 0.9, ease: 'back.out(1.8)'
    });

    // Rings spin into place
    gsap.set([ring1Ref.current, ring2Ref.current], { scale: 0, opacity: 0 });
    tl.to(ring1Ref.current, { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.3');
    tl.to(ring2Ref.current, { scale: 1, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.35');

    // Tagline slide up
    gsap.set(taglineRef.current, { opacity: 0, y: 20 });
    tl.to(taglineRef.current, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2');

    // Continuous gold pulse on logo
    gsap.fromTo(logoRef.current,
      { filter: 'drop-shadow(0 0 8px rgba(197,168,90,0.4))' },
      { filter: 'drop-shadow(0 0 24px rgba(197,168,90,0.85))',
        duration: 1.2, ease: 'sine.inOut', repeat: -1, yoyo: true }
    );

    // Ring 2 counter-rotation
    gsap.to(ring2Ref.current, {
      rotation: -360, duration: 4, ease: 'none', repeat: -1
    });

  }, []);

  /* ── Progress counter ── */
  useEffect(() => {
    let current = 0;
    const totalDuration = 2200; // ms
    const steps = 100;
    const stepMs = totalDuration / steps;

    // Non-linear easing: fast start, slow end (feels authentic)
    const timer = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= 100) clearInterval(timer);
    }, stepMs);

    return () => clearInterval(timer);
  }, []);

  /* ── Exit animation when 100% ── */
  useEffect(() => {
    if (progress !== 100) return;

    const exitTl = gsap.timeline({
      onComplete: () => onLoadingComplete?.()
    });

    exitTl
      .to(contentRef.current, {
        opacity: 0, scale: 0.92, y: -20,
        duration: 0.45, ease: 'power2.in'
      })
      .to(screenRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: 'power3.inOut'
      });

  }, [progress, onLoadingComplete]);

  const statusText =
    progress < 30  ? 'INITIALISING SECURITY PROTOCOLS...' :
    progress < 60  ? 'VERIFYING CREDENTIALS...' :
    progress < 90  ? 'LOADING COMMAND CENTER...' :
                     'ENTRY AUTHORISED ✓';

  return (
    <div
      ref={screenRef}
      className={`rcss-loader-screen ${className}`}
      role="status"
      aria-label="Loading Royal Crown Security Services"
      {...props}
    >
      {/* ── Army background photo ── */}
      <img
        src={armyBg}
        alt=""
        aria-hidden="true"
        className="rcss-loader-bg-photo"
        loading="eager"
        decoding="sync"
      />

      {/* ── Dark cinematic overlay ── */}
      <div className="rcss-loader-overlay" aria-hidden="true" />

      {/* ── Floating gold particles ── */}
      <div className="rcss-loader-particles" aria-hidden="true">
        {particles.map((p, i) => (
          <Particle
            key={i}
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              animationDelay: p.delay,
              animationDuration: p.duration
            }}
          />
        ))}
      </div>

      {/* ── Main content ── */}
      <div ref={contentRef} className="rcss-loader-screen__content">

        {/* Spinning rings */}
        <div className="rcss-loader-rings">
          <div ref={ring1Ref} className="rcss-loader-ring rcss-loader-ring--outer" aria-hidden="true" />
          <div ref={ring2Ref} className="rcss-loader-ring rcss-loader-ring--inner" aria-hidden="true" />

          {/* RCSS Logo — centered inside rings */}
          <div className="rcss-loader-logo-wrap">
            <img
              ref={logoRef}
              src={logoImg}
              alt="Royal Crown Security Services"
              className="rcss-loader-logo-img"
              draggable="false"
            />
          </div>
        </div>

        {/* Brand title */}
        <h1 className="rcss-loader-screen__brand" ref={taglineRef}>
          ROYAL <span className="rcss-text-gold">CROWN</span>
          <br />
          <span className="rcss-loader-screen__brand-sub">SECURITY SERVICES</span>
        </h1>

        {/* Progress bar */}
        <div className="rcss-loader-progress-container" aria-hidden="true">
          <div
            ref={barRef}
            className="rcss-loader-progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Dynamic status + percentage */}
        <div className="rcss-loader-status-row">
          <span className="rcss-loader-status-text">{statusText}</span>
          <span className="rcss-loader-progress-percent">{progress}%</span>
        </div>
      </div>
    </div>
  );
}

export default Loader;
