import { Bubbles } from "lucide-react";
import React from "react";
import {
  RiHtml5Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiTailwindCssLine,
} from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const Skills = () => {
  return (
    <div className="flex flex-col justify-around gap-2">
      <div className="flex flex-row justify-center items-center gap-2">
        <div className="border-t-1 border-black border-solid flex-grow" />{" "}
        <Bubbles className="" />
        <h2 className="text-4xl">Skills</h2>
        <hr className="border-t-1 border-black border-solid flex-grow" />{" "}
      </div>
      {/* Frontend */}
      <div className="flex justify-center">
        <h3 className="text-2xl">Frontend</h3>
        <div className="flex flex-row">
          <RiTailwindCssLine className="text-5xl" />
          <RiHtml5Line className="text-5xl" />
          <RiJavascriptLine className="text-5xl" />
          <RiReactjsLine className="text-5xl" />
        </div>
      </div>
      {/* Backend */}
      <div className="flex justify-center">
        <h3 className="text-2xl">Backend</h3>
        <div className="flex flex-row">
          <RiJavascriptLine className="text-5xl" />
          <SiExpress className="text-5xl" />
          <SiMongodb className="text-5xl" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
