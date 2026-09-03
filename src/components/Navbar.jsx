import { images } from "../assets";
import { UI_TEXT, SOCIAL_LINKS } from "../constants";
import { useLanguage, useTranslate } from "../i18n/LanguageContext";
import { useTheme } from "../theme/ThemeContext";
import { FaSearch, FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";

const Navbar = ({ onOpenPalette }) => {
  const t = useTranslate();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

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

    // Show scroll-to-top button after scrolling 300px
    setShowScrollTop(window.scrollY > 300);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: t(UI_TEXT.nav.about) },
    { id: "technologies", label: t(UI_TEXT.nav.technologies) },
    { id: "experience", label: t(UI_TEXT.nav.experience) },
    { id: "projects", label: t(UI_TEXT.nav.projects) },
    { id: "contact", label: t(UI_TEXT.nav.contact) },
  ];

  return (
    <>
      {/* Fixed full-width navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-surface/40 flex items-center justify-between px-8">
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-1 bg-accent transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="flex flex-shrink-0 items-center gap-3">
          <img
            src={images["logo.webp"]}
            width={128}
            height={130}
            alt="Sultan Muhammad Dhavi - Portfolio"
            className="w-14 mx-2"
          />
          <button
            onClick={toggleLanguage}
            aria-label={t(UI_TEXT.nav.languageToggleAria)}
            className="flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs font-semibold transition-colors hover:border-accent/50"
          >
            <span className={language === "id" ? "text-accent" : "text-fg-muted"}>
              ID
            </span>
            <span className="text-fg-muted">/</span>
            <span className={language === "en" ? "text-accent" : "text-fg-muted"}>
              EN
            </span>
          </button>
          <button
            onClick={toggleTheme}
            aria-label={t(
              UI_TEXT.nav.themeToggleAria,
              theme === "dark"
                ? t(UI_TEXT.nav.themeLight)
                : t(UI_TEXT.nav.themeDark)
            )}
            className="flex items-center rounded-full border border-border p-1.5 text-xs text-fg-muted transition-colors hover:border-accent/50 hover:text-accent"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={onOpenPalette}
            aria-label={t(UI_TEXT.commandPalette.openAria)}
            className="hidden items-center gap-1.5 rounded-full border border-border px-2.5 py-1 text-xs font-semibold text-fg-muted transition-colors hover:border-accent/50 sm:flex"
          >
            <FaSearch className="text-[10px]" />
            <span>⌘K</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <ul className="flex z-10 items-center gap-8 text-sm relative">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className={`hover:text-accent transition-colors duration-300 ${
                    activeSection === link.id ? "text-accent" : ""
                  }`}
                  aria-label={t(UI_TEXT.nav.scrollToAria, link.label)}
                  aria-current={activeSection === link.id ? "true" : undefined}
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
            aria-label={
              isOpen ? t(UI_TEXT.nav.closeMenu) : t(UI_TEXT.nav.openMenu)
            }
            aria-expanded={isOpen}
          >
            {isOpen ? "✖️" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 right-0 w-full bg-surface/95 shadow-lg md:hidden"
            >
              <ul className="flex flex-col items-center gap-4 py-4">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className={`hover:text-accent transition-colors duration-300 ${
                        activeSection === link.id ? "text-accent" : ""
                      }`}
                      aria-label={t(UI_TEXT.nav.scrollToAria, link.label)}
                      aria-current={activeSection === link.id ? "true" : undefined}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </m.div>
          )}
        </AnimatePresence>

        {/* Social Links */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="z-10 hover:text-accent transition-colors duration-300"
              aria-label={t(UI_TEXT.nav.visitProfileAria, social.label)}
            >
              <social.icon />
            </a>
          ))}
        </div>
      </nav>

      {/* Spacer so content doesn't hide under fixed navbar */}
      <div className="h-24" />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <m.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-accent hover:bg-accent-hover text-accent-ink rounded-full shadow-lg flex items-center justify-center text-xl transition-colors duration-300"
            aria-label={t(UI_TEXT.nav.scrollToTopAria)}
          >
            ↑
          </m.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
