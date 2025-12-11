"use client";

import { motion } from "framer-motion";
import { RxLinkedinLogo, RxGithubLogo } from "react-icons/rx";
import { slideInFromLeft, slideInFromRight } from "@/lib/motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-10"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromLeft(0.2)}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Get In Touch
      </motion.h1>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromLeft(0.3)}
          className="bg-[#0300145e] backdrop-blur-sm border border-[#7042f88b] rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-400 text-sm mb-1">Email</p>
              <a
                href="mailto:milankremic8@gmail.com"
                className="text-[#b49bff] hover:text-cyan-400 transition-colors"
              >
                milankremic8@gmail.com
              </a>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Location</p>
              <p className="text-gray-300">Ugrinovački put 32. deo 52</p>
              <p className="text-gray-300">Beograd, Serbia</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-3">Social Links</p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/milan-kremic-615a4b35a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-[#b49bff] hover:text-cyan-400 transition-colors"
                >
                  <RxLinkedinLogo />
                </a>
                <a
                  href="https://github.com/dev-wizard-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-3xl text-[#b49bff] hover:text-cyan-400 transition-colors"
                >
                  <RxGithubLogo />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideInFromRight(0.3)}
          className="bg-[#0300145e] backdrop-blur-sm border border-[#7042f88b] rounded-lg p-6"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your visions. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>
          <a
            href="mailto:milankremic8@gmail.com"
            className="inline-block py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Send Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

