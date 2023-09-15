import React from 'react'
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const WelcomeSection = () => {

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-[#083344] flex items-center justify-center ">
      <div className="container md:flex justify-between p-10 text-left">
        <div className="hidden md:block">
          <img
            className="w-full h-full shadow-lg shadow-blue-gray-700/50 object-center"
            src="/assets/images/Welcome.gif"
            alt="Welcome gif"
          />
        </div>
        <div className="md:w-2/3 w-full">
          <h1 className="text-2xl font-semibold md:text-4xl pt-10 md:pl-10">
            Welcome to FunMotionLabs
          </h1>
          <p className="pt-10 md:pr-20 md:pl-10 md:text-base text-sm">
            At FunMotionLabs, our unwavering commitment lies in the relentless
            pursuit of redefining the very limits of the gaming realm through
            the ingenious application of cutting-edge AI methodologies and the
            seamless integration of motion-based interactions. Our overarching
            mission is to forge a path towards the creation of gaming
            experiences that transcend conventional boundaries, ensnaring
            players within a captivating maelstrom of innovation and artistry
            that promises nothing short of a paradigm shift in the entire gaming
            industry.
          </p>
          <div className="md:pl-10 pt-10">
            <Link to="/aboutcontact" onClick={() => scrollToSection("AboutUs")}>
              <Button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-none shadow-lg shadow-blue-gray-900/50">
                Find out More
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection
