import React,{useState,useEffect,useRef} from 'react'
import { TypeAnimation } from "react-type-animation";


let count=0;
const Banner = () => {
  const Images = [
    "https://img.freepik.com/free-photo/one-person-men-adult-headset-protective-eyewear-digitally-generated-image-computer-graphic-virtual-reality-generative-ai_188544-31824.jpg?outline outline-2  outline-offset-2size=626&ext=jpg",
    "https://img.freepik.com/free-photo/man-neon-suit-sits-chair-with-neon-sign-that-says-word-it_188544-27011.jpg?size=626&ext=jpg",
    "https://img.freepik.com/free-photo/futuristic-adult-virtual-reality-handsfree-headset-generated-by-ai_188544-26034.jpg?size=626&ext=jpg",
  ];
  const [imageIndex, setImageIndex]=useState(0);
  const sliderRef = useRef();
  useEffect(()=>{
    startSlider();
     sliderRef?.current?.addEventListener("animationend", removeAnimation);
  },[])
  const startSlider=()=>{
    setInterval(()=>{
      count = (count+1)%Images.length;
      setImageIndex(count)
      sliderRef?.current?.classList?.add("fade-anim");
    },3000)
  }
  const removeAnimation = () => {
    sliderRef?.current?.classList?.remove("fade-anim");
  };


  return (
    <div ref={sliderRef} className="relative aspect-w-16 aspect-h-9" id="Banner">
      <img
        className="h-fit object-cover object-center shadow-xl shadow-blue-gray-900/50 w-full brightness-50"
        src={Images[imageIndex]}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="-webkit-font-smoothing: auto pb-4 text-xl md:text-3xl text-center">
          Elevate you gaming experience with
        </h1>
        <TypeAnimation
          sequence={["FunMotionLabs", 2000, "Creative Gaming", 2000]}
          wrapper="span"
          speed={50}
          className="text-cyan-400/100 text-2xl md:text-5xl text-center"
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Banner
