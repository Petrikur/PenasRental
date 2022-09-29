import React from "react";
import HomeIcon from "@heroicons/react/24/solid/HomeIcon";




import lights from "../assets/lights.jpg";

export const Hero = () => {
  return (
    <div name ="home" className="w-full h-screen  bg-zinc-300 flex flex-col justify-between">
    
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
      
        <div className="flex flex-col mx-auto justify-center md:items-start w-full px-2 py-8">

        
          <h1 className="z-1 py-3 text-5xl md:text-7xl font-bold">
          Cabin and skiing rentals
          </h1>
          <p className="text-2xl"> For everyone</p>
          <button className="py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div className=" ">
          <img src={lights} alt="/" />
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl">
        
          <p className="font-bold">Something for everyone</p>
          <div className="flex justify-between flex-wrap px-4 " >
            <p className="flex px-4 py-2 text- text-slate-500"><HomeIcon className="text-indigo-600 h-6 "/> Equipment</p>
            <p className="flex px-4 py-2 text-slate-500"><HomeIcon className="text-indigo-600 h-6"/> Cabins</p>
            <p className="flex px-4 py-2 text-slate-500"><HomeIcon className="text-indigo-600 h-6"/> Groups</p>
            <p className="flex px-4 py-2 text-slate-500"><HomeIcon className="text-indigo-600 h-6"/> Trips</p>
          </div>
        </div>
      </div>
    </div>
  );
};
