import React from 'react'
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="relative">
      <img
        className="h-96 w-full brightness-50"
        src="https://images.pexels.com/photos/596750/pexels-photo-596750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="-webkit-font-smoothing: auto text-3xl">
          Elevate you gaming exprience with
        </h1>
          <TypeAnimation
            sequence={["FunMotionLabs", 2000, "Abdul Ahad", 2000,"Creative Gaming",2000]}
            wrapper="span"
            speed={50}
            className="text-cyan-400/100 text-6xl"
            repeat={Infinity}
          />
      </div>
    </div>
  );
}

export default Banner
