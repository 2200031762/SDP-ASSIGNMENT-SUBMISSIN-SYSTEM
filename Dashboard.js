import React, { useState } from 'react';
import UploadAssignment from './UploadAssignment';
import ViewAssignments from './ViewAssignments';
import Notifications from './notifications';
import Grades from './Grades';
import './Dashboard.css';

const Dashboard = ({ user, onLogout }) => {
  const [activeComponent, setActiveComponent] = useState('UploadAssignment');

  const handleComponentChange = (component) => {
    setActiveComponent(component);
  };

  return (
    <div className="dashboard">
      <div className="top-bar">
        <h1>Welcome, {user?.name}</h1>
        <button className="logout-button" onClick={onLogout}>Logout</button>
      </div>
      <div className="dashboard-container">
        <div className="sidebar">
          <div onClick={() => handleComponentChange('UploadAssignment')}>Upload Assignment</div>
          <div onClick={() => handleComponentChange('ViewAssignments')}>View Assignments</div>
          <div onClick={() => handleComponentChange('Notifications')}>Notifications</div> {/* Updated here */}
          <div onClick={() => handleComponentChange('Grades')}>Grades</div>
        </div>
        <div className="main-content">
          {activeComponent === 'UploadAssignment' && <UploadAssignment />}
          {activeComponent === 'ViewAssignments' && <ViewAssignments />}
          {activeComponent === 'Notifications' && <Notifications />}
          {activeComponent === 'Grades' && <Grades />}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
