import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiLayers, FiMonitor, FiBarChart2, FiSettings, FiUsers, FiBriefcase, FiTool, FiTrendingUp, FiUserCheck } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      id: 'programming',
      name: 'Programming Languages',
      icon: FiCode,
      color: '#1d4ed8',
      skills: [
        { name: 'Python', experience: '10+ years' },
        { name: 'SQL', experience: '10+ years' },
        { name: 'JavaScript', experience: '7+ years' },
        { name: 'HTML', experience: '7+ years' },
        { name: 'CSS', experience: '7+ years' },
        { name: 'VBA', experience: '10+ years' },
        { name: 'VB.NET', experience: '5+ years' }
      ]
    },
    {
      id: 'databases',
      name: 'Databases & Data Processing',
      icon: FiDatabase,
      color: '#059669',
      skills: [
        { name: 'Teradata', experience: '6+ years' },
        { name: 'Microsoft SQL Server', experience: '10+ years' },
        { name: 'PostgreSQL', experience: '4+ years' },
        { name: 'Oracle', experience: '6+ years' },
        { name: 'MySQL', experience: 'certification experience' },
        { name: 'MongoDB', experience: 'certification experience' },
        { name: 'Apache Spark', experience: 'certification experience' },
        { name: 'Apache Airflow', experience: 'certification experience' },
        { name: 'Databricks', experience: '1+ year' }
      ]
    },
    {
      id: 'ai',
      name: 'AI & Modern Development',
      icon: FiCpu,
      color: '#dc2626',
      skills: [
        { name: 'Generative AI', experience: '2+ years' },
        { name: 'GitHub Copilot', experience: '2+ years' },
        { name: 'Cursor', experience: '2+ years' }
      ]
    },
    {
      id: 'frameworks',
      name: 'Frameworks & APIs',
      icon: FiLayers,
      color: '#7c3aed',
      skills: [
        { name: 'Flask', experience: '5+ years' },
        { name: 'ASP.NET', experience: '3+ years' },
        { name: 'jQuery', experience: '7+ years' },
        { name: 'KendoUI', experience: '2+ years' },
        { name: 'Google Maps API', experience: '5+ years' },
        { name: 'YouTube API', experience: '1+ year' },
        { name: 'OpenWeather API', experience: '1+ year' },
        { name: 'OpenAI API', experience: '2+ years' }
      ]
    },
    {
      id: 'bi',
      name: 'Business Intelligence',
      icon: FiBarChart2,
      color: '#ea580c',
      skills: [
        { name: 'Tableau', experience: '5+ years' },
        { name: 'PowerBI', experience: '3+ years' },
        { name: 'Alteryx', experience: '2+ years' }
      ]
    },
    {
      id: 'productivity',
      name: 'Microsoft Office & Productivity',
      icon: FiTool,
      color: '#0d9488',
      skills: [
        { name: 'Excel', experience: '20+ years' },
        { name: 'PowerPoint', experience: '20+ years' },
        { name: 'Word', experience: '20+ years' },
        { name: 'Outlook', experience: '10+ years' },
        { name: 'Access', experience: '10+ years' }
      ]
    },
    {
      id: 'systems',
      name: 'Systems & Tools',
      icon: FiSettings,
      color: '#1e3a8a',
      skills: [
        { name: 'GitHub', experience: '10+ years' },
        { name: 'Windows', experience: '25+ years' },
        { name: 'Linux', experience: 'certification experience' }
      ]
    },
    {
      id: 'development',
      name: 'Development Lifecycle',
      icon: FiBriefcase,
      color: '#92400e',
      skills: [
        { name: 'System Architecture', experience: '10+ years' },
        { name: 'Requirement Gathering', experience: '10+ years' },
        { name: 'Code Development', experience: '10+ years' },
        { name: 'QA', experience: '10+ years' },
        { name: 'Deployment', experience: '10+ years' },
        { name: 'Support', experience: '10+ years' }
      ]
    },
    {
      id: 'leadership',
      name: 'Leadership & Management',
      icon: FiUsers,
      color: '#be185d',
      skills: [
        { name: 'Leading Development Teams', experience: '5+ years' },
        { name: 'Managing Project Execution', experience: '6+ years' },
        { name: 'Mentoring', experience: '5+ years' },
        { name: 'Career Development', experience: '5+ years' },
        { name: 'Strategic Planning', experience: '5+ years' },
        { name: 'Evaluating Candidates', experience: '5+ years' },
        { name: 'Conducting Interviews', experience: '5+ years' },
        { name: 'Collaborating with Recruiters', experience: '5+ years' },
        { name: 'Onboarding New Hires', experience: '7+ years' },
        { name: 'Stakeholder Relationships', experience: '10+ years' },
        { name: 'Delivering Presentations', experience: '10+ years' }
      ]
    }
  ];

  const allSkills = skillCategories.flatMap(category => 
    category.skills.map(skill => ({ ...skill, category: category.id, categoryName: category.name, color: category.color }))
  );

  const filteredSkills = activeCategory === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeCategory);

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
          <motion.h2 className="section-title" variants={itemVariants}>
            Skills & Technologies
          </motion.h2>

          <motion.p className="skills-intro" variants={itemVariants}>
            Comprehensive expertise across the full data analytics and software development stack, 
            with deep experience in enterprise-scale applications and modern AI tools.
          </motion.p>

          {/* Category Filter */}
          <motion.div className="skills-filters" variants={itemVariants}>
            <button
              className={`skills-filter ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              <FiMonitor />
              All Skills
            </button>
            {skillCategories.map((category) => (
              <button
                key={category.id}
                className={`skills-filter ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
                style={{ '--category-color': category.color }}
              >
                <category.icon />
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div className="skills-grid" variants={itemVariants}>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${skill.category}`}
                className="skill-card skill-card--compact"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2 }}
                style={{ '--skill-color': skill.color }}
              >
                <div className="skill-info">
                  <h4 className="skill-name">{skill.name}</h4>
                  <span className="skill-experience">{skill.experience}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="skills-summary-stats">
              <div className="skills-stat">
                <div className="skills-stat-number">40+</div>
                <div className="skills-stat-label">Technologies</div>
              </div>
              <div className="skills-stat">
                <div className="skills-stat-number">10+</div>
                <div className="skills-stat-label">Leadership Skills</div>
              </div>
              <div className="skills-stat">
                <div className="skills-stat-number">10+</div>
                <div className="skills-stat-label">Years Experience</div>
              </div>
            </div>
            
            <div className="skills-summary-text">
              <p>
                Comprehensive expertise spanning technical excellence and leadership capabilities. 
                From cutting-edge AI integration and data engineering to strategic team management and project execution, 
                I deliver end-to-end solutions that drive business value and organizational success.
              </p>
            </div>
          </motion.div>

          {/* Core Competencies */}
          <motion.div className="tech-highlights" variants={itemVariants}>
            <h3 className="tech-highlights-title">Core Competencies</h3>
            
            {/* Technical Competencies */}
            <div className="competency-group">
              <h4 className="competency-group-title">Technical Expertise</h4>
              <div className="tech-highlights-grid">
                <div className="tech-highlight">
                  <FiBarChart2 className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Business Intelligence</h4>
                    <p>Advanced analytics, reporting, and visualization using Tableau, PowerBI, and custom dashboards</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiCode className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Software Development</h4>
                    <p>Full-stack applications with Python, JavaScript, and modern frameworks for enterprise solutions</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiCpu className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>AI Integration</h4>
                    <p>Generative AI, automation tools, and modern development workflows with GitHub Copilot and LLMs</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiDatabase className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Data Engineering</h4>
                    <p>ETL processes, data warehousing, and big data solutions with Teradata, Spark, and cloud platforms</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiTrendingUp className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Data Analysis</h4>
                    <p>Statistical analysis, data modeling, and insights generation from complex datasets to drive strategic business decisions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Leadership & Management Competencies */}
            <div className="competency-group">
              <h4 className="competency-group-title">Leadership & Management</h4>
              <div className="tech-highlights-grid">
                <div className="tech-highlight">
                  <FiBriefcase className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Project Management</h4>
                    <p>End-to-end project execution, resource coordination, and stakeholder management for complex technical initiatives</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiUsers className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Leadership</h4>
                    <p>Team leadership, mentoring, strategic planning, and driving organizational success through people development</p>
                  </div>
                </div>
                <div className="tech-highlight">
                  <FiUserCheck className="tech-highlight-icon" />
                  <div className="tech-highlight-content">
                    <h4>Team Management</h4>
                    <p>Building and managing high-performing teams, resource allocation, performance management, and fostering collaborative environments</p>
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