import React from 'react';
import BlogCard from '../components/BlogCard';

export default function Blog(){
  const stories = [
    { title: "Building India's First Odia Voice Assistant", excerpt: 'Innovating language tech...', author: 'Team', readTime: '6 min read' }
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Stories from Odisha's Tech Ecosystem</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {stories.map((s,i) => <BlogCard key={i} blog={s} />)}
      </div>
    </div>
  );
}
