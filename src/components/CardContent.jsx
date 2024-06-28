import { motion, useAnimation, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 250 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 152 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } },
};

const CardContent = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      className="flex justify-center items-center w-full h-auto min-h-[40vh] p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <motion.div
        variants={itemVariants}
        className="flex flex-col bg-black/25 text-white backdrop-blur-sm rounded-3xl w-full max-w-lg sm:max-w-md md:max-w-lg p-4 sm:p-6 md:p-8 lg:p-10"
      >
        <div className="font-Playfair capitalize flex z-10 text-white flex-col w-full backdrop-opacity-75 backdrop-blur-xl items-center justify-center rounded-xl p-6 text-center">
          <span className="text-3xl text-white sm:text-2xl font-400 md:text-3xl lg:text-4xl">
            Tailored treatments,
          </span>
          <span className="mx-4  text-white font-pretty font-400 text-3xl sm:text-2xl md:text-3xl lg:text-4xl">
            Timeless results.
          </span>
        </div>
        <div className="mt-4 flex flex-col items-center gap-y-2 sm:mt-8 sm:flex-row sm:justify-center sm:gap-x-4 sm:gap-y-4">
          <Link
            to="/schedule-appointment"
            className="rounded-md bg-[#30648B] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors duration-300 hover:bg-[#224966] sm:text-base"
          >
            Schedule an Appointment
          </Link>
          <Link
            to="/intracoastal-derm/schedule-appointment"
            className="mt-2 sm:mt-0 rounded-md px-4 py-2 text-sm font-semibold leading-6 text-white transition-colors duration-300 hover:bg-slate-50/10 sm:text-base"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CardContent;
