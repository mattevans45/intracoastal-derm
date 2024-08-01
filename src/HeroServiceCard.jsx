
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';


const cardVariants = {
  hidden: { opacity: 0, y: 72 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const HeroServiceCard = (({ icon: Icon, title, description, backgroundImage, to }) => {
  return (
    <motion.div
      className="relative p-4 md:w-1/3"
      whileHover={{ scale: 1.02 }}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex h-full w-full flex-col rounded-3xl border-opacity-60 bg-gray-50 shadow-lg">
        <Image
          className="w-full object-cover rounded-t-3xl object-center md:h-36 lg:h-48"
          src={backgroundImage}
          alt={title}
        />
        <div className="flex flex-grow flex-col p-6">
          <div className="mb-3 flex items-center">
            <Icon className="h-12 w-12 text-[#30548B]" />
            <h1 className="ml-4 font-display text-[#4d4d4d] text-xl font-semibold">{title}</h1>
          </div>
          <p className="mb-3 flex-grow prose leading-relaxed">{description}</p>
          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="whitespace-nowrap rounded-lg font-medium text-white shadow-xl transition-colors"
              aria-label={`Learn more about ${title}`}
            >
              <Link
                href={to}
                className="text-md mt-3 inline-flex items-center rounded-xl bg-[#30548B] p-2 leading-6 text-white duration-500 ease-in-out hover:bg-[#30548B]/90"
                role="button"
                description={`Learn more about ${title}`}
              >
                {`View ${title.split(" ")[0]} Services`}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export default HeroServiceCard;
