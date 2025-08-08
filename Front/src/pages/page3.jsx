import React, { useState } from 'react';
import Archivements from '../coponents/archivements';
import imagegreek from '../assets/Blrimg.jpg';
import bubblerose from '../assets/gpic.jpg';
import robotrose from '../assets/kiot.jpg';

const Page3 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="w-full px-4 py-6">
        {/* Dropdown Toggle Header */}
        <div
          className="cursor-pointer bg-white text-blue-500 text-center flex flex-row justify-between px-6 items-center rounded-lg py-4 shadow-lg  duration-200"
          onClick={toggleDropdown}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-raw ">
            Archivement
          </h1>
          <span className='p-4'> {isOpen ? '▲' : '▼'}</span>
        </div>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="mt-8 scale-95 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Archivements
                topic="Hackathon"
                imagename={robotrose}
                detailing="2nd prize at Jai Sri Ram College with cash prize"
              />
              <Archivements
                topic="Hackathon Event"
                imagename={imagegreek}
                detailing="Top 15th in Reva University GameForce in Game Challenge"
              />
              <Archivements
                topic="Hackathon"
                imagename={bubblerose}
                detailing="Top 5th in Alliance University in Goal Tracking"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Page3;


// import React, { useState } from 'react';
// import Archivements from '../coponents/archivements';
// import imagegreek from '../assets/Blrimg.jpg';
// import bubblerose from '../assets/gpic.jpg';
// import robotrose from '../assets/kiot.jpg';

// const Page3 = () => {
//   const [showMore, setShowMore] = useState(false);

//   const toggleShow = () => setShowMore(!showMore);

//   return (
//     <div className="w-full px-4 py-10">
//       <h1 className="text-center lg:text-7xl sm:text-5xl font-raw text-white mb-10">
//         Archivements
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
//         {/* Always visible items */}
//         <Archivements
//           topic="Hackathon"
//           imagename={robotrose}
//           detailing="2nd prize at Jai Sri Ram College with cash prize"
//         />
//         <Archivements
//           topic="Hackathon Event"
//           imagename={imagegreek}
//           detailing="Top 15th in Reva University GameForce in Game Challenge"
//         />

//         {/* Conditionally visible (in dropdown) */}
//         {showMore && (
//           <Archivements
//             topic="Hackathon"
//             imagename={bubblerose}
//             detailing="Top 5th in Alliance University in Goal Tracking"
//           />
//         )}
//       </div>

//       {/* Show more/less button */}
//       <div className="mt-8 flex justify-center">
//         <button
//           onClick={toggleShow}
//           className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
//         >
//           {showMore ? 'Show Less ▲' : 'Show More ▼'}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Page3;
