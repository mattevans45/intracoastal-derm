import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import logo from "../assets/white-transparent-nameonly.png";

const Logo = ({ className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const scale = useTransform(scrollYProgress, [0, 0.2], [1.5, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.1], [0, -90]);

  useEffect(() => {
    const handleScroll = () => {
      // Just to trigger the useTransform functions
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.img
      src={logo}
      className={`h-fit rounded-md p-4 bg-black bg-opacity-5 shadow-lg z-30
      max-w-[60vw] sm:max-w-[60vw] md:max-w-[60vw] lg:max-w-[60vw]
      ${className}`}
      alt="Logo"
      style={{ scale, y: translateY }}
      ref={ref}
    />
  );
};

export default Logo;
