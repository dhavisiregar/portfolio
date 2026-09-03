import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { PROJECTS, UI_TEXT } from "../constants";
import { useTranslate } from "../i18n/LanguageContext";
import ProjectModal from "./ProjectModal";

// Manual, not an automated uptime check — see the `status` note above
// `PROJECTS` in constants/index.js for why.
const STATUS_BADGE = {
  live: {
    emoji: "🟢",
    label: UI_TEXT.projects.statusLive,
    className: "border-emerald-500/40 text-emerald-400",
  },
  offline: {
    emoji: "🔴",
    label: UI_TEXT.projects.statusOffline,
    className: "border-red-500/40 text-red-400",
  },
  "n/a": {
    emoji: "⚪",
    label: UI_TEXT.projects.statusNA,
    className: "border-border text-fg-muted",
  },
};

const ProjectCard = ({ project, onOpen, featured }) => {
  const t = useTranslate();
  const handleOpen = () => onOpen(project);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleOpen();
    }
  };
  const badge = STATUS_BADGE[project.status];

  return (
    <m.div
      onClick={handleOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={t(UI_TEXT.projects.viewDetailsAria, project.title)}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5 }}
      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-lg border border-border bg-surface-raised transition-colors hover:border-accent/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
        featured ? "sm:col-span-2 sm:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden bg-surface ${
          featured ? "aspect-[16/9] sm:aspect-auto sm:w-2/5" : "aspect-[4/3]"
        }`}
      >
        <img
          src={project.images[0]}
          loading="lazy"
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {badge && (
          <span
            className={`absolute right-2 top-2 z-10 flex items-center gap-1 rounded-full border bg-surface/80 px-2 py-0.5 text-[11px] font-medium backdrop-blur-sm ${badge.className}`}
          >
            <span aria-hidden="true">{badge.emoji}</span>
            {t(badge.label)}
          </span>
        )}
      </div>

      <div
        className={`relative flex flex-1 flex-col overflow-hidden p-6 ${featured ? "justify-center" : ""}`}
      >
        {featured && (
          <span className="pointer-events-none absolute -right-2 -top-4 select-none font-display text-[120px] italic leading-none text-fg/[0.04]">
            01
          </span>
        )}
        {featured && (
          <span className="mb-3 inline-block w-fit rounded border border-accent/40 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-accent">
            {t(UI_TEXT.projects.currentRoleBadge)}
          </span>
        )}
        <h3
          className={`mb-2 font-semibold text-fg transition-colors group-hover:text-accent ${
            featured ? "text-2xl" : "text-lg"
          }`}
        >
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-fg-muted">
          {t(project.description)}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="rounded border border-border px-2 py-1 text-xs font-medium text-fg-subtle"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </m.div>
  );
};

const Projects = () => {
  const t = useTranslate();
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="border-b border-border pb-4">
      <m.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center font-display text-4xl italic text-fg"
      >
        {t(UI_TEXT.projects.heading)}
      </m.h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpen={setSelectedProject}
            featured={index === 0}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
