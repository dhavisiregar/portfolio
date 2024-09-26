import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="w-10 mx-2" />
      </div>
      <div>
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
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/sultan-muhammad-dhavi/"
          target="_blank"
          className="z-10 hover:text-purple-700"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/dhavisiregar"
          target="_blank"
          className="z-10 hover:text-purple-700"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/dhavisiregar/"
          target="_blank"
          className="z-10 hover:text-purple-700"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/siregardhavi"
          target="_blank"
          className="z-10 hover:text-purple-700"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
