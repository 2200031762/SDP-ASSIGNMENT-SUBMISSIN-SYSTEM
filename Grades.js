import React, { useState } from 'react';

const Grades = () => {
  const [grades, setGrades] = useState([
    { id: 1, course: 'PFSD', grade: 'A', details: 'Completed assignments and project successfully.' },
    { id: 2, course: 'JAVA FULL STACK', grade: 'B+', details: 'Good performance in exams and project.' },
    { id: 3, course: 'MERN FULL STACK', grade: 'A-', details: 'Excellent project work and understanding of concepts.' },
    { id: 4, course: 'ASE', grade: 'B', details: 'Decent performance in exams, need to work on practicals.' },
    { id: 5, course: 'ATFL', grade: 'A+', details: 'Outstanding work in lab reports and assignments.' },
    { id: 6, course: 'CTSD', grade: 'B-', details: 'Met most requirements, but missed some assignment deadlines.' },
    { id: 7, course: 'MACHINE LEARNING', grade: 'A', details: 'Excellent performance in projects and exams.' },
    { id: 8, course: 'ARTIFICIAL INTELLIGENCE', grade: 'B+', details: 'Solid understanding but needs improvement in practicals.' },
  ]);

  const [newGrade, setNewGrade] = useState({ course: '', grade: '', details: '' });
  const [showForm, setShowForm] = useState(false);

  const addGrade = (course, grade, details) => {
    setGrades((prevGrades) => [
      ...prevGrades,
      { id: prevGrades.length + 1, course, grade, details },
    ]);
    setShowForm(false);
  };

  const deleteGrade = (id) => {
    setGrades(grades.filter((grade) => grade.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Course Grades</h1>
      <div style={styles.gradesList}>
        {grades.length === 0 ? (
          <div style={styles.noGrades}>No grades available at this time.</div>
        ) : (
          grades.map((grade) => (
            <div key={grade.id} style={styles.gradeCard}>
              <h3 style={styles.courseName}>{grade.course}</h3>
              <p style={styles.gradeText}>
                <strong>Grade:</strong> {grade.grade}
              </p>
              <p style={styles.detailsText}>
                <strong>Details:</strong> {grade.details}
              </p>
              <button style={styles.deleteButton} onClick={() => deleteGrade(grade.id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      <button style={styles.addGradeButton} onClick={() => setShowForm(!showForm)}>
        {showForm ? 'Close Form' : 'Add New Grade'}
      </button>

      {showForm && (
        <div style={styles.gradeForm}>
          <input
            type="text"
            placeholder="Course Name"
            value={newGrade.course}
            onChange={(e) => setNewGrade({ ...newGrade, course: e.target.value })}
            style={styles.inputField}
          />
          <input
            type="text"
            placeholder="Grade"
            value={newGrade.grade}
            onChange={(e) => setNewGrade({ ...newGrade, grade: e.target.value })}
            style={styles.inputField}
          />
          <textarea
            placeholder="Details"
            value={newGrade.details}
            onChange={(e) => setNewGrade({ ...newGrade, details: e.target.value })}
            style={styles.textarea}
          ></textarea>
          <button
            style={styles.submitButton}
            onClick={() => addGrade(newGrade.course, newGrade.grade, newGrade.details)}
          >
            Add Grade
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#f0f8ff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  header: {
    fontSize: '2rem',
    color: '#4CAF50', // Green color for the header
    textAlign: 'center',
    marginBottom: '20px',
  },
  gradesList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  gradeCard: {
    padding: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
  courseName: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#333',
  },
  gradeText: {
    fontSize: '1rem',
    color: '#4caf50', // Green color for grades
  },
  detailsText: {
    fontSize: '0.9rem',
    color: '#555',
  },
  deleteButton: {
    marginTop: '10px',
    padding: '8px 15px',
    backgroundColor: '#ff5c5c', // Red color for delete button
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  addGradeButton: {
    padding: '10px 20px',
    backgroundColor: '#008CBA', // Blue color for the add button
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '20px',
    width: '100%',
  },
  gradeForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
    padding: '20px',
    backgroundColor: '#eaf6f7', // Light blue background for the form
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  inputField: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    margin: '5px 0',
  },
  textarea: {
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: '#fff',
    height: '100px',
  },
  submitButton: {
    padding: '10px 20px',
    backgroundColor: '#4caf50', // Green color for submit button
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '1rem',
    transition: 'background-color 0.3s',
  },
  noGrades: {
    textAlign: 'center',
    color: '#888',
    fontSize: '1.2rem',
  },
};

export default Grades;
