import React from 'react';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <p className="footer__text">
            Made with <FiHeart className="footer__heart" /> by Your Name
          </p>
          <p className="footer__copyright">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 