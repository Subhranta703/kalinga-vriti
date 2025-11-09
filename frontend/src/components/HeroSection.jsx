import React from 'react'
import rathayatra from '../assets/rathayatra.png'
import chakra from '../assets/chakra.png'
import community from '../assets/community.png'
import calender from '../assets/calender.jpg'
 
const HeroSection = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-center justify-center text-white px-6 md:px-16"
      style={{ backgroundImage: `url(${rathayatra})` }}
    > 
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between w-full max-w-7xl gap-10 md:gap-16 py-10">

        {/* Left Section */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-6xl leading-tight">
            Odisha's Digital <br className="hidden sm:block"/> Temple of Innovation
          </h1>

          <p className="text-gray-700 my-8 text-sm sm:text-base md:ml-2">
            Building the largest tech community in Odisha through stories, events,
            <br className="hidden sm:block"/> and connections.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6">
            <button className="bg-yellow-500 font-semibold rounded-md px-4 py-3 md:ml-2 flex items-center justify-center gap-3 hover:bg-yellow-400 transition">
              <img src={community} className="h-6" alt="community"/>
              <span className="text-sm sm:text-base">Join Our Community</span>
            </button>

            <button className="bg-amber-200 font-semibold rounded-md px-4 py-3 flex items-center justify-center gap-3 hover:bg-amber-300 transition">
              <img src={calender} className="h-5" alt="calendar"/>
              <span className="text-red-950 text-sm sm:text-base">Upcoming Events</span>
            </button>
          </div>

          {/* Stats */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-5 mt-8 md:ml-2">
            {[
              { value: "1000+", label: "Tech Professionals" },
              { value: "25+", label: "Blog Posts" },
              { value: "5+", label: "Events Hosted" },
              { value: "5000+", label: "Community Members" },
            ].map((item, index) => (
              <li
                key={index}
                className="h-24 w-36 sm:w-40 bg-gray-100/80 rounded-md flex flex-col justify-center items-center text-center shadow-sm hover:scale-105 transition"
              >
                <h1 className="text-black text-2xl sm:text-3xl font-bold">{item.value}</h1>
                <h5 className="text-black text-sm">{item.label}</h5>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
 <div className="flex justify-center w-full md:w-[500px] ">
  <div
    className="relative flex items-center justify-center w-[600px] h-[450px] bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${chakra})`,
    }}
  >
  </div>
</div>



      </div>
    </section>
  )
}

export default HeroSection
