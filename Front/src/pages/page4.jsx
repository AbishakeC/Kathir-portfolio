import React, { useState } from 'react';
import Projectcomp from '../coponents/Projectcomp';

import aiimagegen from "../assets/projectimage/aimagegen.jpg";
import cat from '../assets/projectimage/catanddog.jpg';
import credit from '../assets/projectimage/credit.jpg';
import diabetis from '../assets/projectimage/diabetis.jpg';
import titanic from '../assets/projectimage/titanic.jpg';
import docred from '../assets/projectimage/docred.jpg';
import scematic from '../assets/projectimage/documentreader.jpg';
import sales from '../assets/projectimage/sales.jpg';
import house from '../assets/projectimage/house.jpg';
import iris from '../assets/projectimage/iris.jpg';
import personal from '../assets/projectimage/robo.jpg';
import gemini from '../assets/projectimage/gemini.jpg';
import oip from '../assets/projectimage/OIP.Webp';

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

// 🟢 Moved here — before projectList
const scematictext = `🚀 Just completed a Full-Stack Semantic Search Engine!
🧠 It understands meaning — not just keywords — using:

✅ FastAPI + SentenceTransformer (all-MiniLM-L6-v2)
✅ FAISS for vector similarity search
✅ React frontend with live query interface
✅ Real-time contextual search in seconds!

Proud to build this intelligent system that brings smarter search experiences to life.
#AI #SemanticSearch #FastAPI #NLP #React #MachineLearning #FullStackAI #VectorSearch`;

const textgenerator = `🧠 Built a GPT-3-like Text Generator from Scratch!
Developed a mini Transformer-based language model trained to generate human-like text, similar to OpenAI's GPT-3. The model was trained on custom datasets using PyTorch/TensorFlow and optimized for inference.

🔧 Tech Stack: Python · PyTorch / TensorFlow · Transformers · NLP · Deep Learning
📌 Core Highlights:
✅ Custom Tokenizer & Dataset Pipeline
✅ Transformer Architecture (Encoder-Decoder / Decoder-only)
✅ Text Generation via Greedy, Top-k, and Temperature Sampling
✅ CLI/Web Interface for Interaction`;

const textsumm=`🚀 Project Launch: AI Text Summarization Tool 🧠✨
I'm excited to share my latest AI-powered Text Summarization project that blends the best of both abstractive and extractive techniques!

🔍 Key Features:
🧠 Abstractive Summarization using the BART transformer model (generates new, human-like summaries)
✂️ Extractive Summarization using TF-IDF + K-means (selects important sentences)
📂 Supports PDF, DOCX, TXT, or direct text input
⚙️ Built with a FastAPI backend and Streamlit frontend
💾 Lets you download your summary after generation
💡 Designed for students, researchers, content writers & productivity seekers!

Whether it's condensing research papers or summarizing lengthy documents, this project makes text easier to digest with state-of-the-art NLP.

🖥️ Tech Stack:
Python, Transformers, Torch, FastAPI, Streamlit, scikit-learn, nltk

📌 All powered by open-source tools — excited to contribute and learn more along the journey!`;

const geminichatbor =`🚀 Built an AI Chatbot Powered by Gemini API!
I developed a conversational chatbot that integrates Google’s Gemini AI (Gemini 1.5) using API keys. The bot can answer user queries intelligently, maintain context, and support interactive multi-turn conversations.

🔧 Tech Stack: Gemini API · Flask ,React ,CSS
🎯 Key Features:
✅ Natural Language Understanding
✅ Contextual Memory (multi-turn)
✅ API Key-based Secure Access
✅ Web-based Interface 

🌐 This chatbot lays the foundation for building advanced AI assistants and customer support tools.`;

const aitxt =`🚀 Just launched a powerful Text-to-Image AI Generator using 🎨 Stable Diffusion + React + Flask!

📝 You type a prompt like
➡️ "A peaceful mountain landscape with a crystal-clear lake, hyperrealistic, golden hour lighting" and get a stunning AI-generated image 🖼️ in seconds.
💻 Tech Stack:
🔥 Backend: Python, Flask, Hugging Face Diffusers
⚛️ Frontend: ReactJS, TailwindCSS
🧠 Model: runwayml/stable-diffusion-v1-5

Use Cases:
🎨 AI art, 👗 fashion design, 📚 book illustrations, 🧠 creative ideation, and more.

✨ Built this as part of my Generative AI exploration and I'm excited to take it further.
Want to try it out or see the code? Let’s connect!
`;

const personalchat =`🚀Just Built My Own Mini ChatGPT! 🤖


Excited to share my latest project: a Custom Transformer-Based Chatbot with advanced capabilities including:

✅ Decoder-only Transformer architecture (like GPT)
✅ Multi-turn context tracking and streaming replies
✅ Document-based QA with FAISS & Sentence Transformers
✅ YouTube & Wikipedia integration for intelligent responses
✅ Sentiment-aware dialogue generation
✅ Real-time long-form context handling and memory-saving

All built with PyTorch, FAISS, SentenceTransformers, and custom NLP modules!

📂 Supports .pdf, .docx, and .txt files for dynamic context-aware retrieval.
🔗 Stay tuned for a web-based UI with FastAPI and React integration!`;

