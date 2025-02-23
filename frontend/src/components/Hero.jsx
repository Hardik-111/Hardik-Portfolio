import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

  const shapeVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: { 
      opacity: 0.4, 
      scale: 1, 
      transition: { 
        duration: 1.5, 
        ease: 'easeInOut', 
        repeat: Infinity, 
        repeatType: 'reverse' 
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch('/api/send-email', {  // Updated for Vercel deployment (merged backend)
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Message sent successfully! You’ll receive a confirmation email.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark',
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to send message. Please try again.', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'dark',
      });
    } finally {
      setFormData({ name: '', email: '', message: '' });
      setIsFormOpen(false);
      setIsSending(false);
    }
  };

  const handleDownloadResume = () => {
    const resumeUrl = '/Hardik_Kumar_Singh_Resume.pdf'; // Path to PDF in public folder, or use 'https://your-domain.com/resume.pdf' for production
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Hardik_Kumar_Singh_Resume.pdf'; // Suggested filename for download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success('Resume downloaded successfully!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gray-50 pt-16 overflow-hidden relative">
      {/* Background Shapes */}
      <motion.div
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        className="absolute right-0 top-1/4 w-64 h-64 md:w-96 md:h-96 bg-teal-400 rounded-full opacity-30 blur-3xl"
      />
      <motion.div
        variants={shapeVariants}
        initial="initial"
        animate="animate"
        className="absolute right-20 bottom-1/4 w-48 h-48 md:w-72 md:h-72 bg-purple-400 rounded-full opacity-30 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between w-full relative z-10">
        {/* Left Side - Text */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl text-center md:text-left"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-800"
          >
            Hi, I'm <span className="bg-gradient-to-r from-teal-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">Hardik Kumar Singh</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-gray-600 mb-8 font-light tracking-wide"
          >
            Crafting innovative web solutions with passion and precision
          </motion.p>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5, type: 'spring', stiffness: 100 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 8px 16px rgba(45, 212, 191, 0.3)', 
                backgroundColor: '#7c3aed' 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsFormOpen(!isFormOpen)}
              className="bg-teal-600 px-8 py-3 rounded-full text-white text-lg font-semibold hover:bg-teal-500 transition-colors shadow-md"
            >
              {isFormOpen ? 'Close Form' : 'Get in Touch'}
            </motion.button>
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5, type: 'spring', stiffness: 100 }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 8px 16px rgba(45, 212, 191, 0.3)', 
                backgroundColor: '#7c3aed' 
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadResume}
              className="bg-purple-600 px-8 py-3 rounded-full text-white text-lg font-semibold hover:bg-purple-500 transition-colors shadow-md"
            >
              Download Resume
            </motion.button>
          </div>

          {/* Contact Form */}
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mt-6 p-6 bg-gray-800 rounded-xl shadow-lg max-w-md mx-auto md:mx-0 border border-teal-600/20"
            >
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">Let’s Connect</h3>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition-all"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={isSending}
                  whileHover={{ scale: 1.05, backgroundColor: '#14b8a6' }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-teal-600 px-6 py-3 rounded-full text-white font-semibold transition-colors shadow-md ${isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-teal-500'}`}
                >
                  {isSending ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
          )}
        </motion.div>

        {/* Right Side - Image with Decorative Elements */}
        <motion.div
          className="mt-12 md:mt-0 relative flex items-center justify-center"
        >
          <motion.img
            initial={{ x: 100, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            src="/pp1.png"
            alt="Profile"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-teal-600/50"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
            whileHover={{ scale: 1.1, rotate: 360 }}
            className="absolute -top-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-purple-600 rounded-full opacity-50 blur-md"
          />
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100px', opacity: 1 }}
            transition={{ delay: 0.7, duration: 1, ease: 'easeOut' }}
            className="absolute bottom-0 right-0 h-1 bg-gradient-to-r from-teal-600 to-purple-600 rounded-full"
          />
        </motion.div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};

export default Hero;