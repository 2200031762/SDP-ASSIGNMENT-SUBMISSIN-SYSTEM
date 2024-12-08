const express = require('express');
const Assignment = require('../models/Assignment');

const router = express.Router();

// View all Assignments Route
router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.status(200).json(assignments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch assignments' });
  }
});

module.exports = router;
