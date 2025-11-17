const Blog = require('../models/Blog');

const listBlogs = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

const getBlog = async (req, res) => {
  const b = await Blog.findById(req.params.id);
  if(!b) return res.status(404).json({ message: 'Blog not found' });
  res.json(b);
};

const createBlog = async (req, res) => {
  const blog = await Blog.create(req.body);
  res.status(201).json(blog);
};

module.exports = { listBlogs, getBlog, createBlog };
