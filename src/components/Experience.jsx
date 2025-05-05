import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="border-b border-neutral-900 pb-16">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Experience
      </motion.h2>

      <div className="space-y-16 relative">
        {EXPERIENCES.map((experience, index) => (
          <article
            key={index}
            className="flex flex-col lg:flex-row lg:justify-center gap-8 relative group"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4 text-center lg:text-right relative z-10"
            >
              <time className="text-sm text-neutral-400 font-medium">
                {experience.year}
              </time>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-3/4 max-w-3xl relative z-10"
            >
              <div className="bg-neutral-800/50 p-6 rounded-lg hover:bg-neutral-800/70 transition-all duration-300">
                <h3 className="text-xl font-medium group-hover:text-purple-400 transition-colors duration-300">
                  {experience.role}
                  <span className="ml-2 text-sm text-purple-100">
                    @ {experience.company}
                  </span>
                </h3>
                <p className="mt-4 text-neutral-400 text-justify leading-relaxed">
                  {experience.description}
                </p>
              </div>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
