import React from "react";
import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">Customer experiences</h2>
        
        <div className="my-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">


          <div className="flex">
          <div>
          <HomeIcon className="w-7 mr-4 text-green-600 " />
          </div>
            <div>
              <h3 className="font-bold text-lg">Harry, Oulu</h3>
              <p className="text-lg pt-2 pb-4">
                We booked trip for weekend with my family to Ylläs cabin. Everything went smoothly and had best trip of my life!
              </p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <div className="flex">
          <div>
          <HomeIcon className="w-7 mr-4 text-green-600 " />
          </div>
            <div>
              <h3 className="font-bold text-lg">Marie, Stockholm</h3>
              <p className="text-lg pt-2 pb-4">
                Visited Lapland first time in my life. It was good trip and equipment was easy to rent and we had fun time skiing.
              </p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <div className="flex">
          <div>
          <HomeIcon className="w-7 mr-4 text-green-600 " />
          </div>
            <div>
              <h3 className="font-bold text-lg">Marcus, New York</h3>
              <p className="text-lg pt-2 pb-4">
                We travelled Lapland from U.S. It was good vacation for us, everything went smoothly and staff was very kind.
              </p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>
          <div className="flex">
          <div>
          <HomeIcon className="w-7 mr-4 text-green-600 " />
          </div>
            <div>
              <h3 className="font-bold text-lg">Ritva, Helsinki</h3>
              <p className="text-lg pt-2 pb-4">
                Pitkästä aikaa päästiin lappiin lomalle ja oltiin erittäin tyytyväisiä mökin vuokraukseen. Suosittelisin!
              </p>
              <p>⭐⭐⭐⭐⭐</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default AllInOne;
