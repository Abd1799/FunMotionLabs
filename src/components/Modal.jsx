import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

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
                  <div class="md:w-full">
                    <Input color="white" label="Name" />
                  </div>
                </div>
                <div class="md:flex justify-between md:items-center mb-6">
                  <div class="md:w-full">
                    <Input color="white" type="email" label="email address" />
                  </div>
                </div>
                <div class="md:flex md:items-center">
                  <div class="md:w-full text-center">
                    <Button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-none"
                      type="button"
                    >
                      Sign Up
                    </Button>
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
