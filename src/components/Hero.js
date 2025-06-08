import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const socialLinks = [
    { name: 'GitHub', icon: FiGithub, url: 'https://github.com/yourusername' },
    { name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/yourusername' },
    { name: 'Twitter', icon: FiTwitter, url: 'https://twitter.com/yourusername' }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="container">
        <motion.div
          ref={ref}
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="hero__text">
            <motion.div className="hero__greeting" variants={itemVariants}>
              <span className="hero__greeting-text">Hello, I'm</span>
            </motion.div>

            <motion.h1 className="hero__name" variants={itemVariants}>
              <span className="hero__name-text">Your Name</span>
            </motion.h1>

            <motion.h2 className="hero__title" variants={itemVariants}>
              <span className="hero__title-text">Full Stack Developer</span>
              <span className="hero__title-accent"> & UI/UX Enthusiast</span>
            </motion.h2>

            <motion.p className="hero__description" variants={itemVariants}>
              I'm a passionate full-stack developer with 5+ years of experience creating 
              beautiful, functional, and user-centered digital experiences. I specialize in 
              modern web technologies and love turning complex problems into simple, elegant solutions.
            </motion.p>

            <motion.div className="hero__actions" variants={itemVariants}>
              <button 
                className="btn btn-primary btn-lg hero__cta"
                onClick={scrollToContact}
              >
                <FiMail />
                Get In Touch
              </button>
              <a 
                href="/resume.pdf" 
                className="btn btn-secondary btn-lg hero__resume"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload />
                Download Resume
              </a>
            </motion.div>

            <motion.div className="hero__social" variants={itemVariants}>
              <span className="hero__social-label">Follow me:</span>
              <div className="hero__social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className="hero__social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow me on ${social.name}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="hero__visual">
            <motion.div 
              className="hero__image-container"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="hero__image">
                <img 
                  src="/api/placeholder/400/400" 
                  alt="Your Name - Professional headshot"
                  className="hero__image-photo"
                />
                <div className="hero__image-overlay"></div>
              </div>
              
              <motion.div 
                className="hero__floating-card hero__floating-card--1"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="hero__card-content">
                  <span className="hero__card-number">50+</span>
                  <span className="hero__card-label">Projects</span>
                </div>
              </motion.div>

              <motion.div 
                className="hero__floating-card hero__floating-card--2"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -2, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="hero__card-content">
                  <span className="hero__card-number">5+</span>
                  <span className="hero__card-label">Years Exp</span>
                </div>
              </motion.div>

              <motion.div 
                className="hero__floating-card hero__floating-card--3"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="hero__card-content">
                  <span className="hero__card-number">100%</span>
                  <span className="hero__card-label">Remote</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="hero__scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.div
            className="hero__scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ↓
          </motion.div>
          <span className="hero__scroll-text">Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 