import React from "react";
import book from '../assets/book.png'
import founder from '../assets/founder.png'

import handshake from '../assets/handshake.png'

import location from '../assets/location.png'

const Whatmakesusdifferent = () => {
  return (
    <div className="w-full bg-gradient-to-b from-[#fff7e6] to-white py-16">
      <h2 className="text-3xl sm:text-4xl font-semibold text-orange-700 text-center font-serif mb-12">
        What Makes Us Different
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6 text-center">
        
        {/* Card 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#fdecc7] p-4 rounded-xl">
            <img
              src={location}
              alt=""
              className="h-8 w-8"
            />
          </div>
          <h3 className="text-lg font-semibold text-orange-700 mt-4">
            Odisha-first approach
          </h3>
          <p className="text-gray-600 text-sm">Local roots, global standards</p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#fdecc7] p-4 rounded-xl">
            <img
              src= {founder}
              alt=""
              className="h-8 w-8"
            />
          </div>
          <h3 className="text-lg font-semibold text-orange-700 mt-4">
            Founder-led
          </h3>
          <p className="text-gray-600 text-sm">
            Built by entrepreneurs for entrepreneurs
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#fdecc7] p-4 rounded-xl">
            <img
              src= {book}
              alt=""
              className="h-8 w-8"
            />
          </div>
          <h3 className="text-lg font-semibold text-orange-700 mt-4">
            Story-driven
          </h3>
          <p className="text-gray-600 text-sm">
            Every journey has a narrative
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center">
          <div className="bg-[#fdecc7] p-4 rounded-xl">
            <img
              src={handshake}
              alt=""
              className="h-8 w-8"
            />
          </div>
          <h3 className="text-lg font-semibold text-orange-700 mt-4">
            Community-owned
          </h3>
          <p className="text-gray-600 text-sm">
            By the community, for the community
          </p>
        </div>

      </div>
    </div>
  );
};

export default Whatmakesusdifferent;