const slae = `🔹 Sales Prediction

📊 Built a Machine Learning Model for Sales Forecasting!
Developed a regression-based model to predict future sales trends using historical data. Implemented preprocessing, feature engineering, and evaluation metrics to optimize model performance.
🔧 Tools: Python · Scikit-learn · Pandas · Matplotlib
#SalesPrediction #ML #DataScience #Regression #Forecasting
`;

const iristxt =`🔹  Credit Card Fraud Detection

🔐 Developed a Credit Card Fraud Detection System
Created a classification model to detect fraudulent transactions in credit card datasets using anomaly detection and supervised learning.
🔧 Tools: Python · Scikit-learn · Logistic Regression · Random Forest
#FraudDetection #AI #CyberSecurity #MachineLearning #CreditCardFraud

`;

const ogiris=`🔹  Iris Flower Classification

🌸 Iris Flower Classification with ML
Used classic ML algorithms (KNN, SVM, Decision Tree) to classify iris flowers based on petal and sepal features.
🔧 Tools: Python · Scikit-learn · Seaborn · Pandas
#IrisDataset #Classification #MLBasics #DataScienceProject

`;

const tita =`🔹 Titanic Survival Prediction

🚢 Titanic Survival Prediction using Machine Learning
Built a classification model to predict survival outcomes on the Titanic using passenger demographics and ticket data.
🔧 Tools: Python · Logistic Regression · Pandas · Scikit-learn
#TitanicML #Kaggle #Classification #SupervisedLearning

`;

const catdog =` Cats vs Dogs Classification using SVM

🐶🐱 Image Classification: Cats vs Dogs using SVM
Developed an image classifier using Support Vector Machines to distinguish between cats and dogs with high accuracy.
🔧 Tools: Python · OpenCV · Scikit-learn · SVM
#ImageClassification #SVM #ComputerVision #AIProjects

`;

const housep =`House Price Prediction

🏠 House Price Prediction using Regression
Created a regression model to predict real estate prices based on multiple features like location, size, and amenities.
🔧 Tools: Python · Scikit-learn · Linear Regression · Pandas
#HousePricePrediction #RealEstateAI #Regression #MLProject
`;

const diabetistxt =`Diabetes Health Risk Prediction

🩺 Diabetes Risk Prediction using Machine Learning
Built a health risk classification model to detect early signs of diabetes based on medical parameters.
🔧 Tools: Python · Logistic Regression · Decision Trees · Pandas
#HealthTech #DiabetesPrediction #MLInHealthcare #AIForGood
`;


// Project list
const projectList = [
  { topic: "AI Image Generator", imagename: aiimagegen, videoname: video1, elaborate: aitxt },
  { topic: "Cat vs Dog Classifier", imagename: cat, videoname: video2, elaborate: catdog },
  { topic: "Credit Card Fraud Detection", imagename: credit, videoname: video3, elaborate: iristxt },
  { topic: "Diabetes Prediction", imagename: diabetis, videoname: video4, elaborate: diabetistxt },
  { topic: "Document Reader", imagename: docred, videoname: video5, elaborate: textsumm },
  { topic: "Gemini Chatbot", imagename: gemini, videoname: video6, elaborate: geminichatbor },
  { topic: "House Price Prediction", imagename: house, videoname: video7, elaborate: housep },
  { topic: "Iris Classification", imagename: iris, videoname: video8, elaborate: ogiris },
  { topic: "Personal Chatbot", imagename: personal, videoname: video9, elaborate: personalchat },
  { topic: "Sales Forecasting", imagename: sales, videoname: video10, elaborate: slae },
  { topic: "Semantic Search", imagename: scematic, videoname: video11, elaborate: scematictext },
  { topic: "Text Generator", imagename: oip, videoname: video12, elaborate: textgenerator },
  { topic: "Titanic Prediction", imagename: titanic, videoname: video13, elaborate: tita },
];

const Page4 = () => {
  const [showAll, setShowAll] = useState(false);

  // Show first 6 projects by default, rest on toggle
  const visibleProjects = showAll ? projectList : projectList.slice(0, 5);

  return (
    <div className="min-h-screen bg-transparent text-white py-16 px-6 -mt-28 sm:mt-4">
      <h1 className="text-center text-4xl lg:text-6xl font-boldy mb-14">Projects</h1>

      <div className="container mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project, idx) => (
          <Projectcomp key={idx} {...project} />
        ))}
      </div>

      {/* Show more/less button */}
      <div className="mt-10 text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md text-lg font-semibold transition duration-200"
        >
          {showAll ? 'Show Less ▲' : 'Show More ▼'}
        </button>
      </div>
    </div>
  );
};

export default Page4;
