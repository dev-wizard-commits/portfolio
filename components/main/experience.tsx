"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.2)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Professional Experience
      </motion.h1>

      <div className="w-full max-w-5xl space-y-8">
        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={index % 2 === 0 ? slideInFromLeft(0.3) : slideInFromRight(0.3)}
            className="relative bg-[#0300145e] backdrop-blur-sm border border-[#7042f88b] rounded-lg p-6 hover:border-[#b49bff] transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                <p className="text-xl text-[#b49bff] mb-2">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-300 font-medium">{exp.period}</p>
                <p className="text-gray-400 text-sm">{exp.location}</p>
              </div>
            </div>

            <ul className="space-y-2 mb-4">
              {exp.description.map((item, idx) => (
                <li key={idx} className="text-gray-300 flex items-start">
                  <span className="text-[#b49bff] mr-2">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.technologies.map((tech, techIdx) => (
                <span
                  key={techIdx}
                  className="px-3 py-1 bg-[#7042f88b] rounded-full text-sm text-gray-200 border border-[#b49bff]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

