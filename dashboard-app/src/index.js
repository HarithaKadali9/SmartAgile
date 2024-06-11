
import React from 'react';
import { createRoot } from 'react-dom/client'; // Corrected import
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

// Use createRoot instead of ReactDOM.render
createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);

