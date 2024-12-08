import React, { useState } from 'react';

// Colorful placeholder images for each course (replace with actual images)
const courseImages = {
  "Java Full Stack": "https://via.placeholder.com/150/FF5733/FFFFFF?text=Java+Full+Stack",
  "MERN Stack": "https://via.placeholder.com/150/33FF57/FFFFFF?text=MERN+Stack",
  "PFSD": "https://via.placeholder.com/150/337AFF/FFFFFF?text=PFSD",
  "ASE": "https://via.placeholder.com/150/FF33A6/FFFFFF?text=ASE",
  "ATFL": "https://via.placeholder.com/150/FF5733/FFFFFF?text=ATFL",
  "CTSD": "https://via.placeholder.com/150/33FFDB/FFFFFF?text=CTSD",
  "Machine Learning": "https://via.placeholder.com/150/9B59B6/FFFFFF?text=Machine+Learning",
  "Artificial Intelligence": "https://via.placeholder.com/150/FF9F00/FFFFFF?text=AI",
};

const UploadAssignment = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleFileUpload = (e, assignmentName) => {
    const file = e.target.files[0];
    if (file) {
      alert(`${assignmentName}: File "${file.name}" uploaded successfully.`);
    }
  };

  const courses = [
    "Java Full Stack",
    "MERN Stack",
    "PFSD",
    "ASE",
    "ATFL",
    "CTSD",
    "Machine Learning",
    "Artificial Intelligence",
  ];

  const handleCourseClick = (courseName) => {
    setSelectedCourse(courseName);
  };

  const handleBackClick = () => {
    setSelectedCourse(null);  // Reset to show course list
  };

  const renderAssignments = () => {
    if (!selectedCourse) {
      return <div>Select a course to view assignments.</div>;
    }

    const coSections = ['CO1', 'CO2', 'CO3', 'CO4'];
    const almSections = ['ALM-1', 'ALM-2', 'ALM-3', 'ALM-4'];

    return (
      <div style={styles.assignmentsContainer}>
        <h2>{selectedCourse} - Assignment Submissions</h2>

        <h3>Course Objectives</h3>
        {coSections.map((co, index) => (
          <div key={index} style={styles.uploadSection}>
            <h4>{co} - Home Assignment</h4>
            <input
              type="file"
              onChange={(e) => handleFileUpload(e, `${co} Home Assignment`)}
              style={styles.fileInput}
            />
          </div>
        ))}

        <h3>ALM Assignments</h3>
        {almSections.map((alm, index) => (
          <div key={index} style={styles.uploadSection}>
            <h4>{alm} - Assignment</h4>
            <input
              type="file"
              onChange={(e) => handleFileUpload(e, `${alm} Assignment`)}
              style={styles.fileInput}
            />
          </div>
        ))}

        <button onClick={handleBackClick} style={styles.backButton}>Back to Course List</button>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Upload Assignments</h1>
      {!selectedCourse && (
        <div style={styles.courseList}>
          {courses.map((course, index) => (
            <button
              key={index}
              onClick={() => handleCourseClick(course)}
              style={styles.courseButton}
            >
              <div style={styles.courseCard}>
                <img
                  src={courseImages[course]}
                  alt={course}
                  style={styles.courseImage}
                />
                <p style={styles.courseName}>{course}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {renderAssignments()}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    backgroundColor: "#f8f4f4",
    color: "#333",
    textAlign: "center",
  },
  header: {
    color: "#4b5563",
    marginBottom: "20px",
  },
  courseList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },
  courseButton: {
    padding: "10px",
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
  },
  courseCard: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
    textAlign: "center",
  },
  courseImage: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  },
  courseName: {
    padding: "10px",
    fontWeight: "bold",
    color: "#4b5563",
    fontSize: "16px",
  },
  assignmentsContainer: {
    marginTop: "20px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  uploadSection: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#f1f1f1",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  },
  fileInput: {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    maxWidth: "300px",
  },
  backButton: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default UploadAssignment;
