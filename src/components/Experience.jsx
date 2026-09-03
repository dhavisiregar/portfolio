import { EXPERIENCES, UI_TEXT } from "../constants";
import { useTranslate } from "../i18n/LanguageContext";
import { m } from "framer-motion";

const Experience = () => {
  const t = useTranslate();

  return (
    <section className="border-b border-border pb-16">
      <m.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="my-20 text-center font-display text-4xl italic text-fg"
      >
        {t(UI_TEXT.experience.heading)}
      </m.h2>

      <div className="space-y-16 relative">
        {EXPERIENCES.map((experience, index) => (
          <article
            key={index}
            className="flex flex-col lg:flex-row lg:justify-center gap-8 relative group"
          >
            <m.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/4 text-center lg:text-right relative z-10"
            >
              <time className="text-sm text-fg-muted font-medium">
                {t(experience.year)}
              </time>
            </m.div>

            <m.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full lg:w-3/4 max-w-3xl relative z-10"
            >
              <div className="bg-surface-raised border border-border p-6 rounded-lg hover:border-accent/40 transition-all duration-300">
                <h3 className="text-xl font-medium group-hover:text-accent transition-colors duration-300">
                  {experience.role}
                  <span className="ml-2 text-sm text-accent">
                    @ {experience.company}
                  </span>
                </h3>
                <p className="mt-4 text-fg-muted text-justify leading-relaxed">
                  {t(experience.description)}
                </p>
              </div>
            </m.div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
