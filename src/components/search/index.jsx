import React, { useState } from "react";
import styled from "styled-components";

const Search = () => {
  const [inputVal, setInputVal] = useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setInputVal(e.target.value);
  };

  return (
    <SearchContainer>
      <input
        value={inputVal}
        type="text"
        placeholder="Search"
        onChange={handleSearchChange}
      />
    </SearchContainer>
  );
};

export default Search;

const SearchContainer = styled.label`
  padding: 1rem;
  width: 70%;
  margin: auto;
  display: flex;
  flex-grow: 1;
  border: 1px solid #fff;
  margin-top: 1rem;
  border-radius: 4px;

  input {
    width: 95%;
    background: transparent;
    color: #fff;
    outline: none;
    border: none;
    font-size: 1rem;

    ::placeholder {
      color: #fff;
    }
  }
`;
