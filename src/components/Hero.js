import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
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
    { name: 'GitHub', icon: FiGithub, url: 'https://github.com/mikec2611' },
    { name: 'LinkedIn', icon: FiLinkedin, url: 'https://linkedin.com/in/mikec2611' }
  ];



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
            <motion.h1 className="hero__name" variants={itemVariants}>
              <span className="hero__name-text">Michael Cataliotti</span>
            </motion.h1>

            <motion.h2 className="hero__title" variants={itemVariants}>
              <span className="hero__title-text">Data Analytics & Software Engineering Professional</span>
            </motion.h2>





            <motion.div className="hero__social" variants={itemVariants}>
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


        </motion.div>


      </div>
    </section>
  );
};

export default Hero; 