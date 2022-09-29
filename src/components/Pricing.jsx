import React from "react";

import HomeIcon from "@heroicons/react/24/solid/HomeIcon";

const Pricing = () => {
  return (
    <div name = "pricing" className="w-full text-white my-24">
      <div className="w-full h-[800px] bg-slate-900 absolute mix-blend-overlay"></div>
      <div className="max-w-[1240px] mx-auto py-12">
        <div className="text-center py-8 text-slate-300">
          <h2 className="text-3xl uppercase">Pricing</h2>
          <h3 className="text-5xl font-bold text-white py-8">The right price for your trip</h3>
          <p className="text-3xl">
          Select cabins or equipment for rent. You can also choose custom packages.
          </p>
        </div>


        <div className="grid md:grid-cols-3">
        
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative" >
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Cabins</span>
            <div>
              <p className="text-4xl font-bold py-4 flex ">€200-1500<span className="text-xl text-slate-500  flex-col justify-end">/wknd</span></p>
            </div>
            <p className="text-2xl py-8 text-slate-500">High end cabins on multiple locations.</p>
            <div className="text-2xl relative">
                {/* <p className="flex py-4 "><HomeIcon className="w-8 mr-5 text-green-600"/>Vuokatti</p> */}
                <p className="flex py-4 "><p className="mr-4">✅</p>Vuokatti</p>
                <p className="flex py-4 "><p className="mr-4">✅</p>Ylläs</p>
                <p className="flex py-4 "><p className="mr-4">✅</p>Ruka</p>
                <p className="flex py-4 "><p className="mr-4">✅</p>Koli</p>
                <p className="flex py-4 "><p className="mr-4">✅</p>Levi</p>
                <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>

          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative" >
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Equipment</span>
            <div>
              <p className="text-4xl font-bold py-4 flex ">€50-200<span className="text-xl text-slate-500  flex-col justify-end">/wknd</span></p>
            </div>
            <p className="text-2xl py-8 text-slate-500">Wide selection of skiing equipment.</p>
            <div className="text-2xl relative">
                <p className="flex py-4  "><p className="mr-4">✅</p>Snowboards</p>
                <p className="flex py-4  "><p className="mr-4">✅</p>Skis</p>
                <p className="flex py-4  "><p className="mr-4">✅</p>Safety</p>
                <p className="flex py-4  "><p className="mr-4">✅</p>Clothes</p>
                <p className="flex py-4  "><p className="mr-4">✅</p>Coaching</p>
                <button className="w-full py-4 my-4">Get Started</button>
            </div>
          </div>
          <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative" >
            <span className="uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm">Full service</span>
            <div>
              <p className="text-4xl font-bold py-4 flex ">Ask for price</p>
            </div>
            <p className="text-2xl py-8 text-slate-500">Custom packages or full service</p>
            <div className="text-2xl relative">
                <p className="flex py-4  "><p className="mr-4">✅</p>Cabin + equipment</p>
                <p className="flex py-4  "><p className="mr-4">✅</p>Cabin + equipment + food</p>
                <p className="flex py-4  "><p className=" mb-8 mr-4">✅</p>Ask for custom package</p>
               
               
                <button className="w-full py-4 mt-20">Get Started</button>
            </div>
          </div>

          
          
        </div>
      </div>
    </div>
  );
};

export default Pricing;
