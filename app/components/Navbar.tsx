"use client";
import { Button } from "@/components/ui/button";
import {
  Bubbles,
  Gavel,
  House,
  Info,
  Moon,
  NotepadText,
  Waypoints,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed right-0 left-0 bottom-0   flex justify-center  items-center p-2 border border-black backdrop-blur-sm my-2 mx-1 rounded-sm lg:bottom-auto lg:justify-between z-20  " role="navigation">
      {/* navbar title */}
      <div className=" hidden  lg:flex">
      <h1 className="font-semibold">Oussama</h1>
        <Gavel/>
      <h1 className="font-semibold">Mehiri </h1>
      </div>
      {/* navbar links */}
      <div>
        <ul className="flex flex-row gap-5
         ">
          <li>
            <Link href={""} className="flex flex-col items-center justify-center ">
              <House className="hover:text-neutral-400 transition duration-150 "/>
              <p className="hidden  sm:flex" >Home</p>
            </Link>
          </li>
          <li>
            <Link href={""} className="flex flex-col items-center justify-center ">
              <Info className=""/>
              <p className="hidden  sm:flex" >About Me</p>
            </Link>
          </li>
          <li>
            <Link href={""} className="flex flex-col items-center justify-center ">
              <Bubbles className=""/>
              <p className="hidden  sm:flex" >Skills</p>
            </Link>
          </li>
          <li>
            <Link href={""} className="flex flex-col items-center justify-center ">
              <Gavel className="hover:fill-black" />
              <p className="hidden sm:flex " >Projects</p>
            </Link>
          </li>
          <li>
            <Link href={""} className="flex flex-col items-center justify-center ">
              <NotepadText className=""/>
              <p className="hidden  sm:flex" >Resume</p>
            </Link>
          </li>
          <li>
            <Link href={""} className="flex flex-col items-center justify-center ">
              <Waypoints className=""/>
              <p className="hidden  sm:flex " >Contacts</p>
            </Link>
          </li>
        </ul>
      </div>
      {/* CTA */}
      <div className="hidden gap-2  lg:flex">
        <Button>
          <Moon />
        </Button>
        <Button>Work With ME</Button>
      </div>
    </nav>
  );
};

export default Navbar;
