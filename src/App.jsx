import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-gradient-to-r from-black via-slate-900 to-black text-neutral-300 antialiased">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-purple-700 focus:text-white focus:rounded-md"
      >
        Skip to main content
      </a>
      <div className="fixed top-0 -z-0 h-full w-full"></div>

      {/* Navbar is outside container so it spans full width */}
      <Navbar />

      <main id="main-content" className="container mx-auto px-8">
        <Hero />
        <section id="about" aria-label="About Me">
          <About />
        </section>
        <section id="technologies" aria-label="Technologies">
          <Tech />
        </section>
        <section id="experience" aria-label="Experience">
          <Experience />
        </section>
        <section id="projects" aria-label="Projects">
          <Projects />
        </section>
        <section id="contact" aria-label="Contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
