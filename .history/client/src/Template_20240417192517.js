import React from "react";
import { Link } from "react-router-dom";
import './App.css';

const Template = () => {
  return (
    <div className="bg-slate-900 h-screen">
      <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-6xl d-flex justify-center">
        Templates
      </h1>
      <div className="img">
        <Link to="/template1">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover custom-image" src="assests/temp1.jpg" alt="/" />
        </Link>
        <Link to="/template2">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover custom-image" src="assests/temp2.webp" alt="/" />
        </Link>
        <Link to="/page3">
          <img className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover custom-image" src="assests/temp1.jpg" alt="/" />
        </Link>
      </div>
    </div>
  );
}

export default Template;
