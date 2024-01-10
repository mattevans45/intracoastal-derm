import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import SidebarMenu from './SideBarMenu.jsx';
import ScrollToTop from './ScrollToTop.js';
import Sidebar from './SideBar.jsx';

const Layout = ({ children }) => {
  return (
    <div>
    <ScrollToTop />
      <Navbar />
      {/* <Sidebar /> */}
      <SidebarMenu />
      <main>{children}</main>
      

      <Footer />
    </div>
  );
};

export default Layout;