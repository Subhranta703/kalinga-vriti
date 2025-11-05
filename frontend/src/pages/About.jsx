import React from 'react';

export default function About(){
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">The Vision Behind Kalinga Vriti</h2>
      <p className="text-gray-700 mb-6">A digital temple where Odisha's innovation, stories, and community thrive. Our mission is to amplify Odisha's tech voices through storytelling and meaningful events.</p>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="card">
          <h4 className="font-semibold">Bishnu Das</h4>
          <div className="text-sm text-gray-500">Founder & CEO</div>
        </div>
        <div className="card">
          <h4 className="font-semibold">Poly Sarkar</h4>
          <div className="text-sm text-gray-500">Co-Founder & CTO</div>
        </div>
        <div className="card">
          <h4 className="font-semibold">Team</h4>
          <div className="text-sm text-gray-500">Growing fast — join the movement.</div>
        </div>
      </div>
    </div>
  );
}
