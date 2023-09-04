import React,{useState} from "react";
import {BiMenu} from "react-icons/bi"
import {IoMdClose}from "react-icons/io"

const Navbar = () => {
     const [toggle, setToggle]=useState(false)

  return (
    <div className="p-3 items-center flex justify-between">
      <div className="text-left text-2xl md:text-4xl">
        <h1>FunMotionLabs</h1>
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

        <ul className={`duration-300 md:hidden bg-[#1f2937] w-full h-screen fixed text-start  top-[95px] p-2 text-xs 
        ${toggle?'left-[-100%]':'left-[0%]'}
        `}>
          <li className="py-3 flex items-center">Home</li>
          <li className="py-3 flex items-center">About</li>
          <li className="py-3 flex items-center">What we offer</li>
          <li className="py-3 flex items-center">Contact</li>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
              Get in touch!
            </button>
          </div>
        </ul>
        {/* Menu for >768px screens */}
        <ul className="hidden md:flex gap-10 p-2 text-xs">
          <li className="flex items-center">Home</li>
          <li className="flex items-center">About</li>
          <li className="flex items-center">What we offer</li>
          <li className="flex items-center">Contact</li>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded">
              Get in touch!
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
