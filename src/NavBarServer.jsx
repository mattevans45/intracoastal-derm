import Image from "next/image";
import Link from "next/link";
import Logo from "./assets/images/optimized/IntracoastalDermatologyandSkinSurgeryLogo.webp";
import ContactBar from "./components/ContactBar";
import NavbarClient from "./NavBarClient";

const NavbarServer = () => {
  return (
    <header className="sticky top-0 z-40 font-display backdrop-blur-[2.5px] antialiased">
      <ContactBar />
      <div className="navbar sticky z-40 w-full font-display bg-[hsla(210,100%,100%,.95)] shadow-md md:pr-3">
        <nav className="mx-auto ml-auto flex items-center font-display justify-between md:w-full lg:justify-around" aria-label="Global">
          <Link href="/" className="flex items-center">
            <Image
              className="z-40 h-auto w-auto object-cover"
              src={Logo}
              priority
              width={170}
              height={240}
              alt="Intracoastal Dermatology Logo"
              sizes="(max-width: 768px) 170px, (max-width: 1200px) 170px, 170px"
          
            />
          </Link>
          <NavbarClient />
        </nav>
      </div>
    </header>
  );
};

export default NavbarServer;