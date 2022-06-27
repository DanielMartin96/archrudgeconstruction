import React from "react";

const Hero = () => {
  return (
    <div
      className="w-full bg-center bg-cover h-[32rem]"
      style={{ backgroundImage: `url(/archrudge-patio.jpeg)` }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-75">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-white uppercase lg:text-3xl">
            Providing quality construction and a professional service
          </h1>
          <button
            style={{ backgroundColor: "#c39d5b" }}
            className="px-4 py-2 mt-4 text-sm font-medium text-white uppercase transition-colors duration-200 transform rounded-md lg:w-auto focus:outline-none"
          >
            Start project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
