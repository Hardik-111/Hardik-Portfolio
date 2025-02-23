import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCuttlefish,       
  FaJava,            
  FaPython,         
  FaJs,            
  FaHtml5,        
  FaCss3Alt,     
  FaNodeJs,     
  FaReact,     
  FaCogs,      
  FaCheckSquare, 
  FaEye,        
  FaDatabase,  
  FaBrain,    
  FaGithub,  
  FaCode     
} from 'react-icons/fa';

const skillsData = [
  { name: 'C++', icon: <FaCuttlefish className="w-10 h-10 text-indigo-400" /> },
  { name: 'Java', icon: <FaJava className="w-10 h-10 text-indigo-400" /> },
  { name: 'Python', icon: <FaPython className="w-10 h-10 text-indigo-400" /> },
  { name: 'JavaScript', icon: <FaJs className="w-10 h-10 text-indigo-400" /> },
  { name: 'HTML', icon: <FaHtml5 className="w-10 h-10 text-indigo-400" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-10 h-10 text-indigo-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-10 h-10 text-indigo-400" /> },
  { name: 'React.js', icon: <FaReact className="w-10 h-10 text-indigo-400" /> },
  { name: 'Maven', icon: <FaCogs className="w-10 h-10 text-indigo-400" /> },
  { name: 'JUnit', icon: <FaCheckSquare className="w-10 h-10 text-indigo-400" /> },
  { name: 'Mockito', icon: <FaEye className="w-10 h-10 text-indigo-400" /> },
  { name: 'SQL', icon: <FaDatabase className="w-10 h-10 text-indigo-400" /> },
  { name: 'IntelliJ', icon: <FaBrain className="w-10 h-10 text-indigo-400" /> },
  { name: 'GitHub', icon: <FaGithub className="w-10 h-10 text-indigo-400" /> },
  { name: 'VSCode', icon: <FaCode className="w-10 h-10 text-indigo-400" /> },
];

const certificationsData = [
  { 
    name: 'Cisco Networking Basics', 
    issuer: 'Cisco', 
    link: 'https://www.cisco.com' // Placeholder; replace with actual link
  },
  { 
    name: 'SQL Programming', 
    issuer: 'LinkedIn Learning', 
    link: 'https://www.linkedin.com/learning/sql-programming' // Placeholder; replace with your certificate URL
  },
  { 
    name: 'NoSQL Essential Training', 
    issuer: 'LinkedIn Learning', 
    link: 'https://www.linkedin.com/learning/nosql-essential-training' // Placeholder; replace with your certificate URL
  },
  { 
    name: 'SQL Intermediate', 
    issuer: 'HackerRank', 
    link: 'https://www.hackerrank.com/certificates/your-certificate-id' // Placeholder; replace with your HackerRank certificate URL
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
        >
          Skills & Certifications
        </motion.h2>
        
        {/* Skills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-16">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ scale: 0, opacity: 0, rotate: -10 }}
              whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.5, 
                ease: 'easeOut',
                type: 'spring',
                stiffness: 100 
              }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 10px 20px rgba(129, 140, 248, 0.3)',
                transition: { duration: 0.3 }
              }}
              className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-colors duration-300"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
              >
                {skill.icon}
              </motion.div>
              <span className="mt-4 text-gray-200 text-lg font-medium text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.h3
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-2xl md:text-3xl font-semibold text-center mb-8 text-indigo-400"
        >
          Certifications
        </motion.h3>
        <div className="space-y-6 max-w-3xl mx-auto">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: index * 0.2, 
                duration: 0.8, 
                ease: 'easeOut' 
              }}
              whileHover={{ 
                y: -5, 
                boxShadow: '0 8px 16px rgba(129, 140, 248, 0.2)',
                transition: { duration: 0.3 }
              }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-indigo-400">{cert.name}</h4>
              <p className="text-gray-400 mt-2">{cert.issuer}</p>
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5, color: '#818cf8' }}
                className="text-teal-500 hover:underline text-sm mt-2 inline-block"
              >
                View Certificate →
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;