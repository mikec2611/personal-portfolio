import React from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMapPin, FiUsers, FiTrendingUp, FiCode, FiDatabase } from 'react-icons/fi';
import { useInView } from 'react-intersection-observer';
import './WorkHistory.css';

const WorkHistory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workExperience = [
    {
      id: 1,
      company: "Evernorth Health Services (Cigna)",
      location: "Morris Plains, NJ",
      positions: [
        {
          title: "Senior Manager Data Analytics",
          period: "11/2020 – Current",
          highlights: [
            "Leads development of internal business intelligence application analyzing 1B+ records across pharmaceutical claims, insurance benefits, and product data",
            "Generated $5B+ in identified opportunities for ~3k clients, ~75M members, and ~50+ products",
            "Manages team of 7 software developers and data analysts, plus additional team of 6 developers, analysts, and UI designers",
            "Contributes directly to Teradata database architecture, ETL processes, Python codebase, and SQL query development",
            "Successfully completed Cigna's Leading with Excellence high potential leadership program",
            "Built Python-based deployment tool serving as pilot for AI-assisted coding with GitHub Copilot"
          ],
          technologies: ["Python", "SQL", "Teradata", "Tableau", "Excel", "Salesforce"],
          impact: "Application serves 1k+ internal users across account, product, analytics, and executive teams"
        },
        {
          title: "Software Engineer",
          period: "07/2019 – 11/2020",
          highlights: [
            "Developed reports, models, and analytical outputs using SQL, Python, and VBA",
            "Built solutions for main self-service data analytics application serving 2k+ internal users",
            "Enabled informed decision-making for drug utilization, population analyses, and financial impacts"
          ],
          technologies: ["SQL", "Python", "VBA"],
          impact: "Enhanced analytics capabilities for pharmaceutical and benefit data analysis"
        }
      ]
    },
    {
      id: 2,
      company: "Reckitt Benckiser",
      location: "Parsippany, NJ",
      positions: [
        {
          title: "Business Intelligence Developer",
          period: "12/2018 – 07/2019",
          highlights: [
            "Led development of interactive dashboards for Amazon ecommerce sales data visualization",
            "Enabled more effective product management through advanced analytics and reporting"
          ],
          technologies: ["Business Intelligence", "Dashboard Development", "Amazon API"],
          impact: "Improved product management decision-making through data visualization"
        }
      ]
    },
    {
      id: 3,
      company: "Anywhere Real Estate (formerly Realogy)",
      location: "Madison, NJ",
      positions: [
        {
          title: "Business Intelligence Application Developer",
          period: "07/2017 – 12/2018",
          highlights: [
            "Built interactive web-based geospatial data analysis tool using Google Maps API",
            "Implemented custom polygon drawing for real estate market data visualization across the U.S.",
            "Developed ETL processes in Python to load data into SQL Server database"
          ],
          technologies: ["Google Maps API", "ASP.NET", "HTML", "CSS", "jQuery", "Python", "SQL Server"],
          impact: "Created comprehensive geospatial analysis capabilities for real estate market insights"
        },
        {
          title: "Data Analytics Developer",
          period: "10/2016 – 07/2017",
          highlights: [
            "Developed analytics applications and automated reporting tools",
            "Built solutions using Python, SQL, and VBA for data analysis workflows"
          ],
          technologies: ["Python", "SQL", "VBA"],
          impact: "Streamlined analytics processes through automation"
        },
        {
          title: "Data Analyst",
          period: "08/2014 – 10/2016",
          highlights: [
            "Performed data analysis and reporting for real estate market insights",
            "Developed foundational skills in data analytics and business intelligence"
          ],
          technologies: ["Data Analysis", "Reporting", "Excel"],
          impact: "Provided data-driven insights for real estate market decisions"
        }
      ]
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

  return (
    <section id="work" className="section work-history">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Professional Experience
          </motion.h2>

          <div className="work-timeline">
            {workExperience.map((company, companyIndex) => (
              <motion.div
                key={company.id}
                className="work-company"
                variants={itemVariants}
              >
                <div className="work-company-header">
                  <div className="work-company-info">
                    <h3 className="work-company-name">{company.company}</h3>
                    <div className="work-company-location">
                      <FiMapPin />
                      <span>{company.location}</span>
                    </div>
                  </div>
                </div>

                <div className="work-positions">
                  {company.positions.map((position, positionIndex) => (
                    <motion.div
                      key={positionIndex}
                      className="work-position"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="work-position-header">
                        <div className="work-position-title-section">
                          <h4 className="work-position-title">{position.title}</h4>
                          <div className="work-position-period">
                            <FiCalendar />
                            <span>{position.period}</span>
                          </div>
                        </div>
                      </div>

                      <div className="work-position-content">
                        <div className="work-highlights">
                          <ul>
                            {position.highlights.map((highlight, highlightIndex) => (
                              <li key={highlightIndex}>{highlight}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="work-position-footer">
                          <div className="work-technologies">
                            <FiCode className="work-tech-icon" />
                            <div className="work-tech-tags">
                              {position.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="work-tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>

                          {position.impact && (
                            <div className="work-impact">
                              <FiTrendingUp className="work-impact-icon" />
                              <span className="work-impact-text">{position.impact}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="work-summary" variants={itemVariants}>
            <div className="work-summary-stats">
              <div className="work-stat">
                <FiUsers className="work-stat-icon" />
                <div className="work-stat-content">
                  <span className="work-stat-number">13+</span>
                  <span className="work-stat-label">Team Members Led</span>
                </div>
              </div>
              <div className="work-stat">
                <FiDatabase className="work-stat-icon" />
                <div className="work-stat-content">
                  <span className="work-stat-number">1B+</span>
                  <span className="work-stat-label">Records Analyzed</span>
                </div>
              </div>
              <div className="work-stat">
                <FiTrendingUp className="work-stat-icon" />
                <div className="work-stat-content">
                  <span className="work-stat-number">$5B+</span>
                  <span className="work-stat-label">Value Identified</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkHistory; 