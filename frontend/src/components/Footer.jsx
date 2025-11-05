import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-8">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between">
        <div>
          <h3 className="font-semibold">Kalinga Vriti</h3>
          <p className="text-sm text-gray-600">Transforming Odisha. Connecting tech and community.</p>
        </div>
        <div className="mt-4 md:mt-0 text-sm text-gray-600">
          <div>events@odishatech.in</div>
          <div>+91 9876543210</div>
          <div>O-Hub, Bhubaneswar</div>
        </div>
      </div>
    </footer>
  );
}
