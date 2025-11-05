import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold">Kalinga Vriti</Link>
        <nav className="space-x-4">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-primary' : 'text-gray-700'}>Home</NavLink>
          <NavLink to="/community" className={({isActive}) => isActive ? 'text-primary' : 'text-gray-700'}>Community</NavLink>
          <NavLink to="/events" className={({isActive}) => isActive ? 'text-primary' : 'text-gray-700'}>Events</NavLink>
          <NavLink to="/blog" className={({isActive}) => isActive ? 'text-primary' : 'text-gray-700'}>Blog</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-primary' : 'text-gray-700'}>About</NavLink>
        </nav>
        <div className="space-x-2">
          <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
          <Link to="/signup" className="px-3 py-1 bg-primary text-white rounded">Join</Link>
        </div>
      </div>
    </header>
  );
}
