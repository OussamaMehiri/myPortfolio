// import Link from "next/link";
import {  Waypoints } from "lucide-react";
import Link from "next/link";
import React from "react";

import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" ">
      <div className="flex flex-row justify-center items-center gap-2 px-5">
        <div className="border-t-1 border-black border-solid flex-grow" />
              <Waypoints className=""/>
        <h2 className="text-4xl">Contact</h2>
        <hr className="border-t-1 border-black border-solid flex-grow" />
      </div>
      <div className="flex flex-wrap gap-8 justify-center p-5">
        <Link href={""}>
          <FaGithub size={50} />
        </Link>
        <Link href={""}>
          <FaLinkedin  size={50} />
        </Link>
        <Link href={""}>
          <FaTwitter  size={50} />
        </Link>
        <Link href={""}>
          <FaInstagram size={50}  />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
