import React, { useState } from 'react';
import './Login.css';
import DashboardPage from './Dashboard'; // Assuming you have a DashboardPage component

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic form validation
    if (!username || !email || !password || !userType) {
      setError('Please fill out all fields.');
      return;
    }
    // Add your login authentication logic here
    // For simplicity, I'm assuming login is successful
    onLogin({ username, email, password, userType, rememberMe }); // Passing user data
    // Set loggedIn state to true after successful login
    setLoggedIn(true);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    if (!/^[a-zA-Z0-9_]+$/.test(e.target.value)) {
      setError('Username can only contain letters, numbers, and underscores.');
    } else {
      setError('');
    }
  };

  // Render the DashboardPage component if loggedIn is true
  if (loggedIn) {
    return <DashboardPage />;
  }

  // Render the login form if loggedIn is false
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <img src="https://tse1.mm.bing.net/th/id/OIP._5V7hTTfCqk_xvCQU8Z42wHaD2?w=341&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Company Logo" className="logo" />
          <h1>Online Assignment Submission System</h1>
        </div>
        {error && <div className="error">{error}</div>}
        <form onSubmit={handleSubmit} className="login-form">
          <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="">Select User Type</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
          <div className="remember-me">
            <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
