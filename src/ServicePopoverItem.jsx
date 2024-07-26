'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const menuVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.1, staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -5, transition: { duration: 0.1 } },
};

const ServicePopoverItem = memo(({ item, onClick }) => (
    <motion.div
        key={item.name}
        className="group relative flex items-center justify-start gap-x-6 rounded-lg p-4 transition-all duration-500 focus-within:outline-none ease-in-out hover:rounded-lg hover:border-gray-200 hover:bg-[hsla(206,49%,37%,.80)] hover:text-white focus:outline-none focus-visible:ring focus-visible:ring-gray-500/50"
        initial="hidden"
        animate="visible"
        variants={menuVariants}
    >
        <div className="size-9 rounded-md bg-gray-50 group-hover:bg-white">
            <item.icon className="size-9 inline-flex text-[#4d4d4d] group-hover:text-gray-500" aria-hidden="true" />
        </div>
        <div onClick={onClick} className="flex flex-col">
            <Link href={item.to} className="font-semibold prose text-gray-800 group-hover:text-white">
                {item.name}
            </Link>
            <p className="mt-1 text-gray-500 group-hover:text-white">{item.description}</p>
        </div>
    </motion.div>
));

export default ServicePopoverItem;
