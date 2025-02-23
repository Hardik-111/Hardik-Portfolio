import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    title: "Java Backend Intern",
    company: "Grid Dynamics",
    date: "Jan 2025 - Present",
    description:
      "Working as a Java Backend Intern at Grid Dynamics’ Hyderabad tech center, contributing to backend development for digital transformation projects using Java, Spring Boot, and cloud solutions. Grid Dynamics, headquartered in the US, launched its India operations in Hyderabad in 2022.",
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    institution:
      "Motilal Nehru National Institute of Technology (MNNIT), Allahabad",
    date: "Dec 2021 - May 2025",
    description:
      "Pursuing B.Tech with a CPI of 8.21 (till 7th sem), specializing in Computer Science and Engineering.",
  },
  {
    title: "Class XII (CBSE)",
    institution: "G.N. National Public School",
    date: "Apr 2021",
    description:
      "Completed Class XII with a percentage of 95.4 under the Central Board of Secondary Education (CBSE)",
  },
  {
    title: "Class X (ICSE)",
    institution: "Little Flower School",
    date: "Apr 2019",
    description:
      "Completed Class X with a percentage of 96.4 under the Indian Certificate of Secondary Education (ICSE)",
  }
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-20 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent"
        >
          Timeline
        </motion.h2>
        <div className="relative">
          {timelineData.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              className={`mb-12 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center`}
            >
              {/* Timeline Dot (Green) */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full z-10"></div>
              {/* Content (Card) */}
              <div className="w-full md:w-5/12 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-1">
                  {item.company || item.institution}
                </p>
                <p className="text-teal-600 mt-1 text-sm font-medium">
                  {item.date}
                </p>
                <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
              </div>
              {/* Connector Line (Continuous but stops at last item) */}
              <div
                className="hidden md:block absolute w-0.5 bg-gray-300"
                style={{
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: "0",
                  bottom: index === timelineData.length - 1 ? "0" : "auto", // Stops at last item
                  height: index === timelineData.length - 1 ? "50%" : "100%", // Shortens for last item
                }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
