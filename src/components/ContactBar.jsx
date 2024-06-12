import { PhoneIcon } from '@heroicons/react/24/outline';
import React from 'react';

const ContactBar = ({className}) => {
  return (
    <div className="contact-bar bg-[#1a3660d9] text-white h-13 max-h-13 text-center pb-2 fixed flex md:items-center  flex-nowrap justify-center items-center gap-x-2 w-full z-50">
      <address className='text-sm w-full mx-auto sm:w-1/2 leading-tight'>
        📍 509 Olde Waterford Way,
            Suite 103
            Leland, NC 28451  
      </address>
      <a className='border-l-white sm:w-1/2  w-full border-l-2 text-sm text-center prose-xl leading-tight break-before-avoid' href="tel:910-631-0301"><PhoneIcon className='inline-block h-4 w-4' /> (910) 631-0301</a>
        
    </div>
  );
};

export default ContactBar;
