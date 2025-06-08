import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCpu, FiLayers, FiMonitor, FiGitBranch, FiBarChart2, FiSettings } from 'react-icons/fi';
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
      name: 'Programming',
      icon: FiCode,
      color: '#2563eb',
      skills: [
        { name: 'Python', level: 95, experience: '8+ years' },
        { name: 'SQL', level: 98, experience: '10+ years' },
        { name: 'JavaScript', level: 85, experience: '6+ years' },
        { name: 'HTML/CSS', level: 90, experience: '7+ years' },
        { name: 'VBA', level: 88, experience: '8+ years' },
        { name: 'VB.NET', level: 75, experience: '4+ years' }
      ]
    },
    {
      id: 'databases',
      name: 'Databases & ETL',
      icon: FiDatabase,
      color: '#059669',
      skills: [
        { name: 'Teradata', level: 95, experience: '5+ years' },
        { name: 'SQL Server', level: 90, experience: '8+ years' },
        { name: 'PostgreSQL', level: 85, experience: '4+ years' },
        { name: 'Oracle', level: 80, experience: '3+ years' },
        { name: 'MySQL', level: 85, experience: '5+ years' },
        { name: 'MongoDB', level: 75, experience: '2+ years' },
        { name: 'Apache Spark', level: 80, experience: '3+ years' },
        { name: 'Apache Airflow', level: 75, experience: '2+ years' },
        { name: 'Databricks', level: 78, experience: '2+ years' }
      ]
    },
    {
      id: 'ai',
      name: 'AI & Machine Learning',
      icon: FiCpu,
      color: '#dc2626',
      skills: [
        { name: 'Generative AI', level: 90, experience: '2+ years' },
        { name: 'GitHub Copilot', level: 92, experience: '2+ years' },
        { name: 'ChatGPT', level: 95, experience: '2+ years' },
        { name: 'Claude', level: 88, experience: '1+ years' },
        { name: 'Gemini', level: 85, experience: '1+ years' },
        { name: 'Cursor', level: 90, experience: '1+ years' }
      ]
    },
    {
      id: 'frameworks',
      name: 'Frameworks & APIs',
      icon: FiLayers,
      color: '#7c3aed',
      skills: [
        { name: 'Flask', level: 85, experience: '4+ years' },
        { name: 'ASP.NET', level: 80, experience: '5+ years' },
        { name: 'jQuery', level: 88, experience: '6+ years' },
        { name: 'KendoUI', level: 75, experience: '3+ years' },
        { name: 'Google Maps API', level: 85, experience: '4+ years' },
        { name: 'YouTube API', level: 82, experience: '2+ years' },
        { name: 'OpenWeather API', level: 80, experience: '2+ years' },
        { name: 'OpenAI API', level: 88, experience: '2+ years' }
      ]
    },
    {
      id: 'bi',
      name: 'Business Intelligence',
      icon: FiBarChart2,
      color: '#ea580c',
      skills: [
        { name: 'Tableau', level: 92, experience: '6+ years' },
        { name: 'PowerBI', level: 85, experience: '4+ years' },
        { name: 'Alteryx', level: 80, experience: '3+ years' },
        { name: 'Excel Advanced', level: 95, experience: '10+ years' },
        { name: 'Data Visualization', level: 90, experience: '8+ years' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Systems',
      icon: FiSettings,
      color: '#0891b2',
      skills: [
        { name: 'Git/GitHub', level: 88, experience: '5+ years' },
        { name: 'Windows', level: 95, experience: '15+ years' },
        { name: 'Linux', level: 80, experience: '4+ years' },
        { name: 'Salesforce', level: 85, experience: '4+ years' },
        { name: 'Microsoft Office', level: 95, experience: '15+ years' }
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

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    })
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
                className="skill-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                style={{ '--skill-color': skill.color }}
              >
                <div className="skill-header">
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-experience">{skill.experience}</span>
                  </div>
                  <div className="skill-level-badge">
                    {skill.level}%
                  </div>
                </div>
                
                <div className="skill-bar-container">
                  <div className="skill-bar-background">
                    <motion.div
                      className="skill-bar-fill"
                      variants={skillBarVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      custom={skill.level}
                    />
                  </div>
                </div>

                <div className="skill-category-tag">
                  {skill.categoryName}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills Summary */}
          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="skills-summary-stats">
              <div className="skills-stat">
                <div className="skills-stat-number">25+</div>
                <div className="skills-stat-label">Technologies</div>
              </div>
              <div className="skills-stat">
                <div className="skills-stat-number">10+</div>
                <div className="skills-stat-label">Years Experience</div>
              </div>
              <div className="skills-stat">
                <div className="skills-stat-number">6</div>
                <div className="skills-stat-label">Specialization Areas</div>
              </div>
            </div>
            
            <div className="skills-summary-text">
              <p>
                Specialized in building enterprise-scale data analytics solutions with modern technology stacks. 
                Experienced in leading teams through full software development lifecycles, from architecture design 
                to deployment and maintenance. Passionate about leveraging AI and automation to solve complex business problems.
              </p>
            </div>
          </motion.div>

          {/* Technology Highlights */}
          <motion.div className="tech-highlights" variants={itemVariants}>
            <h3 className="tech-highlights-title">Core Competencies</h3>
            <div className="tech-highlights-grid">
              <div className="tech-highlight">
                <FiDatabase className="tech-highlight-icon" />
                <div className="tech-highlight-content">
                  <h4>Data Engineering</h4>
                  <p>ETL processes, data warehousing, and big data solutions with Teradata, Spark, and cloud platforms</p>
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
                <FiBarChart2 className="tech-highlight-icon" />
                <div className="tech-highlight-content">
                  <h4>Business Intelligence</h4>
                  <p>Advanced analytics, reporting, and visualization using Tableau, PowerBI, and custom dashboards</p>
                </div>
              </div>
              <div className="tech-highlight">
                <FiCpu className="tech-highlight-icon" />
                <div className="tech-highlight-content">
                  <h4>AI Integration</h4>
                  <p>Generative AI, automation tools, and modern development workflows with GitHub Copilot and LLMs</p>
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