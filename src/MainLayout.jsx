import React from 'react';
import { memo } from 'react';
import dynamic from 'next/dynamic';


const Navbar = dynamic(() => import('./Navbar'), { ssr: true });
const Footer = dynamic(() => import('./Footer'), { ssr: true });

const MainLayout = memo(({ children }) => {
  return (
    <>
      <Navbar />
      <main className="antialiased my-auto min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
});

export default MainLayout;
