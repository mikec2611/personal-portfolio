import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCode, FiMap, FiTrendingUp, FiStar, FiGlobe, FiMonitor } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'EarthSearch.ai',
      subtitle: 'AI-Powered Location Information Platform',
      description: 'An intelligent platform that provides comprehensive location information including history, landmarks, culture, and local insights powered by AI, along with weather forecasts for any location worldwide.',
      longDescription: 'EarthSearch.ai leverages artificial intelligence to deliver rich, contextual information about any location on Earth. Users can discover fascinating historical facts, cultural insights, notable landmarks, and local knowledge, complemented by accurate weather forecasting capabilities.',
      category: 'ai',
      tags: ['Python', 'JavaScript', 'CSS', 'HTML', 'Flask', 'OpenAI API', 'YouTube API', 'OpenWeatherMap API'],
      liveUrl: 'https://www.earthsearch.ai',
      githubUrl: '#',
      image: `${process.env.PUBLIC_URL}/images/earthsearch-screenshot.jpg`,
      features: [
        'AI-powered location information and insights',
        'Historical facts and cultural knowledge',
        'Landmark and points of interest discovery',
        'Weather forecasts and current conditions',
        'Interactive location search and exploration',
        'Rich multimedia content integration'
      ],
      status: 'live',
      featured: true,
      color: '#10b981'
    },
    {
      id: 2,
      title: 'USCovidMap.io',
      subtitle: 'Interactive COVID-19 Data Visualization',
      description: 'An interactive map platform providing comprehensive visualization of US COVID-19 data over time, featuring county-level statistics and temporal analysis.',
      longDescription: 'USCovidMap.io offers detailed insights into the COVID-19 pandemic across the United States through interactive maps, charts, and timeline visualizations. Users can explore data at multiple geographic levels and track trends over time.',
      category: 'visualization',
      tags: ['Python', 'JavaScript', 'CSS', 'HTML', 'Flask', 'Mapbox', 'COVID-19 Data (NYT)'],
      liveUrl: 'https://uscovidmap.io',
      githubUrl: '#',
      image: `${process.env.PUBLIC_URL}/images/uscovidmap-screenshot.jpg`,
      features: [
        'Interactive county-level COVID-19 maps',
        'Time-series visualization and playback',
        'Comparative analysis tools',
        'Real-time data updates from CDC',
        'Mobile-responsive design',
        'Data export functionality'
      ],
      status: 'live',
      featured: true,
      color: '#3b82f6'
    },
    {
      id: 3,
      title: 'Personal Portfolio Website',
      subtitle: 'Modern React Portfolio with Advanced Features',
      description: 'A sophisticated personal portfolio website built with React, featuring modern animations, dark mode support, responsive design, and comprehensive skills showcase with interactive filtering.',
      longDescription: 'This portfolio demonstrates advanced front-end development skills through a modern React application featuring smooth animations, professional design, and interactive components. Built with performance and accessibility in mind.',
      category: 'web',
      tags: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Framer Motion', 'React Icons', 'GitHub Pages'],
      liveUrl: '#',
      githubUrl: '#',
      image: null,
      features: [
        'Modern React 18 with functional components and hooks',
        'Framer Motion animations and smooth transitions',
        'Dark/Light mode toggle with localStorage persistence',
        'Responsive design optimized for all device sizes',
        'Interactive skills filtering and categorization',
        'Professional project showcase with detailed descriptions'
      ],
      status: 'live',
      featured: true,
      color: '#7c3aed'
    },
    {
      id: 4,
      title: 'Job Application Tracker',
      subtitle: 'AI-Powered Gmail Integration for Job Search Management',
      description: 'An intelligent Python application that automatically connects to Gmail, identifies job application emails, and provides comprehensive organization and visualization of job search activities using AI-powered analysis.',
      longDescription: 'This automation tool streamlines job search management by intelligently parsing Gmail data to track application submissions, responses, and follow-ups. Leveraging OpenAI API for smart categorization and Python for robust data processing, it transforms email chaos into actionable insights.',
      category: 'ai',
      tags: ['Python', 'Gmail API', 'OpenAI API', 'Data Visualization', 'Automation', 'Email Processing'],
      liveUrl: '#',
      githubUrl: '#',
      image: null,
      features: [
        'Automated Gmail integration with secure API authentication',
        'AI-powered email classification and job application detection',
        'Smart organization of applications by company, role, and status',
        'Interactive visualizations of job search progress and metrics',
        'Automated tracking of response rates and timeline analysis',
        'Export capabilities for further analysis and reporting'
      ],
      status: 'completed',
      featured: true,
      color: '#ef4444'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: FiCode },
    { id: 'ai', label: 'AI', icon: FiTrendingUp },
    { id: 'visualization', label: 'Data Viz', icon: FiMap },
    { id: 'web', label: 'Web Dev', icon: FiMonitor }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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

  const ProjectCard = ({ project }) => (
    <motion.div
      className={`project-card ${project.featured ? 'project-card--featured' : ''} ${!project.image ? 'project-card--no-image' : ''}`}
      variants={itemVariants}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      style={{ '--project-color': project.color }}
    >
      {project.image ? (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          <div className="project-overlay">
            <div className="project-actions">
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-action project-action--primary"
                title="Visit Site"
              >
                <FiExternalLink />
                <span>Visit Site</span>
              </a>
              {project.githubUrl !== '#' && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-action project-action--secondary"
                  title="View Source Code"
                >
                  <FiGithub />
                  <span>Code</span>
                </a>
              )}
            </div>
          </div>
        </div>
      ) : null}

      <div className="project-content">
        <div className="project-header">
          <div className="project-title-group">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>
          </div>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-features">
          <h4 className="project-features-title">Key Features</h4>
          <ul className="project-features-list">
            {project.features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="project-technologies">
          <div className="project-tech-label">Technologies Used:</div>
          <div className="project-tech-tags">
            {project.tags.map((tech, index) => (
              <span key={index} className="project-tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Featured Projects
          </motion.h2>

          {/* Projects Grid */}
          <motion.div 
            className="projects-grid" 
            variants={itemVariants}
            layout
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 