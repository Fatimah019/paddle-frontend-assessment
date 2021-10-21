import React from "react";
import styled from "styled-components";
import Header from "../header";
import { FaUser, IoLocationSharp } from "react-icons/all";

const Hero = () => {
  return (
    <HeroContainer>
      <Header />
      <HeroTop>
        <HeroTopLeft>
          <h2>We Are Everything We Aspire To BE</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
            orci condimentum lectus efficitur tempor vel eu massa. Sed molestie
            turpis eget ipsum malesuada dignissim
          </p>
          <a href="/#">Get Started</a>
        </HeroTopLeft>
        <HeroTopRight>
          <img src="/assets/images/hero-bg.png" alt="hero-bg-img" />
        </HeroTopRight>
      </HeroTop>
      <HeroMiddle>
        <div className="hero_middle_inner">
          <div className="icon_container">
            <FaUser color="var(--secondary-color)" />
          </div>
          <div className="hero_middle_inner_right">
            <h3>90+</h3>
            <p>Users</p>
          </div>
        </div>
        <div className="hero_middle_inner">
          <div className="icon_container">
            <IoLocationSharp color="var(--secondary-color)" />
          </div>
          <div className="hero_middle_inner_right">
            <h3>30+</h3>
            <p>Locations</p>
          </div>
        </div>
        <div className="hero_middle_inner">
          <div className="icon_container">
            <img src="/assets/icons/server_icon.png" alt="" />
          </div>
          <div className="hero_middle_inner_right">
            <h3>50+</h3>
            <p>Servers</p>
          </div>
        </div>
      </HeroMiddle>

      <HeroBottom>
        <HeroBottomLeft>
          <img src="/assets/images/hero-bottom.png" alt="" />
        </HeroBottomLeft>
        <HeroBottomRight>
          <h2>Features We Provide For You</h2>
          <p>
            Curabitur tempor justo non turpis malesuada cursus. Mauris ac libero
            eu sem finibus lacinia nec pulvinar.
          </p>
          <ul>
            <li>Curabitur tempor justo</li>
            <li>Curabitur tempor justo.</li>
            <li>Curabitur tempor justo</li>
            <li>Curabitur tempor justo</li>
          </ul>
        </HeroBottomRight>
      </HeroBottom>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  background-color: #fff;
  width: 80%;
  margin: auto;
  padding: 1rem 0rem;
`;

const HeroTop = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
  column-gap: 1rem;
  row-gap: 4rem;
  padding: 2rem 0rem;
  align-items: center;
`;

const HeroTopLeft = styled.div`
  h2 {
    font-weight: 500;
    font-family: var(--primary-font-style);
    color: #0b132a;
    text-shadow: 0px 2px 4px var(--secondary-color);
    font-size: 3rem;
  }

  p {
    margin: 2rem 0rem 2.5rem 0rem;
  }

  a {
    color: #fff;
    border-radius: 4px;
    text-decoration: none;
    padding: 1.2rem 4.5rem;
    background-color: var(--secondary-color);
    box-shadow: 10px 10px 25px 5px rgba(186, 85, 211, 0.35);
  }
`;

const HeroTopRight = styled.div`
  position: relative;
  height: 100%;

  img {
    width: 100%;
  }
`;

const HeroMiddle = styled.div`
  margin-top: 2rem;
  background: #ffffff;
  border-radius: 10px;
  padding: 3rem 0rem;
  box-shadow: 5px 10px 25px 0px rgba(13, 16, 37, 0.06);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(33%, 1fr));
  row-gap: 1rem;
  align-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  }
  @media screen and (max-width: 380px) {
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }

  .hero_middle_inner {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 1rem;
    @media screen and (max-width: 380px) {
      justify-content: flex-start;
    }
    .icon_container {
      border-radius: 100%;
      padding: 1.5rem;
      font-size: 1.2rem;
      margin-right: 1.5rem;
      background: rgba(186, 85, 211, 0.25);
    }

    .hero_middle_inner_right {
      h3 {
        color: #0b132a;
        font-weight: 700;
      }
    }
  }

  .hero_middle_inner:nth-child(2) {
    border-right: 2px solid #eeeff2;
    border-left: 2px solid #eeeff2;
    @media screen and (max-width: 768px) {
      border-right: none;
    }
    @media screen and (max-width: 380px) {
      border-left: none;
    }
  }
`;

const HeroBottom = styled.div`
  margin: 5rem 0rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
  column-gap: 1rem;
  row-gap: 4rem;
  padding: 2rem 0rem;
  align-items: center;
`;

const HeroBottomLeft = styled.div`
  img {
    width: 100%;
  }
`;
const HeroBottomRight = styled.div`
  h2 {
    font-weight: 800;
  }
  p {
    margin: 1.5rem 0rem;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin: 0.2rem 0px;
    }
    li::before {
      content: "■ ";
      color: var(--secondary-color);
      border-radius: 8px;
      font-size: 2.5rem;
    }
  }
`;
