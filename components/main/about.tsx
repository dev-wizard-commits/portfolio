"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/constants";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.2)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        About Me
      </motion.h1>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.3)}
          className="bg-[#0300145e] backdrop-blur-sm border border-[#7042f88b] rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Professional Summary</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            I am a skilled Full Stack Developer with over 10 years of experience in building 
            web applications, including SaaS, CRM, e-commerce, and Fintech platforms, primarily 
            using JavaScript and PHP. I excel in both frontend and back-end development, making 
            me effective at contributing to any part of the development process.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I take pride in my ability to solve problems creatively and consistently strive for 
            the highest quality in every project I undertake. My goal is to deliver exceptional 
            results that meet and exceed expectations.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.3)}
          className="bg-[#0300145e] backdrop-blur-sm border border-[#7042f88b] rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-xl text-[#b49bff] font-semibold">{EDUCATION.degree}</h3>
              <p className="text-gray-300">{EDUCATION.university}</p>
            </div>
            <div className="text-gray-400">
              <p>{EDUCATION.period}</p>
              <p>{EDUCATION.location}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-bold text-white mb-3">Key Strengths</h3>
            <ul className="space-y-2">
              {[
                "Problem-solving & Creative Thinking",
                "Full Stack Development Expertise",
                "Performance Optimization",
                "Code Quality & Best Practices",
                "Team Leadership & Collaboration",
                "Agile/Scrum Methodologies",
              ].map((strength, idx) => (
                <li key={idx} className="text-gray-300 flex items-center">
                  <span className="text-[#b49bff] mr-2">✓</span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

