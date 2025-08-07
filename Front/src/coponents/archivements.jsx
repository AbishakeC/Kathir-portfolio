import React from 'react';

const Archivements = ({ topic, detailing, imagename }) => {
  return (
    // components for archive ments dont have to change for details ,
    //     if you want any style chage make it over here 
    <div className=" bg-slate-900/90 rounded-md shadow-lg shadow-blue-700/65 overflow-hidden w-full p-4 py-10  hover:shadow-xl hover:scale-110 hover:bg-white group duration-200  ">
      <img
        src={imagename}
        alt={topic}
        className="w-full h-52 object-cover rounded-md mb-4"
      />
      <h1 className="text-2xl font-bold text-white group-hover:text-black mb-2">{topic}</h1>
      <p className="text-lg text-white group-hover:text-black font-sans">{detailing}</p>
    </div>
  );
};

export default Archivements;
