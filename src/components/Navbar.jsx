import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFork } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { PiPlugsConnectedLight } from "react-icons/pi";

import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";

// import { ReactComponent as MainIcon } from "../assets/images/Icon.svg";
import { Link } from "react-router-dom";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Modal from "./Modal";
const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const handleOpen = () => {
    setModalOpen(!isModalOpen);
  };


  // Scroll into view function for navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#1f2937] shadow-xl shadow-blue-gray-900/50 z-40 p-3 items-center flex justify-between sticky top-0">
      <div className="text-left text-2xl md:text-4xl">
        <div className="flex items-center justify-between">
          <img src="/assets/images/icon.svg" alt="" className=" w-7 h-7" />
          <Link to="/" onClick={() => scrollToSection("Banner")}>
            <h1 className="text-2xl font-semibold">FunMotionLabs</h1>
          </Link>
        </div>
      </div>
      <div>
        {/* Menu for mobile view */}

        <IconButton
          onClick={openDrawer}
          className="md:hidden block"
          variant="text"
          color="white"
        >
          <BiMenu />
        </IconButton>
        <Drawer
          open={open}
          onClose={closeDrawer}
          size={200}
          className="p-4 bg-[#1f2937] backdrop-blur-xl bg-opacity-25"
        >
          <div className="mb-6 flex items-center justify-between">
            <Typography variant="h6" color="white">
              FunmotionLabs
            </Typography>
            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </IconButton>
          </div>
          <ul>
            <div className="flex items-center">
              <AiOutlineHome className="w-4 h-4" />
              <li className="py-3 px-1 flex text-base items-center">
                <Link
                  to="/"
                  onClick={() => {
                    scrollToSection("Banner");
                    closeDrawer();
                  }}
                >
                  Home
                </Link>
              </li>
            </div>
            <div className="flex items-center">
              <AiOutlineInfoCircle className="w-4 h-4" />
              <li className="py-3 px-1 flex text-base items-center">
                <Link
                  to="/aboutcontact"
                  onClick={() => {
                    scrollToSection("ContactUs");
                    closeDrawer();
                  }}
                >
                  About
                </Link>
              </li>
            </div>
            <div className="flex items-center">
              <AiOutlineFork className="w-4 h-4" />
              <li className="py-3 px-1 flex text-base items-center">
                <Link
                  to="/"
                  onClick={() => {
                    scrollToSection("WhatweOffer");
                    closeDrawer();
                  }}
                >
                  What we Offer
                </Link>
              </li>
            </div>
            <div className="flex items-center">
              <RiContactsLine className="w-4 h-4" />
              <li className="py-3 px-1 flex text-base items-center">
                <Link
                  to="/aboutcontact"
                  onClick={() => {
                    scrollToSection("ContactUs");
                    closeDrawer();
                  }}
                >
                  Contact
                </Link>
              </li>
            </div>
          </ul>
        </Drawer>

        {/* Menu for >768px screens */}
        <ul className="hidden md:flex gap-10 p-2 text-xs">
          <li className="flex items-center">
            <Link to="/" onClick={() => scrollToSection("Banner")}>
              Home
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/aboutcontact" onClick={() => scrollToSection("AboutUs")}>
              About
            </Link>
          </li>
          <li className="flex items-center">
            <Link to="/" onClick={() => scrollToSection("WhatweOffer")}>
              What we Offer
            </Link>
          </li>
          <li className="flex items-center">
            <Link
              to="/aboutcontact"
              onClick={() => scrollToSection("ContactUs")}
            >
              Contact
            </Link>
          </li>
          {/* <li className="flex items-center">Get in Touch</li> */}
          <div className="flex gap-6">
            <Button
              type="button"
              onClick={handleOpen}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-none"
            >
              Subscribe
            </Button>
            <Modal open={isModalOpen} onClose={handleOpen} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
