import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

import ScrollToTop from './ScrollToTop.js';


const Layout = ({ children }) => {
  return (
<>
    <ScrollToTop />
      <Navbar />
      {/* <Sidebar /> */}
      {/* <SidebarMenu /> */}
      <main>{children}</main>
      

      <Footer />
</>
 
  );
};

export default Layout;