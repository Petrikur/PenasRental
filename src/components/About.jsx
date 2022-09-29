import React from "react";

const About = () => {
  return (
    <div name ="about" className="w-full my-32 py-10">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold ">Trusted by thousands of travelers</h2>
          <p className="text-3xl py-6 pb-6 text-gray-500">
            We have wide selections of cabins from small to large and skiing equipment for avery age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
          <div  className=" border py-8 rounder-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-800">98%</p>
            <p className="text-gray-400 mt-2">Customer satisfaction</p>
          </div>
          <div className=" border py-8 rounder-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-800">24/7</p>
            <p className="text-gray-400 mt-2">Support</p>
          </div>
          <div className=" border py-8 rounder-xl shadow-xl">
            <p className="text-6xl font-bold text-indigo-800">7650</p>
            <p className="text-gray-400 mt-2">Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
