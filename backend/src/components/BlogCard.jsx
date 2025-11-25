import React from 'react';

export default function BlogCard({ blog }) {
  return (
    <div className="card">
      <h4 className="font-semibold">{blog.title}</h4>
      <p className="text-sm text-gray-600 mt-2">{blog.excerpt}</p>
      <div className="mt-3 text-xs text-gray-500">{blog.author} • {blog.readTime}</div>
      <a href="#" className="mt-3 inline-block text-primary">Read more</a>
    </div>
  );
}
