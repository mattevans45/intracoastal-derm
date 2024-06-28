import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import ScrollToTop from './ScrollToTop.jsx';

const MainLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
        <div className="font-display font-400 my-auto min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
