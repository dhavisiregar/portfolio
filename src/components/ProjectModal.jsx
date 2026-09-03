import { useEffect, useRef, useState } from "react";
import { m } from "framer-motion";
import { FaTimes, FaGithub } from "react-icons/fa";
import { UI_TEXT } from "../constants";
import { useTranslate } from "../i18n/LanguageContext";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

const ProjectModal = ({ project, onClose }) => {
  const t = useTranslate();
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  // Lock body scroll while the modal is open.
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Focus the close button on open, and return focus to whatever opened the
  // modal (the project card) once it closes.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeButtonRef.current?.focus();
    return () => {
      previouslyFocused?.focus?.();
    };
  }, []);

  // Escape to close, Tab/Shift+Tab trapped within the dialog.
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const images = project.images?.length ? project.images : [];
  const hasCarousel = images.length > 1;

  const showPrevImage = () =>
    setActiveImage((i) => (i - 1 + images.length) % images.length);
  const showNextImage = () => setActiveImage((i) => (i + 1) % images.length);

  return (
    <>
      <m.div
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Centering wrapper: pointer-events-none so clicks outside the panel
          fall through to the backdrop above and close the modal. */}
      <div className="fixed inset-0 z-[101] flex items-end justify-center pointer-events-none sm:items-center sm:p-4">
        <m.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          aria-describedby="project-modal-description"
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 80 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="pointer-events-auto relative max-h-[92vh] w-full overflow-y-auto rounded-t-2xl border border-border bg-surface-raised shadow-2xl sm:max-h-[85vh] sm:max-w-2xl sm:rounded-2xl"
        >
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label={t(UI_TEXT.modal.closeAria)}
            className="absolute right-4 top-4 z-10 rounded-full bg-surface/80 p-2 text-fg-subtle transition-colors hover:bg-surface hover:text-fg"
          >
            <FaTimes />
          </button>

          {images.length > 0 && (
            <div className="relative aspect-video bg-surface">
              <img
                src={images[activeImage]}
                alt={`${project.title} ${t(UI_TEXT.modal.screenshotAlt)} ${
                  activeImage + 1
                }`}
                className="h-full w-full rounded-t-2xl object-cover"
              />
              {hasCarousel && (
                <>
                  <button
                    onClick={showPrevImage}
                    aria-label={t(UI_TEXT.modal.prevScreenshotAria)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  >
                    ‹
                  </button>
                  <button
                    onClick={showNextImage}
                    aria-label={t(UI_TEXT.modal.nextScreenshotAria)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  >
                    ›
                  </button>
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        aria-label={t(
                          UI_TEXT.modal.goToScreenshotAria,
                          i + 1
                        )}
                        aria-current={i === activeImage}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          i === activeImage ? "bg-white" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="space-y-6 p-6">
            <h2
              id="project-modal-title"
              className="text-2xl font-semibold text-fg"
            >
              {project.title}
            </h2>

            <p
              id="project-modal-description"
              className="text-justify leading-relaxed text-fg-subtle"
            >
              {t(project.longDescription) || t(project.description)}
            </p>

            {project.problemStatement && (
              <section>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
                  {t(UI_TEXT.modal.problem)}
                </h3>
                <p className="text-justify text-fg-muted">
                  {t(project.problemStatement)}
                </p>
              </section>
            )}

            {project.challenges && (
              <section>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
                  {t(UI_TEXT.modal.challenges)}
                </h3>
                <p className="text-justify text-fg-muted">
                  {t(project.challenges)}
                </p>
              </section>
            )}

            <section>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-accent">
                {t(UI_TEXT.modal.techStack)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-border px-3 py-1 text-sm font-medium text-fg-subtle"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
              >
                {t(UI_TEXT.modal.liveDemo)}
              </a>
              {project.repoLink ? (
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md border border-border px-4 py-2 text-sm font-medium text-fg-subtle transition-colors hover:bg-surface"
                >
                  <FaGithub /> {t(UI_TEXT.modal.githubRepo)}
                </a>
              ) : (
                <span className="self-center text-sm italic text-fg-muted">
                  {t(UI_TEXT.modal.repoNotPublic)}
                </span>
              )}
            </div>
          </div>
        </m.div>
      </div>
    </>
  );
};

export default ProjectModal;
