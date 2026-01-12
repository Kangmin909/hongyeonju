'use client';

import { Suspense } from 'react';
import { AppDataProvider } from '../context/AppDataContext';
import Menu from '../components/Menu';

export default function ClientLayout({ children }) {
  return (
    <AppDataProvider>
      <Suspense fallback={null}>
        <Menu />
      </Suspense>
      {/* #root replacement from index.css logic, applied here to wrap pages */}
      <div id="root">
        {children}
      </div>
    </AppDataProvider>
  );
}
