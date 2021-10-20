import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/all";
import styled from "styled-components";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;
  return (
    <SlideControls>
      <div className="carousel-button-group" style={{ margin: "2.5rem 0rem" }}>
        <AiOutlineArrowLeft
          className={currentSlide === 0 ? "disable" : ""}
          onClick={() => previous()}
          style={{
            height: "3rem",
            width: "3rem",
            padding: "0.4rem",
            borderRadius: "50%",
            color: "var(--secondary-color)",
            marginRight: "1rem",
            border: "3px solid var(--secondary-color)",
          }}
        />

        <AiOutlineArrowRight
          style={{
            height: "3rem",
            width: "3rem",
            padding: "0.4rem",
            borderRadius: "50%",
            border: "3px solid var(--secondary-color)",
            backgroundColor: "var(--secondary-color)",
            color: "#fff",
          }}
          onClick={() => next()}
        />
      </div>
    </SlideControls>
  );
};

const SlideControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0rem 3rem;
`;

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
    <Carousel
      responsive={responsive}
      arrows={false}
      renderButtonGroupOutside={true}
      customButtonGroup={<ButtonGroup />}
    >
      {carousel_items.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
