import React from "react";
import project1 from "../assets/1.png";
import project2 from "../assets/2.png";
import project3 from "../assets/3.png";
import project4 from "../assets/4.png";
import project5 from "../assets/5.png";
import project6 from "../assets/6.png";
import { motion } from "framer-motion";

const Projects = () => {
  const handleClick1 = () => {
    window.location.href = "https://cc2-jcwd2804-dhavi.vercel.app/";
  };
  const handleClick2 = () => {
    window.location.href = "https://tridi-frozen-food.vercel.app/";
  };
  const handleClick3 = () => {
    window.location.href = "https://dhavi-farma.vercel.app/";
  };
  const handleClick4 = () => {
    window.location.href = "https://calculator-cyan-pi.vercel.app/";
  };
  const handleClick5 = () => {
    window.location.href = "https://weather-app-cyan-seven-46.vercel.app/";
  };
  const handleClick6 = () => {
    window.location.href = "https://rakamin-mini-project-eta.vercel.app/";
  };

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              onClick={handleClick1}
              src={project1}
              width={280}
              height={280}
              alt="Project 1"
              className="mb-6 rounded relative cursor-pointer"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a
              href="https://cc2-jcwd2804-dhavi.vercel.app/"
              target="_blank"
              className="mb-2 font-semibold relative hover:text-purple-700"
            >
              Company Website
            </a>
            <p className="mb-4 text-neutral-400 text-justify">
              Helvete Records, established in 1991, is a premier record label
              and retail destination dedicated to delivering the most intense
              and authentic metal music experience.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              Next.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              Tailwind CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              TypeScript
            </span>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              onClick={handleClick2}
              src={project2}
              width={280}
              height={280}
              alt="Project 2"
              className="mb-6 rounded relative cursor-pointer"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a
              href="https://tridi-frozen-food.vercel.app/"
              target="_blank"
              className="mb-2 z-50 font-semibold relative hover:text-purple-700"
            >
              Frozen Food Website
            </a>
            <p className="mb-4 text-neutral-400 text-justify">
              At TriDi Frozen Food, we prioritize offering the highest quality
              frozen food products for you. Our mission is to provide delicious,
              convenient, and nutritious options that make meal preparation
              easier for you and your family.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              Tailwind CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              TypeScript
            </span>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              onClick={handleClick6}
              src={project6}
              width={280}
              height={280}
              alt="Project 6"
              className="mb-6 rounded relative cursor-pointer"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a
              href="https://rakamin-mini-project-eta.vercel.app/"
              target="_blank"
              className="mb-2 font-semibold relative hover:text-purple-700"
            >
              Kanban Board
            </a>
            <p className="mb-4 text-neutral-400 text-justify">
              A Kanban board is a visual tool for project management with
              columns representing stages of work, such as To Do, In Progress,
              and Done. Each task is represented by a card that moves across
              columns as progress is made. This board helps teams view the
              overall work, identify bottlenecks, and improve process
              efficiency.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              Tailwind CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              TypeScript
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              DND-Kit
            </span>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              onClick={handleClick3}
              src={project3}
              width={280}
              height={280}
              alt="Project 3"
              className="mb-6 rounded relative cursor-pointer"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a
              href="https://dhavi-farma.vercel.app/"
              target="_blank"
              className="mb-2 z-50 font-semibold relative hover:text-purple-700"
            >
              Drug Store Website
            </a>
            <p className="mb-4 text-neutral-400 text-justify">
              Welcome to Dhavi Farma, where your health and comfort are our top
              priorities. We are a trusted pharmacy offering a wide range of
              medications, health supplements, and personal care products to
              meet the health needs of you and your family.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              Next.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              Tailwind CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              TypeScript
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              REST API
            </span>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              onClick={handleClick4}
              src={project4}
              width={280}
              height={280}
              alt="Project 4"
              className="mb-6 rounded relative cursor-pointer"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a
              href="https://calculator-cyan-pi.vercel.app/"
              target="_blank"
              className="mb-2 z-50 font-semibold relative hover:text-purple-700"
            >
              Calculator App
            </a>
            <p className="mb-4 text-neutral-400 text-justify">
              It's a calculator!
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              Tailwind CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              JavaScript
            </span>
          </motion.div>
        </div>
      </div>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4"
          >
            <img
              onClick={handleClick5}
              src={project5}
              width={280}
              height={280}
              alt="Project 5"
              className="mb-6 rounded relative cursor-pointer"
            />
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4"
          >
            <a
              href="https://weather-app-cyan-seven-46.vercel.app/"
              target="_blank"
              className="mb-2 z-50 font-semibold relative hover:text-purple-700"
            >
              Weather App
            </a>
            <p className="mb-4 text-neutral-400 text-justify">
              This application allows you to get up-to-date weather information
              worldwide with a clean and intuitive interface.
            </p>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              React.js
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              CSS
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              JavaScript
            </span>
            <span className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">
              REST API
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
