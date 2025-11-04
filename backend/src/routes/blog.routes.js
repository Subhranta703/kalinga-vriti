const express = require('express');
const { listBlogs, getBlog, createBlog } = require('../controllers/blogController');
const { requireAuth } = require('../middlewares/auth');

const router = express.Router();

router.get('/', listBlogs);
router.get('/:id', getBlog);
router.post('/', requireAuth, createBlog);

module.exports = router;
