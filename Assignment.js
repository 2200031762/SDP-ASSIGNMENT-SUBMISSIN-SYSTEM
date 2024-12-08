const mongoose = require('mongoose');

// Assignment Schema
const AssignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  file: {
    type: String,  // The file will be stored as a URL/path string
    required: true
  },
  dateUploaded: {
    type: Date,
    default: Date.now
  }
});

// Export Assignment model
module.exports = mongoose.model('Assignment', AssignmentSchema);
