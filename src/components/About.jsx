import foto2 from "../assets/foto2.jpeg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="border-b border-neutral-900 pb-4 from-neutral-900/50 to-transparent">
      <h2 className="my-20 text-center text-4xl font-bold">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap items-center">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <motion.img
              src={foto2}
              alt="Profile picture"
              className="rounded-2xl w-[70%] shadow-2xl shadow-neutral-500/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-justify text-lg leading-relaxed text-neutral-300">
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
