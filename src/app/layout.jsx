import Head from 'next/head';
import MainLayout from '../MainLayout';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Intracoastal Dermatology and Skin Surgery",
  description: "Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology. New office opening in Leland, NC. Schedule your consultation today.",
  openGraph: {
    title: "Intracoastal Dermatology and Skin Surgery",
    description: "Intracoastal Dermatology offers expert care in general, cosmetic, and surgical dermatology. New office opening in Leland, NC. Schedule your consultation today.",
    image: "https://intracoastal-dermatology.com/IntracoastalDermatologyandSkinSurgeryLogo.png",
    url: "https://intracoastal-dermatology.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.children} >
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
