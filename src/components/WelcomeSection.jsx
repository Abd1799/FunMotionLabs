import React from 'react'

const WelcomeSection = () => {
  return (
    <div className="bg-[#083344] h-60 text-left ">
      <h1 className="text-2xl md:text-4xl pt-10 pl-10">Welcome to FunMotionLabs</h1>
      <p className="pt-5 pr-15 pl-10 md:text-base text-xs">
        At FunMotionLabs, we are dedicated to pushing the boundaries of gaming by
        leveraging advanced AI techniques and motion-based interactions. Our
        mission is to create immersive gaming experiences that captivate players
        and revolutionize the industry.
      </p>
      <div className='pl-10 pt-5'>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded">
              Find out More
            </button>
      
    </div>
    </div>
  );
}

export default WelcomeSection
