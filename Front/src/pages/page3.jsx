import React from 'react';
import Archivements from '../coponents/archivements';
import imagegreek from '../assets/greek.jpeg'
import bubblerose from '../assets/bubbleaka.jpeg'
import robotrose from '../assets/robotrose.jpeg'
const Page3 = () => {
  return (
    <>
    <center>
    <h1 className='lg:mt-24 sm:mt-10 text-7xl font-extrabold text-white px-6  '>Archivements</h1>
    <div className=" scale-90 w-full px-4 py-10">
       
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 md:gap-2">

  
        
      <Archivements
          topic={"Hackathon"}
          imagename={imagegreek}
          detailing={"2nd prize at Jai Sri Ram College with cash prize"}
        />
        
        <Archivements
          topic={"Hackathon"}
          imagename={robotrose}
          detailing={"2nd prize at Jai Sri Ram College with cash prize"}
        />
        <Archivements
          topic={"Hackathon"}
        
          imagename={bubblerose}
          detailing={"2nd prize at Jai Sri Ram College with cash prize"}
        />
       
          <Archivements
          topic={"Hackathon"}
          imagename={robotrose}
          detailing={"2nd prize at Jai Sri Ram College with cash prize"}
        />
           <Archivements
          topic={"Hackathon"}
          imagename={bubblerose}
          detailing={"2nd prize at Jai Sri Ram College with cash prize"}
        />
          <Archivements
          topic={"Hackathon"}
          imagename={imagegreek}
          detailing={"2nd prize at Jai Sri Ram College with cash prize"}
        />
        
        
      </div>
    </div>
    </center>
    </>
  );
};

export default Page3;
