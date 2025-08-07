import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const Projectcomp = ({ topic, detailing, imagename, elobrate, videoname }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative  m-2  `}>
      <div className="bg-gradient-to-tl from-black via-slate-950 to-blue-600 rounded-md shadow-lg overflow-hidden  w-fit p-4 py-10 flex flex-row justify-between align-middle items-center gap-3 hover:shadow-xl hover:scale-110 hover:bg-gradient-to-br hover:from-blue-600 hover:to-black hover:via-slate-950 duration-200">

        {/* Image display */}
        <img
          src={imagename}
          alt={topic}
          className="w-full h-52 object-cover rounded-md mb-4"
        />
<div className=' flex flex-col gap-3'>
        <h1 className="text-2xl font-bold text-white mb-2">{topic}</h1>
        <p className="text-lg text-white font-sans mb-4">{detailing}</p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black bg-white px-6 py-4 rounded hover:bg-blue-500 hover:text-black font-semibold transition duration-300"
        >
          
          {isOpen ? 'Show Less' : 'For More'}
        </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-40 z-40"></div>

          <div className="fixed max-w-4xl w-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-xl shadow-black py-7 px-4 bg-gradient-to-br from-black to-blue-950 text-white z-50">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-2xl">{topic}</h2>
              <FiX size={30} onClick={() => setIsOpen(false)} className="cursor-pointer" />
            </div>

            {/* Responsive Video */}
            <div className="w-full mb-6">
              <video
                src={videoname}
                controls
                autoPlay
                loop
                className="w-full h-auto rounded-md"
              />
            </div>

            <p className="text-xl">{elobrate}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Projectcomp;
