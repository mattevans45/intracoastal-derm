import React from 'react'
import { useEffect } from 'react';
import logo from './assets/logo.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdOutlineFacebook } from 'react-icons/md';
import { LuInstagram } from 'react-icons/lu';
import { XCircleIcon } from '@heroicons/react/20/solid';
Gplu




const Footer = () => {
    useEffect(() => {
        AOS.init()
        AOS.duration= 1200
      }, [])
  return (
        <footer className="fixed bottom-0 text-white w-full footer-1 bg-[#3a3a3a] py-8 sm:py-12">
        <div className="container mx-auto px-4">
            
            <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
                
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/3">
            <img className=" object-fill w-[400px]"
            data-aos="fade-down"
            src={logo} alt="Intracoastal Dermatology Logo" />
    
                
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0"
            data-aos="fade-down"
            
            >

                <h5 className="text-xl font-bold mb-6"
                 data-aos="fade-left"
                
                >Important Links</h5>
                <ul className="list-none footer-links">
                <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">Office Location</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">Services Provided</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">Another resource</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">Final resource</a>
                </li>
                </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                <h5 className="text-xl font-bold mb-6"
                data-aos="slide-down"
                
                >About</h5>
                <ul className="list-none footer-links"
                data-aos="slide-right"
                >
                <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">Team</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">Locations</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">Privacy</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">Terms</a>
                </li>
                </ul>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
                <h5 className="text-xl font-bold mb-6">Help</h5>
                <ul className="list-none footer-links">
                <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">Contact Us</a>
                </li>
                <li className="mb-2">
                    <a href="#" className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">Call: (910) 631-0301 </a>
                </li>
                <li className="mb-2">
                    <emailaddress className="border-b border-solid border-transparent hover:border-gray-300 hover:text-gray-300">icderm@gmail.com</emailaddress>
                </li>
                </ul>
            </div>
            <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
                <h5 className="text-xl font-bold mb-6 sm:text-center xl:text-left">Stay connected</h5>
                <div className="flex sm:justify-center xl:justify-start">
                <a href="" className="w-10 h-10 rounded-full text-center py-1 text-gray-300 hover:text-white hover:bg-blue-600 hover:border-blue-600">
                    <MdOutlineFacebook className='w-full h-full' />
                </a>
                <a href="" className="w-10 h-10  rounded-full text-center py-1 ml-2 text-gray-300 hover:text-white hover:bg-blue-400 hover:border-blue-400">
                    <LuInstagram className='w-full h-full' />
                </a>
                <a href="" className="w-8 h-8  border-2 border-gray-300 rounded-full text-center py-1 ml-2 text-gray-300 hover:text-white hover:bg-red-600 hover:border-red-600">
                    <i className="fab fa-google-plus-g"></i>
                </a>
                </div>
            </div>
            </div>

            <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
            <div className="sm:w-full px-4 md:w-1/6">
                <strong className='uppercase text-2xl'>Intracoastal Dermatology</strong>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                <h6 className="font-bold mb-2">Address</h6>
                <address className="not-italic mb-4 text-sm">
                509 Olde Waterford Way
                Suite 103
                Leland, NC 28451
                </address>
            </div>
            <div className="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
                <h6 className="font-bold mb-2">Copyright</h6>
                <p className="mb-4 text-sm"> <strong>&copy;2023 Intracoastal Dermatology All Rights Reserved by ICD-LTD</strong>.
                </p>
            </div>
            <div className="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
                <button className="px-4 py-2 bg-slate-700 hover:bg-gray-900 rounded text-white">Get Started</button>
            </div>
            </div>
        </div>
        </footer>
  
  );
}

export default Footer