import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

/**
 * ScrollToTop component that appears upon scrolling down, enabling smooth navigation to top
 */
export function ScrollToTop({ threshold = 300 }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > threshold) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      className={`rcss-scroll-to-top ${visible ? 'rcss-scroll-to-top--visible' : ''}`}
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
    >
      <span className="rcss-scroll-to-top__arrow">▲</span>
    </button>
  );
}

export default ScrollToTop;
