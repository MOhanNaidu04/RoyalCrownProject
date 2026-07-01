import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar, Footer, ScrollProgress } from '@/components';
import './MainLayout.css';

/**
 * Main Layout wrapping header navbar, dynamic outlet contents, and global footer
 */
export function MainLayout() {
  return (
    <div className="rcss-main-layout">
      {/* Scroll progress bar indicator at top */}
      <ScrollProgress />

      {/* Header Sticky Navigation bar */}
      <Navbar />

      {/* Dynamic route contents */}
      <main className="rcss-main-content">
        <Outlet />
      </main>

      {/* Global footer section */}
      <Footer />

    </div>
  );
}

export default MainLayout;
