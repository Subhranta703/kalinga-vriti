import React from 'react';
import rathayatra from '../assets/rathayatra.png';
import chakra from '../assets/chakra.png';
import community from '../assets/community.png';
import calender from '../assets/calender.jpg';

const HeroSection = () => {
  return (
    <section
      className="min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white px-4 sm:px-8 md:px-12 lg:px-16 w-full overflow-hidden"
      style={{ backgroundImage: `url(${rathayatra})` }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between w-full max-w-7xl gap-10 md:gap-16 py-10">

        {/* LEFT SECTION */}
        <div className="w-full md:w-2/3 text-center md:text-left px-2 sm:px-4">
          <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Odisha's Digital <br className="hidden sm:block" /> Temple of Innovation
          </h1>

          <p className="text-gray-700 my-6 sm:my-8 text-sm sm:text-base md:text-lg md:ml-1">
            Building the largest tech community in Odisha through stories, events,{' '}
            <br className="hidden sm:block" /> and connections.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6">
            <button className="bg-yellow-500 font-semibold rounded-md px-4 py-3 flex items-center justify-center gap-3 hover:bg-yellow-400 transition w-full sm:w-auto">
              <img src={community} className="h-5 sm:h-6" alt="community" />
              <span className="text-sm sm:text-base">Join Our Community</span>
            </button>

            <button className="bg-amber-200 font-semibold rounded-md px-4 py-3 flex items-center justify-center gap-3 hover:bg-amber-300 transition w-full sm:w-auto">
              <img src={calender} className="h-5 sm:h-6" alt="calendar" />
              <span className="text-red-950 text-sm sm:text-base">Upcoming Events</span>
            </button>
          </div>

          {/* STATS */}
          <ul className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-5 mt-8">
            {[
              { value: '1000+', label: 'Tech Professionals' },
              { value: '25+', label: 'Blog Posts' },
              { value: '5+', label: 'Events Hosted' },
              { value: '5000+', label: 'Community Members' },
            ].map((item, index) => (
              <li
                key={index}
                className="h-24 w-32 sm:w-36 md:w-40 bg-white/80 backdrop-blur-sm rounded-md flex flex-col justify-center items-center text-center shadow-sm hover:scale-105 transition"
              >
                <h1 className="text-black text-xl sm:text-2xl font-bold">{item.value}</h1>
                <h5 className="text-black text-[12px] sm:text-sm">{item.label}</h5>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex justify-center w-full md:w-1/3 mt-6 md:mt-0">
          <div
            className="relative flex items-center justify-center w-[260px] h-[220px] sm:w-[350px] sm:h-[300px] md:w-[420px] md:h-[380px] lg:w-[500px] lg:h-[450px] bg-cover bg-center bg-no-repeat "
            style={{
              backgroundImage: `url(${chakra})`,
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
