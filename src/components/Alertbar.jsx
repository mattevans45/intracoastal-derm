import React from 'react';

const AlertBar = () => {
  return (

    // <div className="contact-bar bg-[#1a3660d9] text-white h-13 ">
    //   <address className='text-sm w-full mx-auto sm:w-1/2 leading-tight'>
    //     📍 509 Olde Waterford Way,
    //         Suite 103
    //         Leland, NC 28451  
    //   </address>
    //   <a className='border-l-white sm:w-1/2  w-full border-l-2 text-sm text-center prose-xl leading-tight break-before-avoid' href="tel:910-631-0301"><PhoneIcon className='inline-block h-4 w-4' /> (910) 631-0301</a>
        
    // </div>
    <div className="alert-bar bg-amber-200/85 max-h-16 text-center pb-1 sticky top-0 flex md:items-center justify-center items-start gap-x-2 w-full z-50">
      <p className='leading-tight font-display font-normal'>🚧 Site Currently Under Construction. Ask about our new location in Leland, NC and Grand Opening specials! 🚧</p>
    </div>
  );
};

export default AlertBar;
