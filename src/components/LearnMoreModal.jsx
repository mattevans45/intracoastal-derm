import React from "react";

const LearnMoreModal = ({ onClose }) => {
  return (
    <dialog open className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-[99] bg-black bg-opacity-75">
      <div className="bg-white rounded-lg p-6 max-w-screen-lg w-full h-full">
        <button className="absolute top-4 right-4 text-white text-lg" onClick={onClose}>
          Close
        </button>
        <h2 className="text-3xl font-bold mb-4">Learn More</h2>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida nunc id nisl finibus, ac interdum
          ligula aliquet. In hac habitasse platea dictumst.
        </p>
        {/* Add additional content or benefits here */}
      </div>
    </dialog>
  );
};

export default LearnMoreModal;
