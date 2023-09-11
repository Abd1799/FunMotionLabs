import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 z-20 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="w-[900px]">
        <div className="flex flex-col">
          <AiOutlineClose
            onClick={() => onClose()}
            className="place-self-end cursor-pointer"
          />
        </div>
        <div className="bg-[#1f2937] p-16 border-blue-900">
          <div className="md:flex justify-between">
            <div className="text-left md:pt-20 md:pl-14">
              <div>
                <h2 className="text-xl md:text-2xl">Subscribe to</h2>
              </div>
              <TypeAnimation
                sequence={["FunMotionLabs", 2000, "NewsLetter", 2000]}
                wrapper="span"
                speed={50}
                className="text-cyan-400/100 text-xl md:text-4xl"
                repeat={Infinity}
              />
            </div>

            <div className="p-16 rounded-lg bg-black">
              <form class="w-full">
                <div class="md:flex justify-between md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 text-left font-bold md:text-right mb-1 md:mb-0 pr-4"
                      for="inline-full-name"
                    >
                      Full Name
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full h-8 py-2 px-4 text-blue-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                      id="inline-full-name"
                      type="text"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                <div class="md:flex justify-between md:items-center mb-6">
                  <div class="md:w-1/3">
                    <label
                      class="block text-gray-500 font-bold text-left md:text-right mb-1 md:mb-0 pr-4"
                      for="email"
                    >
                      Email
                    </label>
                  </div>
                  <div class="md:w-2/3">
                    <input
                      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded-none w-full py-2 px-4 text-blue-700 h-8 focus:outline-none focus:bg-white focus:border-blue-500"
                      id="email"
                      type="email"
                      placeholder="johnDoe@email.com"
                    />
                  </div>
                </div>
                <div class="md:flex md:items-center">
                  <div class="md:w-full text-center">
                    <button
                      class="w-32 shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white hover:text-black font-bold py-2 px-2 rounded-none"
                      type="button"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
