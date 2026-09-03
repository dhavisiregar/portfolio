import { m } from "framer-motion";
import { TECH_STACK } from "../constants";

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
    <div className="border-b border-border pb-24 relative overflow-hidden">
      <div className="absolute inset-0" />

      <m.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center font-display text-4xl italic text-fg"
      >
        Tech <span className="text-fg-muted">Stack</span>
      </m.h2>

      {Object.entries(TECH_STACK).map(([category, techs]) => (
        <m.div
          key={category}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center capitalize text-fg-subtle">
            {category}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {techs.map(({ icon: Icon, name, color }, index) => (
              <m.div
                key={name}
                variants={iconVariants(2 + index * 0.5)}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="group relative"
              >
                <div className="rounded-2xl border border-border p-4 bg-surface-raised backdrop-blur-sm">
                  <Icon className={`text-4xl ${color}`} />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="bg-surface-raised border border-border text-fg px-3 py-1 rounded-md text-sm whitespace-nowrap">
                    {name}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </m.div>
      ))}
    </div>
  );
};

export default Tech;
