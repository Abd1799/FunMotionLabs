import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { Input } from "@material-tailwind/react";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const Modal = ({ open, onClose }) => {
  console.log(open, onClose)
  return (
    <>
      <Dialog
        open={open}
        handler={onClose}
        size="lg"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        
            <div className="bg-[#1f2937] p-10 border-blue-900">
              
                <DialogHeader>
                  <div className="md:pr-3 pr-1">
                    <h2 className="text-base md:text-2xl text-white">Subscribe to </h2>
                  </div>
                  <TypeAnimation
                    sequence={["FunMotionLabs", 2000, "NewsLetter", 2000]}
                    wrapper="span"
                    speed={50}
                    className="text-cyan-400/100 text-base md:text-2xl"
                    repeat={Infinity}
                  />
                </DialogHeader>

                <div className="p-5 rounded-lg">
                  <form class="w-full">
                    <div class="md:flex justify-between md:items-center mb-6">
                      <div class="md:w-full">
                        <Input color="white" label="Name" />
                      </div>
                    </div>
                    <div class="md:flex justify-between md:items-center mb-6">
                      <div class="md:w-full">
                        <Input
                          color="white"
                          type="email"
                          label="email address"
                        />
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
          
      </Dialog>
    </>
  );
};

export default Modal;
