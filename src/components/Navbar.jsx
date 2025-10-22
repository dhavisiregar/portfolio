import logo from "../assets/logo.png";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    const sections = [
      "about",
      "technologies",
      "experience",
      "projects",
      "contact",
    ];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }

    // Calculate scroll progress
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / totalHeight) * 100;
    setScrollProgress(progress);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "About Me" },
    { id: "technologies", label: "Technologies" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact Me" },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/sultan-muhammad-dhavi/",
      icon: <FaLinkedin />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/dhavisiregar",
      icon: <FaGithub />,
      label: "GitHub",
    },
    {
      href: "https://www.instagram.com/dhavisiregar/",
      icon: <FaInstagram />,
      label: "Instagram",
    },
    {
      href: "https://x.com/plagoande",
      icon: <FaSquareXTwitter />,
      label: "Twitter",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm mb-20 flex items-center justify-between py-6">
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-purple-700 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-14 mx-2" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <ul className="flex z-10 items-center gap-8 text-sm relative">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`hover:text-purple-700 transition-colors duration-300 ${
                  activeSection === link.id ? "text-purple-700" : ""
                }`}
                aria-label={`Scroll to ${link.label}`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center z-10 ml-auto">
        <button
          onClick={toggleMenu}
          className="text-2xl focus:outline-none p-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 right-0 w-full bg-black/95 shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center gap-4 py-4">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`hover:text-purple-700 transition-colors duration-300 ${
                      activeSection === link.id ? "text-purple-700" : ""
                    }`}
                    aria-label={`Scroll to ${link.label}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Links */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="z-10 hover:text-purple-700 transition-colors duration-300"
            aria-label={`Visit my ${social.label} profile`}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
