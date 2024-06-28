import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import Sidebar from "./SideNavbar.jsx";
import { Content } from './Content.jsx';
import AlertBar from './components/Alertbar.jsx';
import ContactBar from './components/ContactBar.jsx';
import { useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop.jsx';
import AboutUs from './components/AboutUs.jsx';

const Layout = ({ children }) => {
  const location = useLocation();
  const isServicesPage = location.pathname.startsWith('/services');

  return (
    <>
      <ScrollToTop />
      <Navbar />
      {isServicesPage ? (
        <div className="container mx-auto min-h-screen grid grid-cols-1 md:grid-cols-4 gap-4">
          <aside className="hidden sm:grid col-span-1 bg-gray-100 shadow-lg p-4">
            <Sidebar />
          </aside>
          <main className="col-span-3 grid-cols-1 justify-between items-center bg-gray-50 w-full">
            {children}
          </main>
        </div>
      ) : (
        <div className="max-w-screen-2xl mx-auto my-auto min-h-screen">
          {children}
        </div>
      )}

      <Footer />
    </>
  );
};

export default Layout;
