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
      <div className="fixed top-0 -z-0 h-full w-full"></div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App;
