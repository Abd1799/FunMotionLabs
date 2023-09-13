import React from "react";
import Banner from "../components/Banner";
// import CustomerReviews from "../components/CustomerReviews";
import LatestNews from "../components/LatestNews";
import Newsletter from "../components/Newsletter";
import WelcomeSection from "../components/WelcomeSection";
import WhatweOfferSection from "../components/WhatweOfferSection";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <WelcomeSection />
      <WhatweOfferSection />
      {/* <CustomerReviews /> */}
      <Newsletter />
      <LatestNews />
    </div>
  );
};

export default Homepage;
