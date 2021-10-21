import React from "react";
import styled from "styled-components";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <h1>Page not found</h1>
    </NotFoundContainer>
  );
};

export default NotFound;

const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
