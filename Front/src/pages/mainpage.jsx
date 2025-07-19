import React from 'react';
import tecky from "../assets/tecky.jpg";
import { motion } from 'framer-motion';
import PdfDoc from '../assets/AadhaarCard.pdf'
import { GoDownload } from 'react-icons/go';

const Mainpage = () => {
  return (
    <div className='relative min-h-screen'>
      
      {/* Background image */}
      <motion.div  
      // initial={{ opacity: 0, y: 105 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{
      //   stiffness: 10,
      //   damping: 80,
      //   delay:1,
      //   duration:0.5
      // }}
        className='absolute inset-0 bg-cover bg-center z-0'
        style={{ backgroundImage: `url(${tecky})` }}
      />

      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      <section className='relative z-20 min-h-screen flex flex-col justify-center items-center px-4 lg:px-20'>
        
        <motion.div
        
      //   initial={{ opacity: 0, scale:0.5,x:105 }}
      // animate={{ opacity: 1, scale:1,x:0 }}
      // transition={{
        
      //   stiffness:10,
      //   damping:0,
      //   duration:1.5,
      //   delay:0.9,
      // }}
      
      className="flex flex-col-reverse lg:flex-row w-full items-center justify-between gap-8 py-10">
          
          <div className='w-full lg:w-1/2 text-center lg:text-left'>
            <h1 className='text-8xl md:text-6xl lg:text-8xl font-boldy text-blue-400 py-4'>Kathirvel</h1>
            <h3 className='text-3xl animate-pulse md:text-2xl font-semibold text-white py-2 px-3'>AI Full Stack Developer</h3>
            <p className='text-base lg:text-2xl md:text-lg text-white font-raw py-2 px-3'>
              With expertise in AI, ML, and Python frameworks, I build creative and artistic applications.
            </p>
            <div className='lg:flex sm:hidden md:hidden  bg-blue-600 text-xl gap-3 items-center w-fit  align-middle px-7  scale-75 hover:scale-100 hover:text-blue-800 hover:bg-white rounded-md duration-200  my-2 -mb-14 p-4'>
            <GoDownload size={35}/>   <a href='' download={PdfDoc} type='application/pdf' >  Download Resume</a>
            </div>
          </div>
          

          <div className='w-full lg:w-1/2 relative flex justify-center'>
            {/* <h1 className='opacity-50'>developer with hightend Tools </h1> */}
         
          </div>
        </motion.div>

        <motion.div className='flex flex-col lg:my-4  sm:-my-4 md:flex-row sm:flex-row  justify-around items-center bg-transparent  bg-opacity-35 shadow-blue-400  shadow-md  p-6 rounded-3xl w-full scale-75 max-w-6xl gap-6  mt-8'  
        initial={{ opacity: 0,scale:0,  }}
      animate={{ opacity: 1,scale:0.7, }}
      transition={{
        
        stiffness:100,
        damping:10,
        duration:0.9,
        delay:1,
      }} > 
          <div className='text-center  hover:scale-110 duration-300'>
            <span className='text-5xl font-extrabold text-white'>15+</span>
            <h2 className='text-xl md:text-2xl font-bold text-white mt-2'>Projects</h2>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <span className='text-5xl font-extrabold  text-white'>2+</span>
            <h2 className='text-xl md:text-2xl font-bold  text-white mt-2'>Years of Practicing</h2>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <span className='text-5xl font-extrabold  text-white'>20</span>
            <h2 className='text-xl md:text-2xl font-bold  text-white mt-2'>Age</h2>
          </div>

          <div className='text-center hover:scale-110 duration-300'>
            <span className='text-5xl font-extrabold  text-white'>10+</span>
            <h2 className='text-xs md:text-2xl font-bold  text-white mt-2'>Tools & Technologies</h2>
          </div>

        </motion.div>
      
      </section>
    </div>
  );
};

export default Mainpage;
