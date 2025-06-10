import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiBarChart2, FiUsers, FiBriefcase, FiTrendingUp, FiUserCheck, FiGlobe } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
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
        staggerChildren: 0.1
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



  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Core Competencies */}
          <motion.div className="tech-highlights" variants={itemVariants}>
            <h3 className="tech-highlights-title">Skills</h3>
            
            {/* Technical Competencies */}
            <div className="competency-group">
              <h4 className="competency-group-title">Technical Expertise</h4>
              <div className="tech-highlights-grid">
                <div className="tech-highlight">
                  <FiBarChart2 className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Business Intelligence</h4>
                    <p>Builds enterprise business intelligence applications, dashboards, and reports with SQL, Python, Tableau, PowerBI, Excel, and more</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiCode className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Software Development</h4>
                    <p>Full-stack web applications with Python, JavaScript, and modern frameworks for enterprise solutions</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiCpu className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>AI Integration</h4>
                    <p>Generative AI, automation tools, and modern development workflows with Cursor, GitHub Copilot and AI APIs such as OpenAI</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiDatabase className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Data Engineering</h4>
                    <p>ETL processes, data warehousing, and big data solutions with Databricks, SQL, Teradata, Airflow, and more</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiTrendingUp className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Data Analysis</h4>
                    <p>Analysis, modeling, and insight generation from complex datasets to drive strategic business decisions</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiGlobe className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Geospatial Applications</h4>
                    <p>Map and globe driven applications with Python, Flask, Mapbox, and various APIs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership & Management Competencies */}
            <div className="competency-group">
              <h4 className="competency-group-title">Leadership & Management</h4>
              <div className="tech-highlights-grid">
              <div className="tech-highlight">
                  <FiUsers className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Leadership</h4>
                    <p>Team leadership, mentoring, strategic planning, and driving organizational success through people development</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiBriefcase className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Project Management</h4>
                    <p>End-to-end project execution, resource coordination, and stakeholder management for complex technical initiatives</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 