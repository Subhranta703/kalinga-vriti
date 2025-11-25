import BlogCard from '../components/BlogCard';
import EventCard from '../components/EventCard';
 import HeroSection from '../components/HeroSection';
 import Whatwedo from '../components/Whatwedo';
 import FeaturedContent from '../components/FeaturedContent';
 import UpcomingEvents from '../components/UpcomingEvents';
 import Whatmakesusdifferent from '../components/Whatmakesusdifferent';
 export default function Home() {
  // Placeholder sample data; fetch from API for real data later
  const events = [{
    title: 'Kalinga Code Sprint 1.0',
    description: '48-hour hackathon',
    startDate: '2025-12-15T09:00:00Z'
  }];

  const blogs = [{
    title: 'How I Built a ₹5 Cr Company',
    excerpt: 'Discover how Rajesh Mohanty transformed a local idea...',
    author: 'Rajesh Mohanty',
    readTime: '5 min read'
  }];

  return (
    <div>
      
      
    

     {/* main */}
     <main> 
     {/* hero section */}
     <HeroSection/>


     {/* what we do */}
   <Whatwedo/>
{/* whatmakes us different */}
<Whatmakesusdifferent/>
     {/* Featured content */}
     <FeaturedContent/>

     {/* upcoming events */}
    <UpcomingEvents/>
</main>
     <footer>
    <section className="w-full bg-gradient-to-br from-yellow-400 to-orange-500 py-24 relative overflow-hidden">

  {/* Background circles */}
  <div className="absolute top-10 right-10 w-72 h-72 bg-white/20 rounded-full blur-2xl"></div>
  <div className="absolute bottom-10 left-10 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>

  <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
    {/* Heading */}
    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
      Join Odisha’s Innovation Circle
    </h2>

    {/* Subtext */}
    <p className="text-white/90 text-lg mb-10">
      Be the first to hear about new events, opportunities, stories, and
      community updates shaping the future of our tech landscape.
    </p>

    {/* Email Input Box */}
    <div className="bg-white/30 backdrop-blur-md p-4 rounded-xl mx-auto max-w-2xl flex flex-col sm:flex-row gap-4 items-center">
      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full flex-1 py-3 px-4 rounded-full outline-none bg-white text-gray-700 placeholder-gray-400"
      />

      <button className="bg-[#582E07] text-white font-semibold py-3 px-8 rounded-full whitespace-nowrap hover:bg-[#452605] transition">
        Subscribe Now
      </button>
    </div>

    {/* Footnote */}
    <p className="text-white/90 mt-3 text-sm">
      Join 500+ subscribers. Unsubscribe anytime.
    </p>
  </div>
</section>

     </footer>
    </div>
  );
}
