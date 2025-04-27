import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <motion.div 
        className="portfolio-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>My Portfolio</h1>
        <div className="portfolio-grid">
          <motion.div 
            className="portfolio-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>About Me</h2>
            <p>Welcome to my portfolio! I'm a passionate developer who loves creating amazing web applications.</p>
          </motion.div>
          
          <motion.div 
            className="portfolio-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>Skills</h2>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML/CSS</li>
              <li>Node.js</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="portfolio-card"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2>Projects</h2>
            <p>Check out my projects on GitHub!</p>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub size={24} />
              Visit GitHub
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio; 