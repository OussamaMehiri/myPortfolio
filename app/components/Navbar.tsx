"use client";
import { Button } from "@/components/ui/button";
import {
  Bubbles,
  Gavel,
  House,
  // Info,
  // Moon,
  NotepadText,
  // Waypoints,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="fixed right-0 left-0 bottom-0   flex justify-center  items-center p-2 border border-black backdrop-blur-xl my-2 mx-1 rounded-sm lg:bottom-auto lg:justify-between z-20 overflow-hidden  "
      role="navigation"
    >
      <div className="bg-white top-0 right-0 left-0 bottom-0 absolute -z-10 opacity-50  " />
      {/* navbar title */}
      <div className=" hidden  lg:flex">
        <h1 className="font-semibold">Oussama</h1>
        <Gavel />
        <h1 className="font-semibold">Mehiri </h1>
      </div>
      {/* navbar links */}
      <div>
        <ul
          className="flex flex-row gap-5
         "
        >
          <li>
            <Link
              href={"#home"}
              className="flex flex-col items-center justify-center "
            >
              <House className="hover:text-neutral-400 transition duration-150 " />
              <p className="hidden  sm:flex">Home</p>
            </Link>
          </li>
          {/* <li>
            <Link href={"/app/pages/Home"} className="flex flex-col items-center justify-center ">
              <Info className=""/>
              <p className="hidden  sm:flex" >About Me</p>
            </Link>
          </li> */}
          <li>
            <Link
              href={"#skills"}
              className="flex flex-col items-center justify-center "
            >
              <Bubbles className="" />
              <p className="hidden  sm:flex">Skills</p>
            </Link>
          </li>
          {/* <li>
            <Link href={""} className="flex flex-col items-center justify-center ">
              <Gavel className="" />
              <p className="hidden sm:flex " >Projects</p>
            </Link>
          </li> */}
          <li>
            <Link
              href={"#resume"}
              className="flex flex-col items-center justify-center "
            >
              <NotepadText className="" />
              <p className="hidden  sm:flex">Resume</p>
            </Link>
          </li>
          {/* <li>
            <Link href={"#contact"} className="flex flex-col items-center justify-center ">
              <Waypoints className=""/>
              <p className="hidden  sm:flex " >Contact</p>
            </Link>
          </li> */}
        </ul>
      </div>
      {/* CTA */}
      <div className="hidden gap-2  lg:flex">
        {/* <Button>
          <Moon />
        </Button> */}
        <Link href={"#contact"}>
          <Button className="cursor-pointer">Work With ME</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
