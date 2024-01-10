// import React, { useState } from 'react';
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import chevron icons from a library

// const Sidebar = () => {
 

//   const toggleCategory = (category) => {
//     setCategories((prevCategories) => ({
//       ...prevCategories,
//       [category]: !prevCategories[category],
//     }));
//   };

//   return (
//     <div className="grid grid-cols-3 h-screen">
//       {/* Sidebar */}
//       <div className="col-span-1 bg-gray-200 p-4 overflow-y-auto">
//         {/* Category 1 */}
//         <div className="mb-4">
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleCategory('category1')}
//           >
//             <p className="font-bold">Category 1</p>
//             {categories.category1 ? <FaChevronUp /> : <FaChevronDown />}
//           </div>
//           <ul className={`ml-4 transition-all ${categories.category1 ? 'max-h-48' : 'max-h-0 overflow-hidden'}`}>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 1
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 2
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Category 2 */}
//         <div>
//           <div
//             className="flex justify-between items-center cursor-pointer"
//             onClick={() => toggleCategory('category2')}
//           >
//             <p className="font-bold">Category 2</p>
//             {categories.category2 ? <FaChevronUp /> : <FaChevronDown />}
//           </div>
//           <ul className={`ml-4 transition-all ${categories.category2 ? 'max-h-48' : 'max-h-0 overflow-hidden'}`}>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 3
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 4
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="col-span-2 p-4">
//         {/* Your main content goes here */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// import React, { useState } from 'react';
// import { FaChevronDown, FaChevronLeft, FaChevronUp, FaBars } from 'react-icons/fa'; // Import icons from a library

// const Sidebar = () => {
//     const toggleCategory = (category) => {
//             setCategories((prevCategories) => ({
//               ...prevCategories,
//               [category]: !prevCategories[category],
//             }));
//           };
        

//     const [categories, setCategories] = useState({
//         category1: false,
//         category2: false,
//       });
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true);

//   const toggleSidebar = () => {
//     setIsSidebarOpen((prev) => !prev);
//   };

//   return (
//     <div className={`flex h-screen ${isSidebarOpen ? 'overflow-hidden' : ''}`}>
//       {/* Sidebar */}
//       <div
//         className={`bg-gray-200 p-4 overflow-y-auto transition-all ${
//           isSidebarOpen ? 'w-64' : 'w-0'
//         }`}
//       >
//         <div className="mb-4">
//           <div className="flex justify-between items-center cursor-pointer" onClick={toggleSidebar}>
//             {isSidebarOpen ? (
//               <FaChevronLeft className="text-xl" />
//             ) : (
//               <FaBars className="text-xl" />
//             )}
//           </div>
//         </div>

//         {/* Your sidebar content goes here */}

import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaBars } from 'react-icons/fa';

const Sidebar = () => {


        const toggleCategory = (category) => {
            setCategories((prevCategories) => ({
              ...prevCategories,
              [category]: !prevCategories[category],
            }));
          };
        
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

      const [categories, setCategories] = useState({
        category1: false,
        category2: false,
      });

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-50 transition-opacity ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar */}
      <div
        className={`bg-gray-200 p-4 overflow-y-auto transition-all z-50 ${
          isSidebarOpen ? 'w-64' : 'w-0'
        }`}
      >
        <div className="mb-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <FaChevronUp className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </div>
        </div>

        {/* Your sidebar content goes here */}

        {/* For example, Category 1 */}
        <div className={`${isSidebarOpen ? 'block' : 'hidden'} mb-4`}>
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleCategory('category1')}
          >
            <p className="font-bold">Category 1</p>
            {categories.category1 ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          <ul
            className={`ml-4 transition-all ${
              categories.category1 ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Link 2
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;


//         {/* For example, Category 1 */}
//         <div className={`${isSidebarOpen ? 'block' : 'hidden'} mb-4`}>
//           <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleCategory('category1')}>
//             <p className="font-bold">Category 1</p>
//             {categories.category1 ? <FaChevronUp /> : <FaChevronDown />}
//           </div>
//           <ul className={`ml-4 transition-all ${categories.category1 ? 'max-h-48' : 'max-h-0 overflow-hidden'}`}>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 1
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-blue-500 hover:underline">
//                 Link 2
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-4">
//         {/* Your main content goes here */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

