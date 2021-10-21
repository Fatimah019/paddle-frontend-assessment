import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const CustomLoader = ({ visible }) => {
  if (!visible) return null;
  return (
    <LoaderContainer>
      <Loader type="Oval" color="gray" height={60} width={60} />
    </LoaderContainer>
  );
};

export default CustomLoader;

const LoaderContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
`;
