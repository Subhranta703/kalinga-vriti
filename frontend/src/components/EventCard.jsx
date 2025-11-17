import React from 'react';

export default function EventCard({ event }) {
  return (
    <div className="card">
      <h4 className="font-semibold">{event.title}</h4>
      <p className="text-sm text-gray-600">{event.description}</p>
      <div className="mt-3 text-xs text-gray-500">{new Date(event.startDate).toLocaleString()}</div>
      <button className="mt-4 px-3 py-1 bg-primary text-white rounded">Register Now</button>
    </div>
  );
}
