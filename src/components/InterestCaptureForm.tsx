'use client';

import React from 'react';



const InterestCaptureForm = () => {
  const handleJoinClick = () => {
    window.open('https://tally.so/r/w5l2Qv', '_blank'); // Replace with your actual Tally form URL
  };

  return (
    <div className="border-2 border-black bg-[#f4e4bc] p-8 mt-12">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-2xl font-bold font-serif mb-2">
          JOIN THE DRAMA EARLY
        </h3>
        <p className="mb-6 font-serif">
          Get access to more indie drama stories and exclusive gossip.
          Launching next month with full features!
        </p>
        <button
          onClick={handleJoinClick}
          className="bg-black text-white font-serif py-2 px-8 hover:bg-gray-800 transition-colors duration-200 border-2 border-black"
        >
          JOIN
        </button>
        <p className="mt-4 text-sm font-serif text-gray-600">
          * We promise to send you the juiciest indie drama straight to your inbox and also grab your free spot in our subscriber spotlight. <br />Your moment to shine awaits!
        </p>
      </div>
    </div>
  );
};

export default InterestCaptureForm;