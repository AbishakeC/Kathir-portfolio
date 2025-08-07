import React, { useState } from 'react';
import imagegenerator from '../assets/Videos/imagegenerator.mp4';
import { FiX } from 'react-icons/fi';

const Projectcomp = ({ topic, detailing, imagename, elobrate }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <div className="bg-gradient-to-tl from-black via-slate-950 to-blue-600  rounded-md shadow-lg overflow-hidden w-full p-4 py-10 hover:shadow-xl hover:scale-110 hover:bg-gradient-to-br hover:from-blue-600 hover:to-black hover:via-slate-950 duration-200 ">
     <video src={imagegenerator} alt={topic} autoPlay  className="w-full h-52 object-cover rounded-md mb-4"/>
      <img
        src={imagename}
        alt={topic}
        className="w-full h-52 object-cover rounded-md mb-4"
      />
      <h1 className="text-2xl font-bold text-white mb-2">{topic}</h1>
      <p className="text-lg text-white font-sans mb-4">{detailing}</p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black  bg-white  px-6 py-4 rounded hover:bg-blue-500 hover:text-black font-semibold transition duration-300"
      >
        {isOpen ? 'Show Less' : 'For More'}
      </button>
{/* 
      <div className='text-xl py-3  text-white font-semibold duration-500 delay-200'>
        {isOpen && (<>
        {elobrate} </>)}
        </div> */}
    </div>
   { isOpen && <>
   <div className='bg-black w-full h-full absolute opacity-40 z-40'></div>
    <div className=' absolute lg:w-[60%] h-[40%] sm:w-[75%] inset-0 sm:left-[12%] sm:top-[12%]  lg:top-[25%] lg:left-[20%] rounded-md shadow-xl shadow-black py-7   m-3  bg-gradient-to-br from-black to-blue-950 text-white text-3xl  z-50   duration-300 '>
        <div className=' inline-flex justify-end  font-semibold text-4xl'> Project descriptions
        <FiX size={40} className='ml-6' onClick={() => setIsOpen(!isOpen)}/> </div>
       <h1 className='py-6 px-5 text-xl items-start' > {elobrate}</h1></div>
        </>}
    </>
  );
};

export default Projectcomp;
