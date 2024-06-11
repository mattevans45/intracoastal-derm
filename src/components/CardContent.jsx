import { motion, useTransform, useScroll } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

const CardContent = () => {
//   const ref = useRef();
//   const { scrollYProgress } = useScroll({ target: ref });

//   // Define the transformations based on scrollYProgress
//   const translateY = useTransform(scrollYProgress, [0, 1], [0, -350]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="flex justify-center items-start w-full mt-14  h-[140dvh]">
      <div
        className="card-content flex items-stretch justify-center w-full"
      >
        <div className="rounded-3xl bg-black bg-opacity-40 p-4 shadow-lg md:p-6">
          <div className="flex w-fit flex-col items-center justify-center rounded-xl bg-white bg-opacity-15 p-6 text-center font-cursive text-lg font-medium text-white shadow-inner sm:w-full sm:text-xl  md:text-2xl lg:text-3xl">
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
      </div>
    </div>
  );
};

export default CardContent;
