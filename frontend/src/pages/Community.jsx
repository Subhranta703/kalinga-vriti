import React from 'react';

export default function Community(){
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">1,000+ Active Members</h2>
      <p className="text-gray-600">Join a growing community of founders, developers, and innovators building Odisha's tech future.</p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="card">
          <h4 className="font-semibold">Community Benefits</h4>
          <ul className="mt-3 list-disc ml-5 text-gray-700">
            <li>Mentorship</li>
            <li>Events</li>
            <li>Job Opportunities</li>
            <li>Collaboration</li>
          </ul>
        </div>
        <div className="card">
          <h4 className="font-semibold">Ways to Connect</h4>
          <div className="mt-3">
            <button className="px-4 py-2 bg-primary text-white rounded mb-3 block">Join WhatsApp</button>
            <button className="px-4 py-2 border rounded mb-3 block">Join LinkedIn</button>
            <form className="mt-4">
              <label className="block text-sm">Weekly Newsletter</label>
              <input className="mt-2 p-2 border rounded w-full" placeholder="Your email" />
              <button className="mt-3 px-4 py-2 bg-primary text-white rounded">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
