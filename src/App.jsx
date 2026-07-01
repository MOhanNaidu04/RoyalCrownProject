import React, { useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { Loader } from '@/components';
import router from './router';
import './styles/main.css';

/**
 * Main Application root managing the initial full-screen entry Loader
 */
export function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Loader onLoadingComplete={() => setIsLoading(false)} />;
  }

  return <RouterProvider router={router} />;
}

export default App;
