import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaPhp } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { SiPrisma } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";

// Add a simple SVG placeholder for Filament
const FilamentIcon = (props) => (
  <svg
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
    width="1em"
    height="1em"
  >
    <circle cx="16" cy="16" r="16" fill="#68a063" />
    <text
      x="16"
      y="21"
      textAnchor="middle"
      fontSize="12"
      fill="#fff"
      fontFamily="Arial"
    >
      F
    </text>
  </svg>
);

const techStack = {
  frontend: [
    { icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
    { icon: TbBrandNextjs, name: "Next.js", color: "text-white" },
    { icon: IoLogoJavascript, name: "JavaScript", color: "text-[#F0DB4F]" },
    { icon: SiTypescript, name: "TypeScript", color: "text-[#3178c6]" },
    { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
    { icon: RiTailwindCssFill, name: "Tailwind CSS", color: "text-[#06b6d4]" },
    { icon: FaLaravel, name: "Laravel", color: "text-[#ff2d20]" },
  ],
  backend: [
    { icon: FaGolang, name: "Go", color: "text-[#00ADD8]" },
    { icon: SiExpress, name: "Express", color: "text-white" },
    { icon: FaNodeJs, name: "Node.js", color: "text-[#68a063]" },
    { icon: FaPhp, name: "PHP", color: "text-[#777BB4]" },
  ],
  database: [
    { icon: TbBrandMysql, name: "MySQL", color: "text-[#00758f]" },
    { icon: SiPrisma, name: "Prisma", color: "text-white" },
  ],
};

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.2 },
  },
});

const Tech = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
      <div className="absolute inset-0" />

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl font-bold bg-clip-text bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500"
      >
        Tech <span className="text-neutral-500">Stack</span>
      </motion.h2>

      {Object.entries(techStack).map(([category, techs]) => (
        <motion.div
          key={category}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center capitalize text-neutral-300">
            {category}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {techs.map(({ icon: Icon, name, color }, index) => (
              <motion.div
                key={name}
                variants={iconVariants(2 + index * 0.5)}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="group relative"
              >
                <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-900/50 backdrop-blur-sm">
                  <Icon className={`text-4xl ${color}`} />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-neutral-800 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap">
                    {name}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Tech;
