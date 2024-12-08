import React from 'react';

// Dummy data for submitted and pending assignments
const assignmentsData = {
  "Java Full Stack": {
    submitted: ["CO1 Assignment", "ALM-1 Assignment"],
    pending: ["CO2 Assignment", "ALM-2 Assignment"],
  },
  "MERN Stack": {
    submitted: ["CO1 Assignment"],
    pending: ["CO2 Assignment", "CO3 Assignment", "ALM-1 Assignment"],
  },
  "PFSD": {
    submitted: ["CO1 Assignment", "CO2 Assignment"],
    pending: ["CO3 Assignment", "ALM-3 Assignment"],
  },
  "ASE": {
    submitted: ["ALM-1 Assignment", "ALM-2 Assignment"],
    pending: ["CO1 Assignment", "CO4 Assignment"],
  },
  "ATFL": {
    submitted: ["CO1 Assignment"],
    pending: ["ALM-2 Assignment", "ALM-3 Assignment"],
  },
  "CTSD": {
    submitted: ["CO1 Assignment", "CO2 Assignment", "ALM-1 Assignment"],
    pending: ["ALM-4 Assignment"],
  },
  "Machine Learning": {
    submitted: ["CO1 Assignment"],
    pending: ["CO2 Assignment", "CO3 Assignment", "CO4 Assignment"],
  },
  "Artificial Intelligence": {
    submitted: ["CO1 Assignment", "ALM-1 Assignment", "ALM-2 Assignment"],
    pending: ["CO2 Assignment", "ALM-3 Assignment"],
  },
};

const ViewAssignments = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>View Assignments</h1>
      <div style={styles.courseList}>
        {Object.entries(assignmentsData).map(([courseName, assignments]) => (
          <div key={courseName} style={styles.courseCard}>
            <h2 style={styles.courseTitle}>{courseName}</h2>

            <div style={styles.assignmentSection}>
              <h3>Submitted Assignments</h3>
              {assignments.submitted.length > 0 ? (
                <ul style={styles.assignmentList}>
                  {assignments.submitted.map((assignment, index) => (
                    <li key={index} style={styles.submittedItem}>
                      {assignment}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={styles.noAssignments}>No submissions yet.</p>
              )}
            </div>

            <div style={styles.assignmentSection}>
              <h3>Pending Assignments</h3>
              {assignments.pending.length > 0 ? (
                <ul style={styles.assignmentList}>
                  {assignments.pending.map((assignment, index) => (
                    <li key={index} style={styles.pendingItem}>
                      {assignment}
                    </li>
                  ))}
                </ul>
              ) : (
                <p style={styles.noAssignments}>No pending assignments.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    color: "#333",
    textAlign: "center",
  },
  header: {
    color: "#4b5563",
    marginBottom: "20px",
  },
  courseList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  courseCard: {
    backgroundColor: "#ffffff",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
  },
  courseTitle: {
    color: "#007BFF",
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  assignmentSection: {
    marginBottom: "20px",
  },
  assignmentList: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  submittedItem: {
    padding: "8px",
    backgroundColor: "#d4edda",
    border: "1px solid #c3e6cb",
    borderRadius: "5px",
    marginBottom: "5px",
    color: "#155724",
  },
  pendingItem: {
    padding: "8px",
    backgroundColor: "#f8d7da",
    border: "1px solid #f5c6cb",
    borderRadius: "5px",
    marginBottom: "5px",
    color: "#721c24",
  },
  noAssignments: {
    fontStyle: "italic",
    color: "#6c757d",
  },
};

export default ViewAssignments;
