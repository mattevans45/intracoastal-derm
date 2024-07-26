import React from "react";

import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import SideNavbar from "./SideNavbar.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import AlertBar from "./components/Alertbar.jsx";

const ServicesLayout = ({children}) => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AlertBar />
      <div className="mx-auto grid min-h-screen grid-cols-1 md:grid-cols-4">
        <aside className="hidden bg-gray-100 font-Playfair p-4 shadow-lg md:col-span-1 md:grid md:w-full">
          <SideNavbar />
        </aside>
        <main className="col-span-3 w-full bg-gray-50">
          {children}
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ServicesLayout;