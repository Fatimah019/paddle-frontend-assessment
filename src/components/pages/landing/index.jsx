import React from "react";
import Hero from "../../hero";
import Plan from "../../planType";
import Sponsored from "../../sponsored";
import Footer from "../../footer";
import Customers from "../../customers";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Plan />
      <Sponsored />
      <Customers />
      <Footer />
    </>
  );
};

export default LandingPage;
