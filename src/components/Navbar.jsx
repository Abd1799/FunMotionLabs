import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineFork } from "react-icons/ai";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import { PiPlugsConnectedLight } from "react-icons/pi";
// import { ReactComponent as MainIcon } from "../assets/images/Icon.svg";
import { Link } from "react-router-dom";
import Modal from "./Modal";
const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [toggle, setToggle] = useState(false);

  // Scroll into view function for navigation
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#1f2937] shadow-xl shadow-blue-gray-900 z-30 p-3 items-center flex justify-between sticky top-0">
      <div className="text-left text-2xl md:text-4xl">
        <div className="flex items-center justify-between">
          <img src="/assets/images/icon.svg" className=" w-7 h-7" />
          <Link to="/" onClick={() => scrollToSection("Banner")}>
            <h1 className="text-2xl font-semibold">FunMotionLabs</h1>
          </Link>
        </div>
      </div>
      <div>
        {/* Menu for mobile view */}
        {toggle ? (
          <BiMenu
            onClick={() => setToggle(!toggle)}
            className="md:hidden block"
          />
        ) : (
          <IoMdClose
            onClick={() => setToggle(!toggle)}
            className="md:hidden block"
          />
        )}
        <div
          className={`duration-500 shadow-lg shadow-blue-gray-900/50 md:hidden bg-[#1f2937] w-1/3 h-screen fixed text-start backdrop-blur-xl bg-opacity-25 mt-5 p-4 text-xs 
        ${toggle ? "left-[-100%]" : "left-[0%]"}
        `}
        >
          <ul>
            <div className="flex items-center">
              <AiOutlineHome className="w-4 h-4" />
              <li className="py-3 px-1 flex text-base items-center">
                <Link to="/" onClick={() => scrollToSection("Banner")}>
                  Home
                </Link>
              </li>
            </div>
            <div className="flex items-center">
              <AiOutlineInfoCircle className="w-4 h-4" />
              <li className="py-3 px-1 flex text-base items-center">About</li>
            </div>
            <div className="flex items-center">
              <AiOutlineFork className="w-4 h-4" />
              <li className="py-3 px-1 flex text-base items-center">
                What we Offer
              </li>
            </div>
            <div className="flex items-center">
              <RiContactsLine className="w-4 h-4" />
              <li className="py-3 px-1 flex text-base items-center">Contact</li>
            </div>
            <div className="flex items-center">
              <PiPlugsConnectedLight className="w-4 h-4" />
              <li className="py-3 px-1 flex text-base items-center">
                Get in Touch
              </li>
            </div>
          </ul>
        </div>

        {/* Menu for >768px screens */}
        <ul className="hidden md:flex gap-10 p-2 text-xs">
          <li className="flex items-center">
            <Link to="/" onClick={() => scrollToSection("Banner")}>
              Home
            </Link>
          </li>
          <li className="flex items-center">About</li>
          <li className="flex items-center">
            <Link to="/" onClick={() => scrollToSection("WhatweOffer")}>
              What we Offer
            </Link>
          </li>
          <li className="flex items-center">Contact</li>
          <li className="flex items-center">Get in Touch</li>
          <div className="flex gap-6">
            <button
              type="button"
              onClick={() => setShowModal(true)}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-none"
            >
              <div className="flex justify-between">
                <div className="pl-1">Subscribe</div>
              </div>
            </button>
            <Modal isVisible={showModal} onClose={() => setShowModal(false)} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
