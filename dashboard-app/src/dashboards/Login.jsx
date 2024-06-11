import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  

  const handleLogin = () => {
    // Hardcoded credentials (for demonstration purposes only)
    const adminCredentials = { username: 'admin', password: 'admin123' };
    const employeeCredentials = { username: 'employee', password: 'emp123' };

    if (username === adminCredentials.username && password === adminCredentials.password) {
      navigate('/admin/sprint-dashboard');
    } else if (username === employeeCredentials.username && password === employeeCredentials.password) {
      navigate('/employee/dashboard');
    } else {
      alert('Invalid credentials or role');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-400 via-white to-gray-400 flex flex-col justify-center items-center">
      <h1 className="text-2xl mb-4">Login</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="m-2 p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="m-2 p-2 border border-gray-300 rounded"
        />
      </div>
      
      <div>
        <button onClick={handleLogin} className="m-2 p-2 bg-green-500 text-white rounded">Login</button>
      </div>
    </div>
  );
};

export default Login;