import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { SiPostman } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiExpress } from "react-icons/si";

const Tech = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Tech Stack</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-4xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandNextjs className="text-4xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoJavascript className="text-4xl text-[#F0DB4F]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiTypescript className="text-4xl text-[#3178c6]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaCss3Alt className="text-4xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssFill className="text-4xl text-[#06b6d4]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGithub className="text-4xl text-white" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-4xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-4xl text-[#68a063]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandMysql className="text-4xl text-[#00758f]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPrisma className="text-4xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiPostman className="text-4xl text-[#EF5B25]" />
        </div>
      </div>
    </div>
  );
};

export default Tech;
