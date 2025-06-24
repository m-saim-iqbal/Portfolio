import { motion } from 'framer-motion';
import './App.css';
import type { JSX } from 'react';

interface Project {
  name: string;
  description: string;
  tech: string[];
  achievements: string[];
}

function App(): JSX.Element {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const projects: Project[] = [
    {
      name: 'Atlas Battery E-commerce',
      description: 'Mobile application developed with React Native for e-commerce functionality.',
      tech: ['React Native', 'Redux', 'JavaScript', 'TypeScript'],
      achievements: [
        'Updated React Native and dependencies to latest versions',
        'Migrated from class-based to functional components with hooks',
        'Developed reusable components for better maintainability',
        'Implemented caching and Redux for improved performance'
      ]
    },
    {
      name: 'Atlas Insurance Customer Care Portal',
      description: 'Mobile application with integrated payment system and customer portal.',
      tech: ['React Native', 'PHP', 'REST API', 'Payment Gateway'],
      achievements: [
        'Implemented secure user authentication',
        'Created REST APIs in PHP for backend integration',
        'Integrated payment gateways for online transactions',
        'Developed insurance details viewing interface'
      ]
    },
    {
      name: 'Atlas Honda Sales Application',
      description: 'Full-stack application for internal sales team with data visualization.',
      tech: ['React Native', 'Laravel', 'Oracle DB', 'Charts.js'],
      achievements: [
        'Designed Laravel API layer for Oracle DB integration',
        'Built interactive dashboards with data visualization',
        'Created mobile and web interfaces for sales data management',
        'Implemented manager feedback system'
      ]
    },
    {
      name: 'QIC Project - Quality Insurance Workflow',
      description: 'Comprehensive workflow system for automating quality insurance claims processing.',
      tech: ['HTML', 'JavaScript', 'CSS', 'PHP'],
      achievements: [
        'Developed automated workflow hierarchy for warranty claims',
        'Implemented user-friendly interface for claim submissions',
        'Created efficient processing system for quality insurance team',
        'Streamlined the warranty claim verification process'
      ]
    },
    {
      name: 'Atlas Autos Mobile Application',
      description: 'Feature-rich mobile application for Atlas Autos with diverse functionality.',
      tech: ['React Native', 'Unity', 'JavaScript', 'PDF Viewer'],
      achievements: [
        'Integrated interactive product catalogue',
        'Implemented Qiblah direction feature',
        'Incorporated Unity-based game for user engagement',
        'Developed media center and PDF viewer for help documentation',
        'Created comprehensive FAQ section'
      ]
    }
  ];

  const skills = {
    languages: ['JavaScript', 'TypeScript', 'PHP', 'Kotlin', 'HTML/CSS', 'SQL', 'Python', 'C++'],
    frameworks: ['React Native', 'React JS', 'Laravel', 'CodeIgniter'],
    tools: ['Git', 'Linux', 'Android Studio', 'Gradle', 'AWS', 'Docker', 'CI/CD']
  };

  return (
    <div>
      <nav className="nav">
        <div className="container">
          <ul style={{ display: 'flex', gap: '2rem', padding: '1rem 0', listStyle: 'none' }}>
            <li><a href="#home" className="button">Home</a></li>
            <li><a href="#projects" className="button">Projects</a></li>
            <li><a href="#skills" className="button">Skills</a></li>
            <li><a href="#education" className="button">Education</a></li>
            <li><a href="#contact" className="button">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main style={{ paddingTop: '80px' }}>
        <section id="home" className="section">
          <div className="container">
            <motion.div {...fadeIn} className="brutalist-box">
              <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Muhammad Saim Iqbal</h1>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem' }}>Application Engineer</h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>
                Dynamic software engineer experienced in delivering innovative IT solutions using React Native, JavaScript, 
                TypeScript, and PHP. Passionate about developing applications and making meaningful contributions in tech.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--color-primary)' }}>
                Currently at Atlas IT Resource Center
              </p>
            </motion.div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Selected Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="brutalist-box"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 style={{ marginBottom: '1rem' }}>{project.name}</h3>
                  <p style={{ marginBottom: '1rem' }}>{project.description}</p>
                  <div style={{ marginBottom: '1rem' }}>
                    <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-primary)' }}>Achievements:</h4>
                    <ul className="achievement-list" style={{ listStyle: 'none', marginLeft: '0' }}>
                      {project.achievements.map((achievement, i) => (
                        <li key={i} style={{ marginBottom: '0.5rem' }}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section">
          <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Education</h2>
            <motion.div 
              className="brutalist-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h3 style={{ marginBottom: '1rem' }}>Bachelor of Science in Computer Engineering</h3>
              <p className="education-info" style={{ marginBottom: '0.5rem' }}>Ghulam Ishaq Khan Institute</p>
              <p className="education-info" style={{ marginBottom: '1rem' }}>September 2020 – June 2024 | Topi, Swabi, KPK</p>
              <p>Graduated with a CGPA of 3.00</p>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Skills & Tools</h2>
            <motion.div 
              className="brutalist-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Languages</h3>
                  <ul style={{ listStyle: 'none' }}>
                    {skills.languages.map((lang, index) => (
                      <li key={index}>{lang}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Frameworks</h3>
                  <ul style={{ listStyle: 'none' }}>
                    {skills.frameworks.map((framework, index) => (
                      <li key={index}>{framework}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 style={{ marginBottom: '1rem' }}>Tools</h3>
                  <ul style={{ listStyle: 'none' }}>
                    {skills.tools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>
            <motion.div 
              className="brutalist-box"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p style={{ marginBottom: '2rem' }}>Based in Askari 5, Malir Cantt, Karachi. Always open to new opportunities and collaborations.</p>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <a href="mailto:iqbal.msaim@gmail.com" className="button">Email Me</a>
                <a href="https://www.linkedin.com/in/saim-iqbal" className="button">LinkedIn</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
