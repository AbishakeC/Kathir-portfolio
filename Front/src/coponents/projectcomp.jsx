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
    <div className="w-full mb-6 border rounded-xl p-4 bg-white  transition hover:sc  shadow-xl shadow-white/50">
      {/* Card Content */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
        <img
          src={imagename}
          alt={topic}
          className="w-full md:w-48 h-auto rounded-lg object-cover shadow"
        />

        <div className="flex-1">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">{topic}</h2>
          <p className="text-gray-600 mt-1 mb-3 text-sm md:text-base">{detailing}</p>
          <button
            onClick={() => setIsOpen(true)}
            className="text-white px-4 py-2 rounded bg-blue-700 hover:bg-black transition font-semibold shadow"
          >
            ▶ Play Demo
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 flex flex-row bg-black/50 z-40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                       w-[95%] max-w-6xl max-h-[90vh]  z-50 
                       rounded-xl shadow-xl bg-blue-950/60 text-white backdrop-blur-2xl border border-white/20 p-6"
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl md:text-2xl font-semibold">{topic}</h3>
              <FiX
                size={28}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-red-400 transition"
              />
            </div>

            {/* Modal Body */}
            <div className="flex flex-col lg:flex-row gap-6 overflow-hidden">
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

              <div className="lg:w-2/5 max-h-[60vh] overflow-y-auto pr-2">
                <p className="text-base md:text-lg leading-relaxed">{elaborate}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Projectcomp;
