import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/1.png";
import project2 from "../assets/2.png";
import project3 from "../assets/3.png";
import project4 from "../assets/4.png";
import project6 from "../assets/6.png";
import project7 from "../assets/7.png";

const projects = [
  {
    id: 1,
    title: "Company Website",
    description:
      "Helvete Records, established in 1991, is a premier record label and retail destination dedicated to delivering the most intense and authentic metal music experience.",
    image: project1,
    link: "https://cc2-jcwd2804-dhavi.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "REST API"],
  },
  {
    id: 2,
    title: "Frozen Food Website",
    description:
      "At TriDi Frozen Food, we prioritize offering the highest quality frozen food products for you. Our mission is to provide delicious, convenient, and nutritious options that make meal preparation easier for you and your family.",
    image: project2,
    link: "https://tridi-frozen-food.vercel.app/",
    technologies: ["React.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: 3,
    title: "Kanban Board",
    description:
      "A Kanban board is a visual tool for project management with columns representing stages of work, such as To Do, In Progress, and Done. Each task is represented by a card that moves across columns as progress is made. This board helps teams view the overall work, identify bottlenecks, and improve process efficiency.",
    image: project6,
    link: "https://rakamin-mini-project-eta.vercel.app/",
    technologies: ["React.js", "Tailwind CSS", "TypeScript", "DND-Kit"],
  },
  {
    id: 4,
    title: "Drug Store Website",
    description:
      "Welcome to Dhavi Farma, where your health and comfort are our top priorities. We are a trusted pharmacy offering a wide range of medications, health supplements, and personal care products to meet the health needs of you and your family.",
    image: project3,
    link: "https://dhavi-farma.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript", "REST API"],
  },
  {
    id: 5,
    title: "Filament Admin Dashboard",
    description:
      "Filament is a modern, responsive, and feature-rich admin dashboard template built with Tailwind CSS and React. It provides a clean and professional design that is easy to use and customize.",
    image: project7,
    link: "https://github.com/dhavisiregar/filament-app",
    technologies: ["Filament", "PHP", "Laravel", "MySQL"],
  },
  {
    id: 6,
    title: "Calculator App",
    description:
      "A modern calculator application with a clean interface and smooth animations.",
    image: project4,
    link: "https://calculator-cyan-pi.vercel.app/",
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Weather App",
    description:
      "This application allows you to get up-to-date weather information worldwide with a clean and intuitive interface.",
    image: project5,
    link: "https://weather-app-cyan-seven-46.vercel.app/",
    technologies: ["React.js", "CSS", "JavaScript", "REST API"],
  },
];

const ProjectCard = ({ project, index }) => {
  const handleClick = (e) => {
    e.preventDefault();
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mb-8 flex flex-wrap lg:justify-center">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-1/4"
      >
        <img
          onClick={handleClick}
          src={project.image}
          width={280}
          height={280}
          alt={project.title}
          className="mb-6 rounded relative cursor-pointer transition-transform hover:scale-105"
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-full max-w-xl lg:w-3/4"
      >
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-2 font-semibold relative hover:text-purple-700 transition-colors"
        >
          {project.title}
        </a>
        <p className="mb-4 text-neutral-400 text-justify">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Projects
      </motion.h2>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
