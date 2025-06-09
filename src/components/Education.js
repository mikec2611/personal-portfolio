import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCalendar, FiMapPin, FiExternalLink, FiUser } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      id: 1,
      type: 'degree',
      institution: 'University of Delaware',
      location: 'Newark, DE',
      degree: 'Bachelor of Science in Economics',
      period: '2010 - 2014',
      graduationDate: 'May 2014',
      description: 'Comprehensive study of economic principles, data analysis, and quantitative methods that laid the foundation for my analytical career.',
      highlights: [
        'Strong foundation in statistical analysis and econometrics',
        'Developed critical thinking and problem-solving skills',
        'Extensive coursework in mathematics and data interpretation'
      ],
      icon: FiBookOpen,
      color: '#2563eb'
    }
  ];

  const certifications = [
    {
      id: 1,
      name: 'IBM Data Engineering Professional Certificate',
      issuer: 'IBM',
      date: 'June 2024',
      status: 'completed',
      description: 'Comprehensive program covering data engineering fundamentals, ETL processes, and big data technologies.',
      skills: ['Python', 'SQL', 'Apache Spark', 'Data Warehousing', 'ETL', 'Big Data'],
      verificationLink: '#',
      icon: FiAward,
      color: '#059669'
    },
    {
      id: 2,
      name: 'Google Data Analytics Professional Certificate',
      issuer: 'Google',
      date: 'October 2022',
      status: 'completed',
      description: 'Industry-relevant curriculum covering data analysis, visualization, and business intelligence.',
      skills: ['Data Analysis', 'Data Visualization', 'SQL', 'Tableau', 'R Programming'],
      verificationLink: '#',
      icon: FiAward,
      color: '#dc2626'
    },
    {
      id: 3,
      name: 'Microsoft Professional Program in Data Science',
      issuer: 'Microsoft',
      date: 'July 2018',
      status: 'completed',
      description: 'Advanced program focusing on machine learning, data science methodologies, and Microsoft Azure.',
      skills: ['Machine Learning', 'Data Science', 'Azure', 'Python', 'Statistical Analysis'],
      verificationLink: '#',
      icon: FiAward,
      color: '#7c3aed'
    }
  ];

  const leadershipPrograms = [
    {
      id: 1,
      name: 'Cigna Leading with Excellence Program',
      issuer: 'Cigna Corporation',
      date: 'April 2025',
      status: 'in-progress',
      description: 'High potential leadership development program focusing on strategic thinking, team management, and organizational excellence.',
      skills: ['Leadership', 'Strategic Planning', 'Team Management', 'Executive Communication'],
      icon: FiUser,
      color: '#ea580c'
    }
  ];

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

  const EducationCard = ({ item, type }) => (
    <motion.div
      className={`education-card education-card--${type}`}
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.2 }}
      style={{ '--card-color': item.color }}
    >
      <div className="education-card-header">
        <div className="education-icon">
          <item.icon />
        </div>
        <div className="education-info">
          <h3 className="education-title">
            {type === 'education' ? item.degree : item.name}
          </h3>
          <div className="education-meta">
            <span className="education-issuer">{type === 'education' ? item.institution : item.issuer}</span>
            {type === 'education' && (
              <div className="education-location">
                <FiMapPin />
                <span>{item.location}</span>
              </div>
            )}
          </div>
        </div>
        <div className="education-date">
          <FiCalendar />
          <span>{type === 'education' ? item.graduationDate : item.date}</span>
          {item.status && (
            <span className={`education-status education-status--${item.status}`}>
              {item.status === 'completed' ? 'Completed' : 'In Progress'}
            </span>
          )}
        </div>
      </div>

      <div className="education-content">
        <p className="education-description">{item.description}</p>
        
        {item.highlights && (
          <div className="education-highlights">
            <ul>
              {item.highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}

        {item.skills && (
          <div className="education-skills">
            <div className="education-skills-label">Key Skills:</div>
            <div className="education-skills-tags">
              {item.skills.map((skill, index) => (
                <span key={index} className="education-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {item.verificationLink && (
          <div className="education-verification">
            <a href={item.verificationLink} className="education-verify-link" target="_blank" rel="noopener noreferrer">
              <FiExternalLink />
              View Certificate
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Education & Professional Development
          </motion.h2>

          <motion.p className="education-intro" variants={itemVariants}>
            Committed to continuous learning and professional growth through formal education, 
            industry certifications, and leadership development programs.
          </motion.p>

          {/* Formal Education */}
          <motion.div className="education-section-group" variants={itemVariants}>
            <h3 className="education-group-title">
              <FiBookOpen />
              Formal Education
            </h3>
            <div className="education-grid">
              {education.map((item) => (
                <EducationCard key={item.id} item={item} type="education" />
              ))}
            </div>
          </motion.div>

          {/* Professional Certifications */}
          <motion.div className="education-section-group" variants={itemVariants}>
            <h3 className="education-group-title">
              <FiAward />
              Professional Certifications
            </h3>
            <div className="education-grid">
              {certifications.map((item) => (
                <EducationCard key={item.id} item={item} type="certification" />
              ))}
            </div>
          </motion.div>

          {/* Leadership Programs */}
          <motion.div className="education-section-group" variants={itemVariants}>
            <h3 className="education-group-title">
              <FiUser />
              Leadership Development
            </h3>
            <div className="education-grid">
              {leadershipPrograms.map((item) => (
                <EducationCard key={item.id} item={item} type="leadership" />
              ))}
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Education; 