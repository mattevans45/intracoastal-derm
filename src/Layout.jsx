import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Sidebar from "./SideNavbar.jsx"

import { useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js';


const Layout = ({ children }) => {

  const location = useLocation();
  const isServicesPage = location.pathname.startsWith('/services');

  return (
<>
    <ScrollToTop />
      <Navbar />
      <div className="flex min-h-screen">
      {isServicesPage && (
        <aside className="hidden md:flex md:flex-none md:w-72 p-6 bg-gray-100 shadow-lg">
          <Sidebar />
        </aside>
      )}
      <main className="flex-grow  bg-gray-50">{children}</main>
    </div>
    
      

      <Footer />
</>
 
  );
};

export default Layout;