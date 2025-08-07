import React from 'react';
import Archivements from '../coponents/archivements';
import imagegreek from '../assets/Blrimg.jpg'
import bubblerose from '../assets/gpic.jpg'
import robotrose from '../assets/kiot.jpg'
const Page3 = () => {
  return (
    <>
    <center>
    <h1 className='lg:mt-24 sm:mt-10 lg:text-7xl lg:my-3 sm:text-5xl sm:-my-6 font-raw text-white px-6  '>Archivements</h1>
    <div className=" scale-90 w-full px-4 py-10">
       
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6 md:gap-2">

  <div className=' h-1/2'>
  <Archivements
    topic={"Hackathon"}
    imagename={robotrose}
    detailing={"2nd prize at Jai Sri Ram College with cash prize  "}
  />
  </div>
        
      <Archivements
          topic={"Hackathon Event"}
          imagename={imagegreek}
          detailing={"Top 15th in Reva University GameForce in  Game Challenge "}
        />
        <div className=' h-1/2'>
          <Archivements
          topic={"Hackathon"}
          imagename={bubblerose}
          detailing={"Top 5th in Alliance University in Goal Tracking "}
        />
        </div>

       
        
      </div>
    </div>
    </center>
    </>
  );
};

export default Page3;
