import React from 'react';
import logo from '../assets/smartagilelogo.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="container-fluid bg-light"> {/* Add Bootstrap classes */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm"> {/* Add Bootstrap classes */}
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Smart Agile" style={{ width: '50px', height: 'auto' }} /> {/* Adjust logo size */}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/Content" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/userprofile" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/why-choose-us" className="nav-link">Why Choose Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/about-us" className="nav-link">About Us</Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link btn btn-outline-success">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link btn btn-outline-success">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container py-3">  {/* Add Bootstrap classes */}
        <button className="btn btn-primary">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
