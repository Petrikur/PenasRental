import React from "react";

import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <div>
          <h6 className="font-bold uppercase pt-2">Rentals</h6>
          <ul>
            <li className="py-1">Cities</li>
            <li className="py-1">Weather</li>
            <li className="py-1">Cabins</li>
            <li className="py-1">Equipment</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Support</h6>
          <ul>
            <li className="py-1">Pricing</li>
            <li className="py-1">Help</li>
            <li className="py-1">Tips</li>
            
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Company</h6>
          <ul>
            <li className="py-1">Marketing</li>
            <li className="py-1">Analytics</li>
            <li className="py-1">Commerce</li>
            
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Legal</h6>
          <ul>
            <li className="py-1">Claim</li>
            <li className="py-1">Privacy</li>
            <li className="py-1">Terms</li>
            <li className="py-1">Policies</li>
          </ul>
        </div>
        <div className="col-span-2 pt-8 md:pt-2">
            <p className="font-bold uppercase">Subscribe to our newsletter</p>
            <p className="py-4">The latest news, articles, and resources, sent to your inbox weekly</p>
            <form className="flex flex-col sm:flex-row">
                <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" placeholder="Email"></input>
                <button className="p-2 mb-4 ">Subscribe</button>
            </form>
        </div>
      </div>
      <div className="flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500">
        <p className="py-4">2022 Pena's rentals, LLC. All rightss reserved </p>
        <div className="flex justify-between sm:w-[300px] pt-4 text-2xl">
        <FaFacebook />
        <FaGithub />
        <FaInstagram />
        <FaTwitch />
        <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
