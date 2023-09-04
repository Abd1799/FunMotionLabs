import React from 'react'
import Card from './Card'
import AINPC from '../assets/images/AINPC.png'
import AIDriven from "../assets/images/AIDriven.png";
import MotionBased from "../assets/images/MotionBased.png";


const WhatweOfferSection = () => {
  return (
    <div className="text-left">
      <h1 className="text-2xl md:text-4xl p-10">What we Offer</h1>
      <div className="pl-10 pr-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        <Card image={AINPC} text="AI NPC(AI Non Player Character)"/>
        <Card image={AIDriven} text= "AI Driven gameplay"/>
        <Card image={MotionBased} text = "Motion Based Interactions"/>
        <Card image={AINPC} text = "Fluid gameplay"/>
      </div>
    </div>
  );
}

export default WhatweOfferSection
