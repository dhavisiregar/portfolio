import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/1.png";
import project2 from "../assets/2.png";
import project3 from "../assets/8.png";
import project4 from "../assets/4.png";
import project6 from "../assets/6.png";
import project5 from "../assets/5.png";
import project7 from "../assets/7.png";
import project8 from "../assets/9.png";
import project9 from "../assets/10.png";
import project10 from "../assets/11.png";
import project11 from "../assets/12.png";

const projects = [
  {
    id: 1,
    title: "DuitFlow",
    description:
      "DuitFlow is a simple and intuitive app to help users easily track their income and expenses in one place, making it easier to understand spending habits and manage personal finances more effectively.",
    image: project11,
    link: "https://expense-manager-duitflow.vercel.app/",
    technologies: ["Next.js", "Golang", "PostgreSQL", "Supabase"],
  },
  {
    id: 2,
    title: "WA Invoice — Invoice & Pembayaran untuk UMKM",
    description:
      "Built WA Invoice to solve manual bookkeeping for Indonesian small businesses — create professional invoices in seconds, share directly via WhatsApp, and track payments in real-time. Deployed to production with a freemium monetization model.",
    image: project10,
    link: "https://wa-invoice.vercel.app/",
    technologies: ["Next.js", "Golang", "PostgreSQL", "Supabase"],
  },
  {
    id: 3,
    title: "Redline Gokart Booking Web App",
    description:
      "Redline Gokart was running on manual WhatsApp bookings — so I built a full online booking system from scratch. The app features real-time slot scheduling, instant WhatsApp notifications, and weekday/weekend dynamic pricing.",
    image: project3,
    link: "https://redlinegokart.vercel.app/",
    technologies: ["React.js", "Golang", "MySQL", "Docker", "Fonnte API"],
  },
  {
    id: 4,
    title: "Split It",
    description:
      "A smart bill-splitting web app that uses AI vision to scan receipts and automatically extract items, tax, and service charge — then splits the total per person and shares the breakdown via WhatsApp.",
    image: project8,
    link: "https://split-bill-snowy.vercel.app/",
    technologies: ["React.js", "GROQ AI", "Tailwind"],
  },
  {
    id: 5,
    title: "Masak Apa?",
    description:
      "Masak Apa? lets you input ingredients you have at home and instantly finds matching Indonesian recipes — with match percentage, missing ingredients, and step-by-step cooking instructions.",
    image: project2,
    link: "https://maumasak.vercel.app/",
    technologies: ["React.js", "Golang", "GROQ AI", "MySQL"],
  },
  {
    id: 6,
    title: "Calorie Scanner",
    description:
      "Ever wondered how many calories are in that plate of nasi goreng? Just snap a photo and find out. Calorie Scanner uses AI to instantly estimate the nutrition info of any food — no manual logging, no guessing.",
    image: project9,
    link: "https://caloriescanner.vercel.app/",
    technologies: ["React.js", "GROQ AI", "Tailwind"],
  },
  {
    id: 7,
    title: "Company Website",
    description:
      "Helvete Records, established in 1991, is a premier record label and retail destination dedicated to delivering the most intense and authentic metal music experience.",
    image: project1,
    link: "https://cc2-jcwd2804-dhavi.vercel.app/",
    technologies: ["Next.js", "Tailwind", "TypeScript"],
  },
  {
    id: 8,
    title: "Kanban Board",
    description:
      "A Kanban board is a visual tool for project management with columns representing stages of work, such as To Do, In Progress, and Done. Each task is represented by a card that moves across columns as progress is made. This board helps teams view the overall work, identify bottlenecks, and improve process efficiency.",
    image: project6,
    link: "https://rakamin-mini-project-eta.vercel.app/",
    technologies: ["React.js", "Tailwind", "TypeScript", "DND-Kit"],
  },
  {
    id: 9,
    title: "Filament Admin Dashboard",
    description:
      "Filament is a modern, responsive, and feature-rich admin dashboard template built with Tailwind CSS and React. It provides a clean and professional design that is easy to use and customize.",
    image: project7,
    link: "https://github.com/dhavisiregar/filament-app",
    technologies: ["FilamentPHP", "PHP", "Laravel", "MySQL"],
  },
  {
    id: 10,
    title: "Calculator App",
    description:
      "A modern calculator application with a clean interface and smooth animations.",
    image: project4,
    link: "https://calculator-cyan-pi.vercel.app/",
    technologies: ["React.js", "Tailwind", "JavaScript"],
  },
  {
    id: 11,
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
