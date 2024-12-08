const express = require('express');
const router = express.Router();

// Example route for fetching notifications
router.get('/', (req, res) => {
  try {
    // Placeholder notification data
    const notifications = [
      { id: 1, message: 'Assignment 1 is due soon.' },
      { id: 2, message: 'Assignment 2 has been graded.' },
    ];
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
