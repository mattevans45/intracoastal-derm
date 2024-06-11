import { PhoneIcon } from '@heroicons/react/24/outline';
import React from 'react';

const ContactBar = ({className}) => {
  return (
    <div className="contact-bar bg-[#1a3660d9] text-white break-before-auto text-center pt-1.5 pb-2 fixed flex flex-nowrap justify-center items-center gap-x-2 w-full z-50">
      <address className='text-sm leading-tight'>
        📍 509 Olde Waterford Way,
            Suite 103
            Leland, NC 28451  
      </address>
      <a className='border-l-white border-l-2 ml-2 pl-2 text-sm text-center prose-xl leading-tight break-before-avoid' href="tel:910-631-0301"><PhoneIcon className='inline-flex mx-auto h-4 w-4' /> (910) 631-0301</a>
        
    </div>
  );
};

export default ContactBar;
