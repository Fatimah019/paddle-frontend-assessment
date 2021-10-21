import React from "react";
import styled from "styled-components";

const Subscribe = () => {
  return (
    <SubscribeContainer>
      <SubscribeLeft>
        <h2>Subscribe Now for Get Special Features!</h2>
        <p>Praesent mollis lobortis nisl nec laoreet.</p>
      </SubscribeLeft>
      <SubscribeRight>
        <button>Subscribe Now</button>
      </SubscribeRight>
    </SubscribeContainer>
  );
};

export default Subscribe;
const SubscribeContainer = styled.div`
  background: #fff;
  box-shadow: 5px 10px 10px 0px rgba(13, 16, 37, 0.06);
  border-radius: 10px;
  width: 80%;
  margin: auto;
  margin-top: 1rem;
  padding: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 90%;
  height: 10rem;
  z-index: 9999;
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const SubscribeRight = styled.div`
  flex: 0.5;
  text-align: right;
  button {
    color: #fff;
    background-color: var(--secondary-color);
    box-shadow: 2px 2px rgba(186, 85, 211, 0.35);
    padding: 0.8rem 2.5rem;
    outline: none;
    border: none;
    border-radius: 4px;
  }
`;

const SubscribeLeft = styled.div`
  flex: 0.5;
  h2 {
    font-weight: 500;
  }
`;
