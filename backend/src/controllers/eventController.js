const Event = require('../models/Event');

const listEvents = async (req, res) => {
  const events = await Event.find().sort({ startDate: 1 });
  res.json(events);
};

const getEvent = async (req, res) => {
  const e = await Event.findById(req.params.id);
  if(!e) return res.status(404).json({ message: 'Event not found' });
  res.json(e);
};

const createEvent = async (req, res) => {
  // createdBy from auth middleware (if any)
  const payload = { ...req.body, createdBy: req.user?.id };
  const event = await Event.create(payload);
  res.status(201).json(event);
};

module.exports = { listEvents, getEvent, createEvent };
