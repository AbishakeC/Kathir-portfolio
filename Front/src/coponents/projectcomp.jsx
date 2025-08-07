import React, { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

const Projectcomp = ({
  topic,
  detailing,
  imagename,
  elaborate,
  videoname,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div className="w-full mb-6 rounded-xl py-6 px-4 cursor-pointer group transition bg-white shadow-xl shadow-white/50">
      {/* Card Content */}
      <div
        className="flex flex-col md:flex-row items-start md:items-center gap-4"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={imagename}
          alt={topic}
          className="w-full md:w-48 h-52 rounded-lg object-cover shadow"
        />

        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-950 group-hover:text-gray-950">
            {topic}
          </h2>
          <p className="text-gray-600 mt-1 mb-3 text-sm md:text-base">
            {detailing}
          </p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent click from bubbling and reopening
              setIsOpen(true);
            }}
            className="text-blue-600 px-4 py-2 rounded hover:shadow-blue-800/70 transition font-semibold shadow-xl"
          >
            ▶ Play Demo
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <>
          {/* Modal background */}
          <div
            className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Modal content */}
          <div
            role="dialog"
            aria-modal="true"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-[95%] max-w-6xl max-h-[90vh] z-50  overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#3b82f6_#e5e7eb]
                       rounded-xl shadow-xl bg-blue-950/60 text-white 
                       backdrop-blur-2xl border border-white/20 p-6"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="lg:text-6xl md:text-2xl sm:text-xl font-semibold">{topic}</h3>
              <FiX
                size={28}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-red-400 transition"
                aria-label="Close modal"
              />
            </div>

            {/* Modal Body */}
            <div className="flex flex-col lg:flex-row gap-6 ">
              <div className="w-full lg:w-3/5">
                <video
                  src={videoname}
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              <div className="lg:w-2/5 max-h-[60vh]  pr-2">
                <p className=" font-sans lg:text-[16px] md:text-lg font-semibold  leading-relaxed whitespace-pre-wrap">
                  {elaborate || "No description available for this project."}
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projectcomp;
