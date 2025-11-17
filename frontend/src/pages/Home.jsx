import BlogCard from '../components/BlogCard';
import EventCard from '../components/EventCard';
 import HeroSection from '../components/HeroSection';
 import Whatwedo from '../components/Whatwedo';
 import FeaturedContent from '../components/FeaturedContent';
 import UpcomingEvents from '../components/UpcomingEvents';
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

     {/* Featured content */}
     <FeaturedContent/>

     {/* upcoming events */}
    <UpcomingEvents/>
</main>
     <footer>

     </footer>
    </div>
  );
}
