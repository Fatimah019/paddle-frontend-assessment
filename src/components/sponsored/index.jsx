import React from "react";
import styled from "styled-components";

const Sponsored = () => {
  return (
    <SponsoredContainer>
      <SponsoredContainerHeader>
        <h2>Get Started With Paddle Today</h2>{" "}
        <p>
          Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec ante
          egestas ullamcorper
        </p>
        <button>Start Today</button>
      </SponsoredContainerHeader>
      <SponsoredContainerBody>
        <img src="/assets/images/netflix.png" alt="" />
        <img src="/assets/images/reddit.png" alt="" />
        <img src="/assets/images/amazon.png" alt="" />
        <img src="/assets/images/discord.png" alt="" />
        <img src="/assets/images/spotify.png" alt="" />
      </SponsoredContainerBody>
    </SponsoredContainer>
  );
};
export default Sponsored;

const SponsoredContainer = styled.div`
  width: 80%;
  margin: 4rem auto;
`;
const SponsoredContainerHeader = styled.div`
  width: 70%;
  margin: auto;
  text-align: center;

  h2 {
    font-weight: 800;
  }
  p {
    margin: 1rem 0rem;
  }
  button {
    color: #fff;
    background-color: var(--secondary-color);
    box-shadow: 10px 10px 25px 5px rgba(186, 85, 211, 0.35);
    padding: 1rem 4rem;
    outline: none;
    border: none;
    border-radius: 4px;
    font-weight: 500;
  }
`;

const SponsoredContainerBody = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));
  row-gap: 1rem;
  align-items: center;
  justify-content: center;
  margin: 1rem 0rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(35%, 1fr));
  }
  img {
    width: 100%;
  }
`;
