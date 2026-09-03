import foto2 from "../assets/foto2.webp";
import { ABOUT_TEXT, UI_TEXT } from "../constants";
import { useTranslate } from "../i18n/LanguageContext";
import { m } from "framer-motion";

const About = () => {
  const t = useTranslate();

  return (
    <section className="border-b border-border pb-4">
      <h2 className="my-20 text-center font-display text-4xl italic text-fg">
        {t(UI_TEXT.about.heading)}{" "}
        <span className="text-fg-muted">
          {t(UI_TEXT.about.headingHighlight)}
        </span>
      </h2>
      <div className="flex flex-wrap items-center">
        <m.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <m.img
              src={foto2}
              width={900}
              height={1200}
              alt="Profile picture"
              className="rounded-2xl w-[70%] shadow-2xl shadow-black/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </m.div>
        <m.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-justify text-lg leading-relaxed text-fg-subtle">
              {t(ABOUT_TEXT)}
            </p>
          </div>
        </m.div>
      </div>
    </section>
  );
};

export default About;
