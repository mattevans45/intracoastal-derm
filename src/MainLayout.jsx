import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import ScrollToTop from './ScrollToTop.jsx';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
        <div className="font-display font-400 my-auto min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
