import { Container } from '@mui/system';
import { AppHeader } from 'components/AppBar/AppBar';
import { Footer } from 'components/Footer/Footer';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';

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
