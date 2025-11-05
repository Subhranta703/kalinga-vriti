import BlogCard from '../components/BlogCard';
import EventCard from '../components/EventCard';

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
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="hero-title">Odisha's Digital Temple of Innovation</h1>
            <p className="subtitle mt-4">Building the largest tech community in Odisha through stories, events, and connections.</p>
            <div className="mt-6 flex gap-3">
              <a className="px-4 py-2 bg-primary text-white rounded" href="/community">Join Our Community</a>
              <a className="px-4 py-2 border rounded" href="/events">Upcoming Events</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="card text-center">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm text-gray-600">Tech Professionals</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold">25+</div>
              <div className="text-sm text-gray-600">Blog Posts</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold">5+</div>
              <div className="text-sm text-gray-600">Events Hosted</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-gray-600">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="font-semibold mb-4">Featured Event</h3>
        <EventCard event={events[0]} />
      </section>

      <section>
        <h3 className="font-semibold mb-4">Latest Insights</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {blogs.map((b,i) => <BlogCard key={i} blog={b} />)}
        </div>
      </section>
    </div>
  );
}
