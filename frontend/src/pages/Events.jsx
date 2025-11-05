import React from 'react';

export default function Events(){
  // Sample upcoming
  const upcoming = [
    { title: 'Founder Meetup #1', date: '2025-11-15' },
    { title: 'React Best Practices', date: '2025-11-22' }
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Where Odisha's Tech Community Connects</h2>
      <p className="text-gray-600 mb-6">From hackathons to meetups, discover events that power Odisha's innovation movement.</p>

      <div className="grid md:grid-cols-2 gap-4">
        {upcoming.map((ev,i) => (
          <div key={i} className="card">
            <h4 className="font-semibold">{ev.title}</h4>
            <div className="text-sm text-gray-500 mt-2">{ev.date}</div>
            <button className="mt-4 px-3 py-1 bg-primary text-white rounded">Register Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
