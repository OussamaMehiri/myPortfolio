// import Link from "next/link";
import { Waypoints } from "lucide-react";
import { MdEmail } from "react-icons/md";
import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" ">
      <div className="flex flex-row justify-center items-center gap-2 px-5">
        <div className="border-t-1 border-black border-solid flex-grow" />
        <Waypoints className="" />
        <h2 className="text-4xl">Contact</h2>
        <hr className="border-t-1 border-black border-solid flex-grow" />
      </div>
      <div className="flex flex-wrap gap-8 justify-center p-5">
        <a
          href="https://github.com/OussamaMehiri"
          target="_blank"
          rel="noopener noreferer"
          aria-label="Visit my Github profile"
        >
          {" "}
          <FaGithub size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/oussamamehiri/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my LinkedIn profile"
        >
          <FaLinkedin size={50} />
        </a>{" "}
        {/* <a
          href="https://www.linkedin.com/in/oussamamehiri/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my X profile"
        >
          <FaTwitter size={50} /> */}
        {/* </a>{" "} */}
        {/* <a
          href="https://www.linkedin.com/in/oussamamehiri/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit my IG profile"
        >
          <FaInstagram size={50} />
        </a> */}
        <a
          href="mailto:oussamamehiri@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Send me an email"
        >
          <MdEmail size={50} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
