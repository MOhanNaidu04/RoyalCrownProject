import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import { Card, Icon } from '@/components';
import './StatisticCard.css';

/**
 * StatisticCard — memoized + useMemo for easing calculation
 * Counts up from 0 to target using requestAnimationFrame when scrolled into view
 */
export const StatisticCard = memo(function StatisticCard({
  value,
  label,
  suffix = '',
  decimals = 0,
  iconName,
  className = '',
  ...props
}) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef(null);

  // useMemo: duration is stable and derived from value magnitude, no need to recalculate
  const duration = useMemo(() => (value > 500 ? 2200 : 1800), [value]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.15 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let rafId;
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(progress * value);
      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      } else {
        setCount(value);
      }
    };

    rafId = window.requestAnimationFrame(step);
    // Cleanup: cancel any in-flight animation frame on unmount
    return () => window.cancelAnimationFrame(rafId);
  }, [isInView, value, duration]);

  return (
    <Card hoverEffect="lift" className={`rcss-stat-card ${className}`} {...props}>
      <div ref={elementRef} className="rcss-stat-card__content">
        {iconName && (
          <div className="rcss-stat-card__icon-wrapper">
            <Icon name={iconName} size={28} className="rcss-text-gold" aria-hidden="true" />
          </div>
        )}
        <h3 className="rcss-stat-card__metric" aria-label={`${value}${suffix} ${label}`}>
          {count.toFixed(decimals)}{suffix}
        </h3>
        <span className="rcss-stat-card__label">{label}</span>
      </div>
    </Card>
  );
});

export default StatisticCard;
