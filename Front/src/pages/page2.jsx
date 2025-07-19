import React from 'react'
import ProgressBar from '../coponents/Progressbarcomp'
import Educationbar from '../coponents/educationbar'
import Techcomp from '../coponents/techcomp'

const Page2 = () => {
  return (<> 
  <center> 
  <h1 className='text-7xl font-semibold mt-12 -mb-24'>Personals</h1>
  </center> 
   <div className='flex lg:flex-row flex-col justify-around align-middle mt-32 scale-90 '>

   <div className=' h-fit w-[50%] sm:w-full sm:px-8 md:w-[90%] md:mx-10 sm:mx-2 sm:my-2  md:my-2   lg:mx-2 lg:-my-0 py-9 rounded-md  bg-transparent shadow-lg shadow-black '>
            <h1 className='text-7xl p-3 font-bold text-blue-500'>Education</h1>
            <Educationbar topic={"graduation"} details={"bachelor of technology"}/>
            <Educationbar topic={"Domain"} details={"Information technology"}/>
            <Educationbar topic={"percentage"} details={`76%`} />
            {/* <ProgressBar progress={76} /> */}
        </div>
         
        <div className=' h-fit w-[50%] sm:w-[90%] sm:px-8  md:w-[90%] md:mx-10 sm:mx-8 lg:mx-2    bg-transparent shadow-lg shadow-black rounded-md p-4'>
             <h1 className='text-7xl p-3 font-bold text-blue-500' >Skills</h1>
        
             <ProgressBar progress={90} techname={"python"}/>
            

             
             <ProgressBar progress={60} techname={"React JS"}/>

             <ProgressBar progress={90} techname={"Flask"}/>

           
             <ProgressBar progress={70} techname={"Database"}/>

             <ProgressBar progress={75} techname={"Machine learnig & deep learning"}/>

             <ProgressBar progress={75} techname={"Data science"}/>

           
                   
        </div>
      
        <div className=' h-fit w-[50%] sm:w-[90%] sm:px-8 md:w-[90%] md:mx-10 sm:mx-8 sm:my-2 md:my-2   lg:mx-2 lg:-my-0 py-9 rounded-md bg-transparent shadow-lg shadow-black '>
            <h1 className='text-7xl p-3 font-bold text-blue-500'>Tech</h1>
            <Techcomp techname={"Pycharm"} />
            <Techcomp techname={"Vs code"} />
            <Techcomp techname={"Anaconda"} />
            <Techcomp techname={"AWS"} />
            <Techcomp techname={"GIT HUB"} />
            <Techcomp techname={"Mongo DB"} />
        </div>
    </div>
    </>

  )
}

export default Page2
