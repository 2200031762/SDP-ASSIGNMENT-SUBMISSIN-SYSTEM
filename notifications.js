import React, { useState, useEffect } from 'react';

// Notifications Component
const Notifications = () => {
  const [deadlines, setDeadlines] = useState([
    { id: 1, title: 'PFSD - Assignment 1', date: '2024-12-15T23:59', description: 'Submit PFSD Assignment 1' },
    { id: 2, title: 'JAVA FULL STACK - Project 1', date: '2024-12-20T12:00', description: 'Submit Project 1 for JAVA FULL STACK course' },
    { id: 3, title: 'MERN FULL STACK - HomeAssignment', date: '2024-12-12T09:00', description: 'Submit Home Assignment for MERN FULL STACK course' },
    { id: 4, title: 'ASE - Exam 1', date: '2024-12-18T10:00', description: 'Prepare for ASE Exam 1' },
    { id: 5, title: 'ATFL - Lab Report', date: '2024-12-22T15:00', description: 'Submit Lab Report for ATFL' },
    { id: 6, title: 'CTSD - Assignment 2', date: '2024-12-17T23:59', description: 'Complete and submit Assignment 2 for CTSD' },
    { id: 7, title: 'MACHINE LEARNING - Project Submission', date: '2024-12-30T23:59', description: 'Submit final project for MACHINE LEARNING' },
    { id: 8, title: 'ARTIFICIAL INTELLIGENCE - Quiz 1', date: '2024-12-25T12:00', description: 'Prepare for Quiz 1 in ARTIFICIAL INTELLIGENCE' },
    { id: 9, title: 'PFSD - Project Final Submission', date: '2024-12-28T23:59', description: 'Final project submission for PFSD' },
    { id: 10, title: 'JAVA FULL STACK - Midterm Exam', date: '2024-12-20T09:00', description: 'Prepare for JAVA FULL STACK Midterm Exam' },
  ]);

  const [notifications, setNotifications] = useState([]);
  const [newDeadline, setNewDeadline] = useState({ title: '', date: '', description: '' });
  const [showForm, setShowForm] = useState(false);

  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const checkDeadlines = () => {
    const now = new Date();
    const notifications = [];

    deadlines.forEach((deadline) => {
      const deadlineDate = new Date(deadline.date);
      const timeDiff = deadlineDate - now;

      if (timeDiff > 0 && timeDiff <= 48 * 60 * 60 * 1000) {
        notifications.push({
          message: `Upcoming: ${deadline.title} is due on ${formatDate(deadline.date)}.`,
          type: 'warning',
        });
      } else if (timeDiff < 0) {
        notifications.push({
          message: `Missed: ${deadline.title} was due on ${formatDate(deadline.date)}.`,
          type: 'error',
        });
      }
    });

    return notifications;
  };

  const addDeadline = (title, date, description) => {
    setDeadlines((prevDeadlines) => [
      ...prevDeadlines,
      { id: prevDeadlines.length + 1, title, date, description },
    ]);
    setShowForm(false); // Close form after submission
  };

  const deleteDeadline = (id) => {
    setDeadlines(deadlines.filter((deadline) => deadline.id !== id));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setNotifications(checkDeadlines());
    }, 60 * 1000);

    // Initial load
    setNotifications(checkDeadlines());

    return () => clearInterval(interval);
  }, [deadlines]);

  return (
    <div className="container">
      <h1>Notifications</h1>
      <div id="notification-container">
        {notifications.length === 0 ? (
          <div className="notification info">No notifications at this time.</div>
        ) : (
          notifications.map((notification, index) => (
            <div
              key={index}
              className={`notification ${notification.type}`}
              style={{
                backgroundColor: notification.type === 'warning' ? '#ff9800' : notification.type === 'error' ? '#f44336' : '#4caf50',
                color: notification.type === 'warning' || notification.type === 'error' ? '#fff' : '#000',
              }}
            >
              {notification.message}
            </div>
          ))
        )}
      </div>

      {/* Deadline Form */}
      <button
        onClick={() => setShowForm(!showForm)}
        style={{
          backgroundColor: '#4caf50',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          cursor: 'pointer',
          fontSize: '16px',
          marginBottom: '20px',
        }}
      >
        {showForm ? 'Close Form' : 'Add New Deadline'}
      </button>
      {showForm && (
        <div className="deadline-form" style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
          <input
            type="text"
            placeholder="Title"
            value={newDeadline.title}
            onChange={(e) => setNewDeadline({ ...newDeadline, title: e.target.value })}
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <input
            type="datetime-local"
            value={newDeadline.date}
            onChange={(e) => setNewDeadline({ ...newDeadline, date: e.target.value })}
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          />
          <textarea
            placeholder="Description"
            value={newDeadline.description}
            onChange={(e) => setNewDeadline({ ...newDeadline, description: e.target.value })}
            style={{
              width: '100%',
              padding: '10px',
              margin: '10px 0',
              border: '1px solid #ccc',
              borderRadius: '4px',
            }}
          ></textarea>
          <button
            onClick={() => addDeadline(newDeadline.title, newDeadline.date, newDeadline.description)}
            style={{
              backgroundColor: '#2196f3',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Add Deadline
          </button>
        </div>
      )}

      <h2>Upcoming Deadlines</h2>
      <ul>
        {deadlines.map((deadline) => (
          <li key={deadline.id} style={{ marginBottom: '15px' }}>
            <strong>{deadline.title}</strong> - {formatDate(deadline.date)}
            <p>{deadline.description}</p>
            <button
              onClick={() => deleteDeadline(deadline.id)}
              style={{
                backgroundColor: '#f44336',
                color: 'white',
                border: 'none',
                padding: '8px 15px',
                cursor: 'pointer',
                fontSize: '14px',
                borderRadius: '4px',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
