import React from "react";
import { Carousel } from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";
import EachCustomerReview from "./EachCustomerReview";
// import AINPC from "../../public/assets/images/AINPC.png"

const CustomerReviews = () => {
  return (
    <div className="flex justify-between  mt-10">
      <div className="invisible lg:visible visibility:collapse items-center text-left pt-28 pl-32">
        <h4 className="text-4xl">Customer</h4>
        <TypeAnimation
          sequence={["Reviews", 2000, "Satisfaction", 2000]}
          wrapper="span"
          speed={50}
          className="text-cyan-400/100 text-6xl"
          repeat={Infinity}
        />
      </div>

      <div className="bg-black h-fit text-left w-1/2 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50 mr-20">
        <Carousel transition={{ duration: 1 }} className="rounded-xl w-full">
          <EachCustomerReview
            image="/assets/images/AINPC.png"
            text="I have been their customer for years, and I can honestly say that their service is exceptional. They always go above and beyond, and their attention to detail is impressive."
          />
          <EachCustomerReview
            image="/assets/images/AINP2.png"
            text="I have been their customer for years, and I can honestly say that their service is exceptional. They always go above and beyond, and their attention to detail is impressive."
          />
          <EachCustomerReview
            image="/assets/images/AIDriven.png"
            text="I have been their customer for years, and I can honestly say that their service is exceptional. They always go above and beyond, and their attention to detail is impressive."
          />
        </Carousel>
      </div>
    </div>
  );
};

export default CustomerReviews;
