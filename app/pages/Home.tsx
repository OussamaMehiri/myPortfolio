import React from "react";
import Image from "next/image";
const Home = () => {
  return (
    <div className=" flex flex-col md:flex-row p-2 gap md:gap-50  justify-around items-center  lg:pt-30 w-full ">
      {/* Intro */}
      <div className="md:w-1/3">
        <h1 className="font-bold text-4xl">
          Hi
          <br />
          I&apos;m Oussama Mehiri
        </h1>
      </div>
      {/* Image */}
      <div className=" w-[300px] relative  h-[300px] rounded-4xl  z-10 p-2">
        <Image
          className="  grayscale-100   w-full h-full object-cover rounded-4xl"
          src={
            "https://i.pinimg.com/736x/e5/36/7e/e5367e7c16d4962fc899c51cc4686c21.jpg"
          }
          width={400}
          height={400}
          alt={"me Coding"}
        />
        {/* roles */}
        <div className="absolute px-2 py-2 rounded-md bg-primary top-1/2 -left-20 z-20 hover:border-1 hover:border-white">
          <p className="text-white">Frontend Dev</p>
        </div>
        <div className="absolute px-2 py-2 rounded-md bg-primary top-1/2 -right-20 z-20 hover:border-1 hover:border-white">
          <p className="text-white">Backend Engineer</p>
        </div>
        <div className="absolute px-2 py-2 rounded-md bg-primary top-1/3 -left-40 z-20 hover:border-1 hover:border-white">
          <p className="text-white">UI/UX Designer</p>
        </div>
        <div className="absolute px-2 py-2 rounded-md bg-primary bottom-1/6 -left-40 z-20 hover:border-1 hover:border-white">
          <p className="text-white">Software Engineer</p>
        </div>
        <div className="absolute px-2 py-2 rounded-md bg-primary bottom-1/5 -right-40 z-20 hover:border-1 hover:border-white">
          <p className="text-white">Mobile Developer</p>
        </div>{" "}
        <div className="absolute px-2 py-2 rounded-md bg-primary top-1/5 -right-40 z-20 hover:border-1 hover:border-white">
          <p className="text-white">Problem Solver</p>
        </div>
      </div>
      {/* Details */}
      <div className="md:w-1/3 ">
        Javascript{" "}
        <span className="text-white bg-black px-2 rounded-sm">
          Software Engineer
        </span>{" "}
        with CS Master degree . building multiple open & closed projects as
        freelancer focusing on speed and UI with suitable LOGIC.
      </div>
    </div>
  );
};

export default Home;
