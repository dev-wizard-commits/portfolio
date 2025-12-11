"use client";

import { motion } from "framer-motion";
import { STATISTICS } from "@/constants";
import { slideInFromTop } from "@/lib/motion";

export const Statistics = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-10">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInFromTop}
        className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10"
      >
        Achievements & Impact
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl">
        {STATISTICS.map((stat, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideInFromTop}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0300145e] backdrop-blur-sm border border-[#7042f88b] rounded-lg p-6 text-center hover:border-[#b49bff] transition-all duration-300"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2"
            >
              {stat.number}
            </motion.div>
            <h3 className="text-xl font-semibold text-white mb-1">{stat.label}</h3>
            <p className="text-gray-400 text-sm">{stat.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

