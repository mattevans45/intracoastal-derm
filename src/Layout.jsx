import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Sidebar from "./SideNavbar.jsx"
import { Content } from './Content.jsx';

import AlertBar from './components/Alertbar.jsx';
import ContactBar from './components/ContactBar.jsx';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.js';
import AboutUs from './components/AboutUs.jsx';

const Layout = ({ children }) => {

  const location = useLocation();
  const isServicesPage = location.pathname.startsWith('/services');

  return (
<>
    <ScrollToTop />

      <Navbar />
  
      {isServicesPage && (
         <div className="flex min-h-screen">
        <aside className="hidden md:flex md:justify-center md:items-start md:w-1/3 p-6 bg-gray-100 shadow-lg">
          <Sidebar />
        </aside>
        <main className="flex-grow p-6 bg-gray-50">{children}</main>
    </div>
      )}
     {!isServicesPage && children}
     <Content />
    
      

      <Footer />
</>
 
  );
};

export default Layout;