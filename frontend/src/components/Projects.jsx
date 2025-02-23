import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: 'OptiVision',
    description: [
      'Developed real-time object detection with TensorFlow’s Centernet ResNet 101 model, achieving 32.4 mAP and 34ms inference time.',
      'Integrated RTSP stream processing for live video feeds and multi-object tracking.',
      'Generated log files with detection data (object count, timestamps) for analysis.',
      'Built a chatbot using detection logs and TF-IDF with cosine similarity for user queries.',
    ],
    tech: ['TensorFlow', 'OpenCV', 'Jetson Nano', 'Python'],
    date: 'Jan 2024',
    link: 'https://github.com/Hardik-111/OptiVision',
  },
  {
    title: 'MonageX',
    description: [
      'Implemented secure JWT-based authentication with login/logout for enhanced security.',
      'Enabled real-time expense tracking and categorization, improving accuracy and reducing manual errors by 20%.',
      'Integrated group collaboration features: friend requests, group creation, and expense splitting.',
      'Developed a responsive, Material-UI-based front end, ensuring seamless user experience across devices.',
    ],
    tech: ['MongoDB', 'ExpressJS', 'ReactJS', 'NodeJS', 'Material-UI'],
    date: 'Nov 2023',
    link: 'https://github.com/Hardik-111/Monagex',
  },
  {
    title: 'NewsX',
    description: [
      'Designed a news app with a dark/light mode toggle for personalized user experience.',
      'Implemented infinite scrolling for seamless navigation across categories.',
      'Improved usability with a loading spinner, reducing perceived wait time by 30% and boosting user satisfaction.',
      'Organized news into sections: Home, Business, Sports, Entertainment, Health, Science, Technology for easy access.',
    ],
    tech: ['ReactJS', 'HTML', 'CSS'],
    date: 'Mar 2023',
    link: 'https://github.com/Hardik-111/NewsX',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-teal-600 scrollbar-track-gray-200">
          <div className="flex space-x-8 pb-6 w-max">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8, ease: 'easeOut' }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: '0 10px 20px rgba(45, 212, 191, 0.2)',
                  transition: { duration: 0.3 }
                }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:bg-gray-100 transition-colors duration-300 w-[320px] md:w-[400px] flex-shrink-0"
              >
                {/* Navy Blue-to-Black Banner */}
                <motion.div
                  className="w-full h-48 bg-gradient-to-b from-navy-800 to-black flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-center px-4 drop-shadow-md">
                    {project.title}
                  </h3>
                </motion.div>
                {/* Project Details */}
                <div className="p-6">
                  <ul className="text-gray-600 text-sm md:text-base mb-4 list-disc list-inside">
                    {project.description.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="bg-teal-600 text-white px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5, color: '#7c3aed' }}
                      className="text-teal-600 hover:underline text-lg"
                    >
                      View Project →
                    </motion.a>
                    <span className="text-gray-600 text-sm">{project.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;