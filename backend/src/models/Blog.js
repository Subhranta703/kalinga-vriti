const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  excerpt: String,
  content: String,
  author: { type: String, default: 'Kalinga Vriti' },
  tags: [String],
  readTime: String
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);
