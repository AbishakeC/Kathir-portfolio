import React from 'react';
import Projectcomp from '../coponents/projectcomp';
import robotrose from '../assets/robotrose.jpeg';
import video1 from '../assets/Videos/imagegeneration.mp4';
import video2 from '../assets/Videos/Catsordogclassificationinsvm.mp4';
import video3 from '../assets/Videos/Cridit card fraud detection.mp4';
import video4 from '../assets/Videos/Diabetes based on health condition.mp4';
import video5 from '../assets/Videos/Document reader.mp4';
import video6 from '../assets/Videos/Gemini chat bot.mp4';
import video7 from '../assets/Videos/house price pridication.mp4';
import video8 from '../assets/Videos/Iris flower classification.mp4';
import video9 from '../assets/Videos/Own chat bot.mp4';
import video10 from '../assets/Videos/Sales prediction.mp4';
import video11 from '../assets/Videos/Semantic search engine.mp4';
import video12 from '../assets/Videos/text generator.mp4';
import video13 from '../assets/Videos/Titanic several prediction.mp4';

const projectList = [
  { topic: "AI Image Generator", imagename: robotrose, videoname: video1 },
  { topic: "Cat vs Dog Classifier", imagename: robotrose, videoname: video2 },
  { topic: "Credit Card Fraud Detection", imagename: robotrose, videoname: video3 },
  { topic: "Diabetes Prediction", imagename: robotrose, videoname: video4 },
  { topic: "Document Reader", imagename: robotrose, videoname: video5},
  { topic: "Gemini Chatbot", imagename: robotrose, videoname: video6 },
  { topic: "House Price Prediction", imagename: robotrose, videoname: video7 },
  { topic: "Iris Classification", imagename: robotrose, videoname: video8 },
  { topic: "Personal Chatbot", imagename: robotrose, videoname: video9 },
  { topic: "Sales Forecasting", imagename: robotrose, videoname: video10 },
  { topic: "Semantic Search", imagename: robotrose, videoname: video11 },
  { topic: "Text Generator", imagename: robotrose, videoname: video12 },
  { topic: "Titanic Prediction", imagename: robotrose, videoname: video13 },
];

const Page4 = () => {
  return (
    <div className="min-h-screen bg-transparent text-white py-16 px-6">
      <h1 className="text-center text-4xl lg:text-6xl font-bold mb-12">Projects</h1>

      <div className="container mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
        {projectList.map((project, idx) => (
          <Projectcomp
            key={idx}
            {...project}
            detailing="2nd prize at Jai Sri Ram College with cash prize"
            elaborate="This project showcases AI capabilities in real-world solutions. It was built using Python, React, and ML libraries to achieve accurate predictions or generate intelligent responses."
          />
        ))}
      </div>
    </div>
  );
};

export default Page4;
