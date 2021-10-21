import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars, AiOutlineClose } from "react-icons/all";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(true);
  };

  const handleHideNav = () => {
    setShowNav(false);
  };

  const style = showNav ? { display: "block" } : {};
  return (
    <HeaderWrapper>
      <HeaderLeft>
        <p>PEDDLE</p>
      </HeaderLeft>
      <nav className="nav_list" style={style}>
        <div className="nav_inner">
          <HeaderList>
            <li>
              <NavLink to="/about" className="nav_link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/faqs" className="nav_link">
                FAQS
              </NavLink>
            </li>
            <li>
              <NavLink to="/pricing" className="nav_link">
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink to="/testimonials" className="nav_link">
                Testimonials
              </NavLink>
            </li>
          </HeaderList>
          <HeaderRight>
            <button>Sign in</button>
            <button>Sign Up</button>
          </HeaderRight>
        </div>
      </nav>
      <NavBar>
        {!showNav ? (
          <FaBars onClick={handleShowNav} className="nav_bar_icons" />
        ) : (
          <AiOutlineClose onClick={handleHideNav} className="nav_bar_icons" />
        )}
      </NavBar>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin: auto;
  z-index: 9999;

  .nav_list {
    flex: 0.9;
    @media screen and (max-width: 900px) {
      display: none;
    }
    .nav_inner {
      display: flex;
      justify-content: space-between;
      @media screen and (max-width: 900px) {
        position: fixed;
        height: 100vh;
        background-color: var(--secondary-color);
        top: 0;
        left: 0;
        bottom: 0;
        width: 15rem;
        display: flex;
        flex-direction: column;
        padding: 4rem 2rem;
        overflow-y: auto;
        justify-content: flex-start;
        align-items: flex-start;
      }
    }
  }

  .nav_bar_icons {
    font-size: 1.5rem;
  }
`;

const HeaderLeft = styled.div`
  flex: 0.1;
  p {
    color: var(--secondary-color);
    font-family: "Ranchers", cursive;
    font-size: 1.875rem;
  }
`;

const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: auto;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex: 0.4;
    justify-content: space-around;
    margin: 0;
  }

  li {
    margin: 0 1rem;
    @media screen and (max-width: 900px) {
      color: #fff;
      margin: 0;
    }
    .nav_link {
      color: var(--primary-color);
      font-family: "Rubik", sans-serif;
      text-decoration: none;
    }
  }
`;

const HeaderRight = styled.div`
  @media screen and (max-width: 900px) {
    flex: 0.2;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  button {
    outline: none;
    background: transparent;
    font-size: 1rem;
    @media screen and (max-width: 900px) {
      color: #fff;
    }
  }
  button:nth-child(1) {
    margin-right: 1rem;
    padding: 0.5rem 2rem;
    border: none;
  }

  button:nth-child(2) {
    padding: 0.5rem 2rem;
    color: var(--secondary-color);
    border: 4px solid var(--secondary-color);
    border-radius: 4px;
    @media screen and (max-width: 900px) {
      color: #fff;
      border: 4px solid var(--primary-color);
    }
  }
`;

const NavBar = styled.nav`
  display: none;
  @media screen and (max-width: 900px) {
    display: block;
  }
`;
