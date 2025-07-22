import React, { useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/api/form", {
      name,
      email,
      domain,
      description
    })
    .then(result => {
      console.log("Form submitted successfully:", result.data);
      alert("Your request has been submitted successfully!");
      // clear form
      setName("");
      setEmail("");
      setDomain("");
      setDescription("");
    })
    .catch((err) => {
      console.error("Failed to submit form:", err.message);
      alert("Submission failed. Please check your connection or backend.");
    });
  };

  return (
    <div className="flex lg:flex-row sm:flex-col md:flex-row ">
      <div>
        <center>
          <h1 className="text-6xl mt-20 font-semibold mx-8 my-8 mb-14 ml-8 ">
            For Hiring
          </h1>
        </center>
        <form
          className="flex flex-col bg-transparent backdrop-blur-2xl shadow-xl ml-12 -mt-5 shadow-black w-fit  p-5 m-6 rounded-lg sm:ml-25 hover:scale-105 duration-300"
          onSubmit={handleSubmit}
        >
          <label className="text-xl font-sans text-white my-2 mx-5 ">Your Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="w-[60vh] p-3 mx-3 py-4 rounded-md text-white bg-slate-950 hover:scale-105 focus:text-blue-950 hover:bg-white duration-300"
          />

          <label className="text-xl font-sans text-white my-2 mx-5 ">Your E-mail</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-[60vh]  bg-slate-950 p-3 mx-3 py-4 rounded-md text-white focus:text-blue-950 hover:scale-105 hover:bg-white duration-300"
          />

          <label className="text-xl font-sans text-white my-2 mx-5">Domain you're looking for</label>
          <input
            type="text"
            name="domain"
            onChange={(e) => setDomain(e.target.value)}
            value={domain}
            className="w-[60vh] p-3 mx-3 py-4 rounded-md text-white focus:text-blue-950  bg-slate-950 hover:scale-105 hover:bg-white duration-300"
          />

          <label className="text-xl font-sans text-white my-2 mx-5 ">Description</label>
          <textarea
            name="description"
            rows={4}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-[60vh] p-3 mx-3 py-4 rounded-md focus:text-blue-950 bg-slate-950 text-white hover:scale-105 hover:bg-white duration-300"
          />

          <button
            type="submit"
            className=" hover:bg-white hover:text-blue-950 text-xl  w-[30vh] p-4 px-10 my-4 mx-28 bg-blue-700 rounded-lg text-white hover:scale-105 duration-300"
          >
            Send
          </button>
        </form>
      </div>

      <div className="scale-90 lg:mt-36 sm:mt-2 ">
        <h1 className="text-5xl mt-20 font-semibold text-blue-500 mx-8 my-3 animate-pulse ">
          Instructions
        </h1>
        <h3 className="text-xl mt-4 font-semibold mx-8  ">
          You have to fill the form,So i got the informations about you Need.
          Ensure you fill the form in correct Way
          <br></br>
          <span className="text-yellow-500">
            {" "}
            we contact your email or Mobile to ensure and get the more
            information about our work
            <br></br>
            we ensuring the we will contack you within 2 day or less ,otherwise
            apologize us and please resend the form
          </span>{" "}
        </h3>
        <div className="flex flex-row justify-center gap-9 lg:mt-24 md:scale-75 md:mt-8 sm:-ml-14 sm:my-8 ">
          <FiInstagram size={100} className="hover:scale-105 duration-300" />
          <FaTelegram size={100} className="hover:scale-105 duration-300" />
          <MdEmail size={105} className="hover:scale-105 duration-300" />
        </div>
        <h1 className="text-3xl font-semibold text-blue-500 px-8 ml-40 my-4 md:ml-0 sm:-ml-0 lg:ml-28 animate-pulse">
          Thank you for your Time and visiting
        </h1>
      </div>

    </div>
  );
};

export default Form;
