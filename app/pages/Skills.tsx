import { Bubbles } from "lucide-react";
import React from "react";
import SkillCard from "@/app/components/SkillCard";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center gap-2">
      <div className="flex flex-row justify-center items-center gap-2 px-5">
        <div className="border-t-1 border-black border-solid flex-grow" />{" "}
        <Bubbles className="" />
        <h2 className="text-4xl">Skills</h2>
        <hr className="border-t-1 border-black border-solid flex-grow" />{" "}
      </div>
      {/* Frontend */}
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-2xl ">Frontend</h3>
        <div className="flex flex-col md:flex-row   gap-4 p-3">
          <SkillCard Icon={FaHtml5} label="Html" />
          <SkillCard Icon={IoLogoCss3} label="Css" />
          <SkillCard Icon={FaReact} label="React" />
          <SkillCard Icon={RiTailwindCssFill} label="Tailwind" />
          <SkillCard Icon={RiNextjsFill} label="Next.js" />
        </div>
      </div>
      {/* Backend */}
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-2xl pt-5">Backend</h3>
        <div className="flex flex-col md:flex-row   gap-4 p-3">
          <SkillCard Icon={SiExpress} label="Express.js"/>
          <SkillCard Icon={TbSql} label="Sql"/>
          <SkillCard Icon={SiMongodb} label="Mongodb"/>
          <SkillCard Icon={SiExpress} label="Express.js"/>
        </div>
      </div>
    </div>
  );
};

export default Skills;
