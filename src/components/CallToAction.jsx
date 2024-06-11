import { motion, useTransform, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

const CallToAction = ({ className }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll(ref);

  // Define the transformations based on scrollYProgress
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [50, 0]);

  return (
    <motion.div
    className="card-content absolute bottom-0 flex items-center justify-center w-full"
      initial={{ opacity: 0, y: 400 }}
      animate={{
        opacity: opacity,
        y: translateY,
      }}
      transition={{ duration: 0.5 }}
      style={{ willChange: "transform, opacity" }}
      ref={ref}
    >
      <div className="z-10 rounded-3xl bg-black bg-opacity-40 p-4 shadow-lg md:p-6">
        <div className="flex w-fit flex-col items-center justify-center rounded-xl bg-gray-300 bg-opacity-40 p-6 text-center font-cursive text-lg font-medium text-white bg-blend-exclusion shadow-inner backdrop-blur-xl sm:w-full sm:text-xl md:w-2/3 md:text-2xl lg:text-3xl">
          <span className="font-display font-light capitalize tracking-wide text-yellow-50/90">
            Expert care
          </span>
          <span className="lowercase">for</span>
          <span className="mx-4 font-cursive text-4xl font-bold lowercase sm:text-5xl">
            healthy
          </span>
          <span className="text-end font-medium lowercase">skin.</span>
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
            className="mt-2 rounded-md px-4 py-2 text-sm font-semibold leading-6 text-gray-200 transition-colors duration-300 hover:bg-slate-50/10 sm:mt-0 sm:text-base"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CallToAction;
