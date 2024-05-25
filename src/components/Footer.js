import React from 'react';
import Contact from '../components/Contact';

const Footer = () => {
  const today = new Date();
  return (
    <footer className="footer bg-light py-3 mt-auto">
      <div className="container">
        <Contact /> {/* Include contact component here */}
        <p className="text-center">TMachine Software Solutions Private Limited &copy; {today.getFullYear()} Smart_Agile</p>
      </div>
    </footer>
  );
};

export default Footer;
