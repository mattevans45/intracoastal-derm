import React from 'react';
import { memo } from 'react';
import dynamic from 'next/dynamic';

import OpenModal from './components/OpenModal'


const Navbar = dynamic(() => import('./NavBarServer'), { ssr: true });
const Footer = dynamic(() => import('./Footer'), { ssr: true });


const MainLayout = memo(({ children }) => {
  return (
    <>
    <OpenModal />
      <Navbar />
      <main className="antialiased my-auto min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
});

export default MainLayout;
