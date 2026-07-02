import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar, Footer, ScrollProgress } from '@/components';
import './MainLayout.css';

/**
 * Main Layout wrapping header navbar, dynamic outlet contents, and global footer
 */
export function MainLayout() {
  const location = useLocation();
  const mainRef = useRef(null);

  useEffect(() => {
    const scrollRoot = mainRef.current;

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    if (scrollRoot) {
      scrollRoot.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
  }, [location.pathname]);

  return (
    <div className="rcss-main-layout">
      {/* Scroll progress bar indicator at top */}
      <ScrollProgress />

      {/* Header Sticky Navigation bar */}
      <Navbar />

      {/* Dynamic route contents */}
      <main className="rcss-main-content" ref={mainRef}>
        <Outlet />
      </main>

      {/* Global footer section */}
      <Footer />

    </div>
  );
}

export default MainLayout;
