import { Footer, Navbar } from './'
import { Outlet } from 'react-router-dom';

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-1 pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}