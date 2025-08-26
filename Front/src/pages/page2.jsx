import React, { useState, useEffect } from 'react';
import ProgressBar from '../coponents/Progressbarcomp';
import Educationbar from '../coponents/educationbar';
import Techcomp from '../coponents/techcomp';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Section = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); // lg breakpoint

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      const isLarge = window.innerWidth >= 1024;
      setIsLargeScreen(isLarge);
      setIsOpen(isLarge); // force open on large screens
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleOpen = () => {
    if (!isLargeScreen) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="h-fit w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] 
                    bg-white/5 shadow-lg shadow-black rounded-md p-4 mx-auto">
      {/* Section Header */}
      <div
        className={`flex justify-between items-center cursor-pointer ${
          isLargeScreen ? '' : 'p-2 rounded-md'
        } transition`}
        onClick={toggleOpen}
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500">
          {title}
        </h1>
        {!isLargeScreen && (
          <span>
            {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
          </span>
        )}
      </div>

      {/* Collapsible Content */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px]' : 'max-h-0'
        }`}
      >
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

const Page2 = () => {
  return (
    <div className="items-center flex flex-col px-2 sm:px-4 md:px-6 lg:my-6 ">
      <h1 className="text-4xl font-raw   sm:text-4xl md:text-6xl font-bold mt-12 sm:-mb-3 lg:mb-10 ">
        Personals
      </h1>

      <div className="flex flex-col lg:flex-row justify-around mt-20 gap-6 w-full sm:scale-75 lg:scale-95 sm:-mt-1 max-w-6xl">
        
        {/* Education */}
        <Section title="Education">
          <Educationbar topic="Graduation" details="Bachelor of Technology" />
          <Educationbar topic="Domain" details="Information Technology" />
          <Educationbar topic="Percentage" details="71%" />
        </Section>

        {/* Tech */}
        <Section title="Tech | Tools">
          <Techcomp techname="Pycharm" />
          <Techcomp techname="VS Code" />
          <Techcomp techname="Anaconda" />
          <Techcomp techname="Azure | AWS | mLops" />
          <Techcomp techname="Dockers" />
          <Techcomp techname="Jenkins | Kubernets" />
          <Techcomp techname="GIT HUB" />
          <Techcomp techname="Mongo DB" />
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <ProgressBar progress={90} techname="Python" />
          <ProgressBar progress={60} techname="React JS" />
          <ProgressBar progress={75} techname="Machine Learning" />
          <ProgressBar progress={70} techname="Deep Learning" />
          <ProgressBar progress={90} techname="Flask" />
          <ProgressBar progress={70} techname="Database" />
          <ProgressBar progress={75} techname="Data Science" />
        </Section>

      </div>
    </div>
  );
};

export default Page2;
