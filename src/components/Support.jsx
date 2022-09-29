import React from "react";

import HomeIcon from "@heroicons/react/24/solid/HomeIcon";

import cabinImage2 from "../assets/cabin2.jpg";

const Support = () => {
  return (
    <div name = "support" className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/80 absolute ">
        <img
          className="w-full h-full object-cover mix-blend-overlay"
          src={cabinImage2}
          alt="/"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
            Support{" "}
          </h2>
          <h3 className="text-5xl font-bold py-6 text-center">
            Finding the right cabin
          </h3>
          <p className="text-center py-4 text-3xl text-slate-300">
            Our smallest cabins are for 4 people. Largest cabins are up to 20 people. Whether you want to go on weekend or longer trip, we can make that happen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black " >

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <HomeIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 ">Staff</h3>
              <p className="text-gray-600 text-xl">
                We have experienced staff who can help you to make your vacation seamless and fun! 
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <HomeIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <HomeIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 "> Support </h3>
              <p className="text-gray-600 text-xl">
                We have 24/7 support in any problem related to cabins or skiing equipment.
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <HomeIcon className="w-5 ml-2" />
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <HomeIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
              <h3 className="font-bold text-2xl my-6 ">Ask</h3>
              <p className="text-gray-600 text-xl">
                If you want to know more about our business, dont hesitate to contact!
              </p>
            </div>
            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-indigo-600">
                Contact Us <HomeIcon className="w-5 ml-2" />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
