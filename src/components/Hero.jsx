import { HERO_CONTENT, CONTACT, EXPERIENCES, UI_TEXT } from "../constants";
import { useTranslate } from "../i18n/LanguageContext";
import foto from "../assets/foto.webp";
import { m } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const currentRole = EXPERIENCES[0];

const Hero = () => {
  const t = useTranslate();

  return (
    <div className="relative border-b border-border pb-4 lg:mb-16">
      <div className="relative flex flex-wrap items-end">
        {/* Text side */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <m.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-accent"
            >
              {currentRole?.role}
            </m.span>
            <m.h1
              variants={container(0.2)}
              initial="hidden"
              animate="visible"
              className="pb-7 font-display text-6xl italic leading-[1.05] tracking-tight text-fg lg:text-8xl"
            >
              Sultan Muhammad
              <br />
              Dhavi
            </m.h1>
            <m.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="mb-7 text-sm text-fg-muted"
            >
              at {currentRole?.company} &middot; {CONTACT.address}
            </m.span>
            <m.p
              variants={container(0.8)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-2 text-justify leading-relaxed text-fg-subtle"
            >
              {t(HERO_CONTENT)}
            </m.p>
            <m.div
              variants={container(1.1)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-ink transition-colors hover:bg-accent-hover"
              >
                {t(UI_TEXT.hero.viewProjects)}
              </a>
              <a
                href="/CV.pdf"
                download="Sultan-Muhammad-Dhavi-Resume.pdf"
                aria-label={t(UI_TEXT.hero.downloadCVAria)}
                className="rounded-md border border-border px-6 py-3 text-sm font-semibold text-fg transition-colors hover:bg-surface-raised"
              >
                {t(UI_TEXT.hero.downloadCV)}
              </a>
            </m.div>
          </div>
        </div>

        {/* Image side */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-end">
            <m.img
              src={foto}
              width={800}
              height={1352}
              alt="Sultan Muhammad Dhavi"
              className="w-[60%] max-h-[600px] object-contain object-bottom drop-shadow-2xl"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              whileHover={{ scale: 1.03 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
