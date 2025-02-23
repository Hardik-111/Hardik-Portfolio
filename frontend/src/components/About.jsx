import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-100 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
          >
            <img
              src="/pp2.png"
              alt="Hardik Kumar Singh"
              className="w-full h-full rounded-full object-cover shadow-xl border-4 border-teal-600/50"
            />
          </motion.div>
          {/* Bio */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1"
          >
            <p className="text-gray-100 text-lg leading-relaxed">
              I'm a final-year B.Tech student in Computer Science at MNNIT,
              Prayagraj, with strong skills in development, DSA, and system
              design. Proficient in C, C++, Java, and Python, I specialize in
              optimizing algorithms, networking, OOP, DBMS, and OS. Beyond tech,
              I'm an avid cricket player who values teamwork and continuous
              learning.
            </p>
            <p className="text-gray-100 text-lg mt-4">
              Outside of coding, I enjoy exploring new technologies,
              contributing to open-source projects, and staying updated with the
              latest trends in web development and AI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
