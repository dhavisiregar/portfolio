import { HERO_CONTENT } from "../constants";
import foto from "../assets/foto.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="relative border-b border-neutral-900 pb-4 lg:mb-16">
      <div className="relative flex flex-wrap items-end">
        {/* Text side */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sultan Muhammad Dhavi
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Back End Developer at CBNCLoud
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Image side */}
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-end">
            <motion.img
              src={foto}
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
