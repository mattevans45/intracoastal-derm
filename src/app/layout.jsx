import MainLayout from '../MainLayout';
import './globals.css';

import { Playfair_Display, Playfair_Display_SC } from 'next/font/google'
 
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
  style: 'normal',
  variable: '--font-playfair',
})

const playfairSC = Playfair_Display_SC({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  style: 'normal',
  variable: '--font-playfairSC',
})

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
    <html lang="en" className={`${playfair.variable} ${playfairSC.variable}`}>
    <body className="font-playfair">
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
