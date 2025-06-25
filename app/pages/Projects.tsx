import { Gavel } from "lucide-react";
import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center gap-2 px-5">
        <div className="border-t-1 border-black border-solid flex-grow" />{" "}
        <Gavel className="" />
        <h2 className="text-4xl">Projects</h2>
        <hr className="border-t-1 border-black border-solid flex-grow" />{" "}
      </div>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center py-13">

          <p>under Construction</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
