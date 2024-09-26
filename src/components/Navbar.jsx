import logo from "../assets/logo.png";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 relative">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-10 mx-2" />
      </div>
      <div className="hidden md:flex">
        <ul className="flex z-10 items-center gap-8 text-sm relative">
          <li>
            <a href="#about" className="hover:text-purple-700">
              About Me
            </a>
          </li>
          <li>
            <a href="#technologies" className="hover:text-purple-700">
              Technologies
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-purple-700">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-700">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-700">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="md:hidden flex items-center z-10 ml-auto">
        <button onClick={toggleMenu} className="text-2xl focus:outline-none">
          {isOpen ? "✖️" : "☰"} {/* Hamburger icon */}
        </button>
      </div>
      <div
        className={`absolute top-16 right-0 w-full bg-black shadow-lg md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-4">
          <li>
            <a
              href="#about"
              className="hover:text-purple-700"
              onClick={toggleMenu}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              className="hover:text-purple-700"
              onClick={toggleMenu}
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-purple-700"
              onClick={toggleMenu}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-purple-700"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-purple-700"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sultan-muhammad-dhavi/"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 hover:text-purple-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/dhavisiregar"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 hover:text-purple-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/dhavisiregar/"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 hover:text-purple-700"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/siregardhavi"
          target="_blank"
          rel="noopener noreferrer"
          className="z-10 hover:text-purple-700"
        >
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
