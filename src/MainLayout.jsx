import React from 'react';
import { useEffect } from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <Navbar />
      <main className="antialiased my-auto min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
