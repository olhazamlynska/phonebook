import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppHeader } from 'components/AppHeader/AppHeader';
import { Footer } from 'components/Footer/Footer';
import { Container } from '@mui/system';

export const Layout = () => {
  return (
    <div
      className="container"
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <AppHeader />

      <Suspense fallback={null}>
        <main>
          <Container
            style={{ maxWidth: 1240, margin: '0 auto', padding: '0 16px' }}
          >
            <Outlet />
          </Container>
        </main>
      </Suspense>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
