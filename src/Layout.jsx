import React from 'react';

import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import SidebarMenu from './SideBarMenu.jsx';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <SidebarMenu />
      <main>{children}</main>
      

      <Footer />
    </div>
  );
};

export default Layout;