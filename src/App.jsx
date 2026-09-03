import { useState } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { LanguageProvider, useTranslate } from "./i18n/LanguageContext";
import { ThemeProvider } from "./theme/ThemeContext";
import { UI_TEXT } from "./constants";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CommandPalette from "./components/CommandPalette";

const AppContent = () => {
  const t = useTranslate();
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  return (
    <div className="overflow-x-hidden bg-surface text-fg-subtle antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-ink focus:rounded-md"
      >
        {t(UI_TEXT.skipToContent)}
      </a>
      <div className="fixed top-0 -z-0 h-full w-full"></div>

      {/* Navbar is outside container so it spans full width */}
      <Navbar onOpenPalette={() => setIsPaletteOpen(true)} />
      <CommandPalette open={isPaletteOpen} onOpenChange={setIsPaletteOpen} />

      <main id="main-content" className="container mx-auto px-8">
        <Hero />
        <section id="about" aria-label={t(UI_TEXT.sections.about)}>
          <About />
        </section>
        <section id="technologies" aria-label={t(UI_TEXT.sections.technologies)}>
          <Tech />
        </section>
        <section id="experience" aria-label={t(UI_TEXT.sections.experience)}>
          <Experience />
        </section>
        <section id="projects" aria-label={t(UI_TEXT.sections.projects)}>
          <Projects />
        </section>
        <section id="contact" aria-label={t(UI_TEXT.sections.contact)}>
          <Contact />
        </section>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* strict: throws if any component uses `motion.x` instead of `m.x`, so
            we don't silently lose the LazyMotion bundle-size benefit somewhere. */}
        <LazyMotion features={domAnimation} strict>
          <AppContent />
        </LazyMotion>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
