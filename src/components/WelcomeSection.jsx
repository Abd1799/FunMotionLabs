import React from 'react'

const WelcomeSection = () => {
  return (
    <div className="bg-[#083344] p-16 text-left flex justify-between">
      <div>
        <img
          className=" w-full h-full shadow-lg shadow-blue-gray-700/50 object-center"
          src="/assets/images/Welcome.gif"
          alt="Welcome gif"
        />
      </div>
      <div className="w-2/3">
        <h1 className="text-2xl font-semibold md:text-4xl pt-10 pl-10">
          Welcome to FunMotionLabs
        </h1>
        <p className="pt-10 pr-20 pl-10 md:text-base text-xs">
          At FunMotionLabs, our unwavering commitment lies in the relentless
          pursuit of redefining the very limits of the gaming realm through the
          ingenious application of cutting-edge AI methodologies and the
          seamless integration of motion-based interactions. Our overarching
          mission is to forge a path towards the creation of gaming experiences
          that transcend conventional boundaries, ensnaring players within a
          captivating maelstrom of innovation and artistry that promises nothing
          short of a paradigm shift in the entire gaming industry.
        </p>
        <div className="pl-10 pt-10">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-2 rounded-none shadow-lg shadow-blue-gray-900/50">
            Find out More
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection
