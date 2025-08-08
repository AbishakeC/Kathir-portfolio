import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';

const Archivements = ({ topic, detailing, imagename }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Card */}
      <div
        className="bg-transparent rounded-md shadow-lg shadow-white/60 overflow-hidden w-full p-2 hover:shadow-xl hover:scale-105 hover:bg-white group duration-200"
      >
        <img
          src={imagename}
          alt={topic}
          onClick={openModal}
          className="w-full h-48 sm:h-52 md:h-64 object-cover rounded-md mb-4 cursor-pointer"
        />
        <h1 className="text-xl sm:text-2xl font-bold text-white group-hover:text-black mb-2">
          {topic}
        </h1>
        <p className="text-sm sm:text-base text-white group-hover:text-black font-sans">
          {detailing}
        </p>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-4 py-8" onClick={closeModal}>
          <div className="relative max-w-5xl w-full" >
            {/* Image Container with Close Button */}
            <div className="relative inline-block w-full"   >
              {/* Close Icon on Top-Right */}
              <FiX
                className="absolute top-2 right-2 text-white text-3xl  shadow-2xl shadow-black cursor-pointer z-50"
                onClick={closeModal}
                size={45}
              />
              <img
                src={imagename}
                alt={topic}
                className="w-full h-auto rounded-xl border-white   bg-black object-contain"
                style={{ maxHeight: '90vh' }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Archivements;
