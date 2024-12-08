const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());  // For parsing application/json
app.use(cors());  // To allow cross-origin requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/assignmentsDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Schema for Assignment Submission
const assignmentSchema = new mongoose.Schema({
  course: String,
  co: String,
  alm: String,
  fileName: String,
  filePath: String,
  uploadedAt: { type: Date, default: Date.now },
});

const Assignment = mongoose.model('Assignment', assignmentSchema);

// Endpoint to get assignments for a specific course
app.get('/api/assignments/:course', async (req, res) => {
  const { course } = req.params;
  try {
    const assignments = await Assignment.find({ course });
    res.json(assignments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching assignments', error });
  }
});

// Endpoint to submit an assignment (upload)
app.post('/api/submit-assignment', async (req, res) => {
  const { course, co, alm, fileName, filePath } = req.body;

  const newAssignment = new Assignment({
    course,
    co,
    alm,
    fileName,
    filePath,
  });

  try {
    await newAssignment.save();
    res.status(200).json({ message: 'Assignment submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting assignment', error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
