import React from 'react'
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      {/* About Us section */}
      <div className="bg-black p-16 text-left" id="AboutUs">
        <div className="mt-10">
          <h1 className="text-6xl text-center font-semibold">About Us</h1>
          {/* For mobile view */}
          <div className="block md:hidden w-full">
            <img
              className="w-full h-full  object-center"
              src="/assets/images/triangle1.gif"
              alt="About Gif"
            />
          </div>
        </div>
        <div className="md:flex justify-between md:w-4/5 w-full md:mt-10 mx-auto">
          <div className="md:w-2/3 w-full">
            <h4 className="text-left font-semibold text-base text-gray-400">
              Step into the world of Fun Motion Labs, where gaming fun is
              reimagined through the synergy of AI and motion technology. As an
              avant-garde AI-powered gaming company, we're on a mission to
              reignite the joy of gaming by introducing groundbreaking
              techniques like motion gaming. Our innovative approach seamlessly
              merges artificial intelligence and motion sensors, enabling
              players to become an integral part of their virtual adventures. At
              Fun Motion Labs, we're not just creating games; we're crafting
              immersive experiences that engage your body and mind in ways
              you've never imagined. Join us in rediscovering the thrill,
              laughter, and pure excitement that define gaming's core – a future
              where fun knows no limits.
            </h4>
            <div className="pt-10">
              <Link
                to="/aboutcontact"
                onClick={() => scrollToSection("ContactUs")}
              >
                <Button className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-none shadow-lg shadow-blue-gray-900/50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-1/2 md:block hidden">
            <img
              className="w-full h-full  object-center"
              src="/assets/images/triangle1.gif"
              alt="About Gif"
            />
          </div>
        </div>
      </div>
      {/* Our mission section */}
      <div className="bg-black pl-16 pr-16 pt-5 pb-5 text-left">
        <div className="mt-10">
          <h1 className="text-6xl text-center font-semibold">Our Mission</h1>
        </div>
        <div className="md:flex justify-between md:w-4/5 w-full mt-10 mx-auto">
          <div className="md:w-1/2 w-full">
            <img
              className="w-full h-full object-center"
              src="/assets/images/triangle2.gif"
              alt="missiongif"
            />
          </div>
          <div className="md:w-2/3 w-full">
            <h4 className=" text-left font-semibold text-base text-gray-400">
              Step into the world of Fun Motion Labs, where gaming fun is
              reimagined through the synergy of AI and motion technology. As an
              avant-garde AI-powered gaming company, we're on a mission to
              reignite the joy of gaming by introducing groundbreaking
              techniques like motion gaming. Our innovative approach seamlessly
              merges artificial intelligence and motion sensors, enabling
              players to become an integral part of their virtual adventures. At
              Fun Motion Labs, we're not just creating games; we're crafting
              immersive experiences that engage your body and mind in ways
              you've never imagined. Join us in rediscovering the thrill,
              laughter, and pure excitement that define gaming's core – a future
              where fun knows no limits.
            </h4>
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div id="ContactUs" className="bg-black pl-16 pr-16 pt-5 pb-5 text-left">
        <div className="md:mt-10">
          <h1 className="text-6xl text-center font-semibold">Contact Us</h1>
          {/* For mobile view  */}
          <div className="w-full md:hidden block">
            <img
              className="w-full h-full object-center"
              src="/assets/images/ContactUs.gif"
              alt="contactgif"
            />
          </div>
        </div>
        <div className="md:flex justify-between md:w-4/5 w-full md:mt-10 mb-16 mx-auto">
          <div className="md:w-2/3 w-full">
            <h4 className=" text-left font-semibold text-base text-gray-400">
              Join us to delve deeper into our innovations and witness how we're
              poised to transform the global gaming experience.
            </h4>
            <div className=" flex flex-col gap-6 w-full pt-10">
              <Input color="white" label="Name" />
              <Input color="white" type="email" label="Email" />
              <Input className="h-24" color="white" label="Comments" />
            </div>
            <div className="pt-10">
              <Button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-8 rounded-none shadow-lg shadow-blue-gray-900/50">
                Submit
              </Button>
            </div>
          </div>
          <div className="w-1/2 md:block hidden">
            <img
              className="w-full h-full object-center"
              src="/assets/images/ContactUs.gif"
              alt="contactgif"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About
