import React, { Children } from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Sidebar from "./SideNavbar.jsx";
import ScrollToTop from './ScrollToTop.jsx';
import { Outlet } from 'react-router-dom';

const ServicesLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="mx-auto min-h-screen grid grid-cols-1 md:grid-cols-4">
        <aside className="hidden sm:grid md:col-span-1 md:w-full bg-gray-100 shadow-lg p-4">
          <Sidebar />
        </aside>
        <main className="col-span-3 justify-between items-center bg-gray-50 w-full">
         
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ServicesLayout;
