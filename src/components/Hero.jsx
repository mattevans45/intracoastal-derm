
import whiteLogo from "../assets/images/optimized/white-transparent-nameonly.webp";


import AnimatedLogoAndCard from "./AnimatedLogoAndCard";
import smallwave2560 from "../assets/images/optimized/matt-hardy-6ArTTluciuA-unsplash-2560w-q80.webp";
import background2_2560 from "../assets/images/optimized/alex-CWwdzVtaGKs-unsplash-2560w-q80.webp";
import background3_2560 from "../assets/images/optimized/nick-jio-Pj2TaFMH0pE-unsplash-2560w-q80.webp";
import background4_2560 from "../assets/images/optimized/mourad-saadi-GyDktTa0Nmw-unsplash-2560w-q80.webp";


import BackgroundCarousel from "./BackgroundCarousel";
import OpenModal from "./OpenModal";

const Hero = () => {
 

  const backgroundImages = [
    smallwave2560,
    background3_2560,
    background4_2560,
    background2_2560,
  ];




  return (
    <div className="relative flex flex-col justify-center items-center w-screen overflow-hidden text-white">
      <OpenModal />
      <div className="h-full w-auto">

  
      <BackgroundCarousel images={backgroundImages} interval={8000} />
 
    </div>

   <AnimatedLogoAndCard logoSrc={whiteLogo}/>
    
      </div>

  );
};

export default Hero;
