const express = require('express');
const { listEvents, getEvent, createEvent } = require('../controllers/eventController');
const { requireAuth } = require('../middlewares/auth');

const router = express.Router();

router.get('/', listEvents);
router.get('/:id', getEvent);
router.post('/', requireAuth, createEvent);

module.exports = router;
