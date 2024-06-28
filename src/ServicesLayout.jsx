import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Sidebar from "./SideNavbar.jsx";
import ScrollToTop from './ScrollToTop.jsx';

const ServicesLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="container mx-auto min-h-screen grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="hidden sm:grid col-span-1 bg-gray-100 shadow-lg p-4">
          <Sidebar />
        </aside>
        <main className="col-span-3 grid-cols-1 justify-between items-center bg-gray-50 w-full">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ServicesLayout;
