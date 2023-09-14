import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import Modal from "./Modal";

const Newsletter = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleOpen = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className="fixed z-50 bottom-16 right-8 bg-blue-400  outline-color:#0369a1 w-36 h-10 rounded-full drop-shadow-lg flex justify-center items-center text-white hover:text-black text-sm hover:bg-blue-300 hover:drop-shadow-2xl hover:animate-bounce duration-300"
      >
        <div className="flex justify-between">
          <div>
            <RxAvatar className="h-5 w-5" />
          </div>
          <div className="pl-1">Subscribe</div>
        </div>
      </button>
      <Modal open={isModalOpen} onClose={handleOpen} />
    </>
  );
};

export default Newsletter;
