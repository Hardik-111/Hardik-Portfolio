import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Hardik-111' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/hardik-kumar-singh/' },
  ];

  return (
    <footer className="py-12 bg-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Contact Info */}
          <div>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-xl md:text-2xl font-semibold text-indigo-400 mb-4"
            >
              Contact
            </motion.h3>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-3 text-gray-300 mb-3"
            >
              <FaEnvelope className="w-6 h-6 text-indigo-400" />
              <span className="text-lg">ihardik.002@gmail.com</span>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-3 text-gray-300"
            >
              <FaPhone className="w-6 h-6 text-indigo-400" />
              <span className="text-lg">+91-9569646737</span>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-xl md:text-2xl font-semibold text-indigo-400 mb-4"
            >
              Follow Me
            </motion.h3>
            <div className="flex gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index + 2), duration: 0.6 }}
                  whileHover={{ scale: 1.1, color: '#818cf8', rotate: 5 }}
                  className="text-gray-300 text-lg hover:text-indigo-400 transition-colors"
                >
                  {social.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-xl md:text-2xl font-semibold text-indigo-400 mb-4"
            >
              Quick Links
            </motion.h3>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Projects'].map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * (index + 2), duration: 0.6 }}
                  whileHover={{ x: 5, color: '#818cf8' }}
                  className="text-gray-300 text-lg hover:text-indigo-400 transition-colors"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center text-gray-400 mt-8 text-lg"
        >
          © {new Date().getFullYear()} Hardik Kumar Singh. All rights reserved.
        </motion.p>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5, type: 'spring', stiffness: 100 }}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, boxShadow: '0 8px 16px rgba(129, 140, 248, 0.3)' }}
        whileTap={{ scale: 0.95 }}
        className="absolute bottom-6 right-6 bg-indigo-600 p-3 rounded-full shadow-lg hover:bg-indigo-500 transition-colors"
      >
        <FaArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;