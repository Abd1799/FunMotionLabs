import React from 'react'
import Card from './Card'
// import AINPC from '../../public/assets/images/AINPC.png'
// import AINPC2 from "../../public/assets/images/AINPC2.png";
// import AIDriven from "../../public/assets/images/AIDriven.png";
// import MotionBased from "../../public/assets/images/MotionBased.png";


const WhatweOfferSection = () => {
  return (
    <div className="text-left" id="WhatweOffer">
      <h1 className="text-2xl font-semibold md:text-4xl p-10">What we Offer</h1>
      <div className="pl-10 sm:pr-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 w-full">
          <Card
            image="/assets/images/AINPC.png"
            text="AI NPC(AI Non Player Character)"
          />    
        <Card image="/assets/images/AIDriven.png" text="AI Driven gameplay" />
        <Card
          image="/assets/images/MotionBased.png"
          text="Motion Based Interactions"
        />
        <Card image="/assets/images/AIDriven.png" text="Fluid gameplay" />
      </div>
    </div>
  );
}

export default WhatweOfferSection
