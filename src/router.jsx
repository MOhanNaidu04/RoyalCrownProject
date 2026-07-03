import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '@/layouts';
import Contact from '@/pages/Contact/Contact';

// --- Page-level Lazy Imports for Code Splitting ---
// Each route chunk is only fetched when the user navigates to that page
const Home    = lazy(() => import('@/pages/Home/Home'));
const About   = lazy(() => import('@/pages/About/About'));
const Services = lazy(() => import('@/pages/Services/Services'));
const ServiceDetail = lazy(() => import('@/pages/Services/ServiceDetail'));
const Gallery = lazy(() => import('@/pages/Gallery/Gallery'));
const TestimonialsPage = lazy(() => import('@/pages/Testimonials/Testimonials'));

/**
 * Minimal route-level loading skeleton shown while page JS is fetching
 */
function PageSkeleton() {
  return (
    <div
      style={{
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--color-bg-light)'
      }}
      aria-live="polite"
      aria-label="Loading page content"
    >
      <div className="rcss-spinner rcss-spinner--lg rcss-spinner--gold" />
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <Home />
          </Suspense>
        )
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <About />
          </Suspense>
        )
      },
      {
        path: 'services',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <Services />
          </Suspense>
        )
      },
      {
        path: 'services/:serviceSlug',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <ServiceDetail />
          </Suspense>
        )
      },
      {
        path: 'gallery',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <Gallery />
          </Suspense>
        )
      },
      {
        path: 'testimonials',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <TestimonialsPage />
          </Suspense>
        )
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageSkeleton />}>
            <Contact />
          </Suspense>
        )
      }
    ]
  }
]);

export default router;
