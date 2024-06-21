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
      className="flex justify-center items-start w-full mt-14 h-[140vh]"
    >
      <motion.div variants={itemVariants} className="card-content flex items-stretch justify-center w-full">
        <div className="rounded-3xl bg-black bg-opacity-40 p-4 shadow-lg md:p-6">
          <div className="flex w-fit flex-col items-center justify-center rounded-xl bg-white bg-opacity-15 p-6 text-center font-cursive text-lg font-medium text-white shadow-inner sm:w-full sm:text-xl md:text-2xl lg:text-3xl">
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
    </motion.div>
  );
};

export default CardContent;
