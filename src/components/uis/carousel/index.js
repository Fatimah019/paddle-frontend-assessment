import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

const CustomCarousel = ({ carousel_items }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1240 },
      items: 2.5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1.5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      {carousel_items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
      {/* <div>
        <img
          src="/assets/images/hero-bg.png"
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <img
          src="/assets/images/hero-bg.png"
          alt=""
          style={{ width: "100%" }}
        />
      </div>
      <div>
        <img
          src="/assets/images/hero-bg.png"
          alt=""
          style={{ width: "100%" }}
        />
      </div> */}
    </Carousel>
  );
};

export default CustomCarousel;
