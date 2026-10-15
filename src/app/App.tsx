import { RouterProvider } from 'react-router-dom';
import { Suspense } from 'react';
import { router } from './router';
import { Providers } from './providers';
import { ErrorBoundary } from '@components';

export default function App() {
  return (
    <ErrorBoundary>
      <Providers>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen bg-[var(--color-primary)]">
            <div className="text-[var(--color-text)]">Cargando...</div>
          </div>
        }>
          <RouterProvider router={router} />
        </Suspense>
      </Providers>
    </ErrorBoundary>
  );
}
