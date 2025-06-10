import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
      setIsDarkMode(false);
      document.documentElement.removeAttribute('data-theme');
    } else {
      // Default to dark mode
      setIsDarkMode(true);
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#work' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="header__content">
          {/* Logo */}
          <motion.div 
            className="header__logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}>
              <span className="header__logo-text">Portfolio</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="header__nav">
            <ul className="header__nav-list">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  className="header__nav-item"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.href}
                    className="header__nav-link"
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle and Mobile Menu */}
          <div className="header__actions">
            <motion.button
              className="header__theme-toggle"
              onClick={toggleDarkMode}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? <FiSun /> : <FiMoon />}
            </motion.button>

            <motion.button
              className="header__mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <nav className="header__mobile-nav">
            <ul className="header__mobile-nav-list">
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  className="header__mobile-nav-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ 
                    opacity: isMobileMenuOpen ? 1 : 0, 
                    x: isMobileMenuOpen ? 0 : -20 
                  }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a 
                    href={item.href}
                    className="header__mobile-nav-link"
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header; 