import { NotepadText } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <div className="">
      <div className="flex flex-row justify-center items-center gap-2 px-5">
        <div className="border-t-1 border-black border-solid flex-grow" />{" "}
        <NotepadText className="" />
        <h2 className="text-4xl">Resume</h2>
        <hr className="border-t-1 border-black border-solid flex-grow" />{" "}
      </div>
      <div className="flex md:flex-row flex-col justify-center items-center gap-5 p-5">
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-3xl font-semibold">Download My CV Now </h1>
          <p className="text-md">
            pdf document containing my prjects and career
          </p>
          <a
            href="/OussamaMehiriCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button             className="cursor-pointer"
>Download CV</Button>
          </a>
        </div>
        {/* Image Wrapper */}
        <div className="relative w-[300] h-[300px] rounded-4xl overflow-hidden grayscale-100 ">
          <Image
            width={400}
            height={400}
            src={
              "https://i.pinimg.com/736x/ef/79/a9/ef79a98adf68a96a4b50ebead28b58b3.jpg"
            }
            className="h-full w-full object-cover absolute "
            alt={""}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Resume;
