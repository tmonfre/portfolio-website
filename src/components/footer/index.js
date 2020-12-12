import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <div id="footer">
      <div id="footer-bar" />
      <div id="footer-content">
        <a href="https://www.linkedin.com/in/thomas-monfre" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin" />
        </a>
        <a href="https://github.com/tmonfre" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github" />
        </a>
        <a href="mailto:thomas.a.monfre.21@dartmouth.edu">
          <i className="fas fa-envelope" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
