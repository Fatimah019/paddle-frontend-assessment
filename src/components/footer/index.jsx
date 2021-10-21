import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInner>
        <div className="footer_top">
          <div className="footer_top_left">
            <h3>PEDDLE</h3>
            <p>
              Praesent mollis lobortis nisl nec laoreet. Duis euismod nisl nec
              ante egestas ullamcorper. Duis id mauris consequat, ultrices
              ligula at, laoreet mag.
            </p>
          </div>
          <div className="footer_top_right">
            <ul>
              <li>Product</li>
              <li>Praesent</li>
              <li>Laoreet</li>
              <li>Laoreet</li>
              <li>Server</li>
            </ul>
            <ul>
              <li>Product</li>
              <li>Praesent</li>
              <li>Laoreet</li>
              <li>Laoreet</li>
              <li>Server</li>
            </ul>
            <ul>
              <li>Product</li>
              <li>Praesent</li>
              <li>Laoreet</li>
              <li>Laoreet</li>
              <li>Server</li>
            </ul>
          </div>
        </div>
        <p className="copyright_text">©2020PADDLE</p>
      </FooterInner>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 8rem 0rem 3rem 0rem;
  position: relative;

  @media screen and (max-width: 600px) {
    padding: 4rem 0rem 3rem 0rem;
  }
`;
const FooterInner = styled.div`
  width: 80%;
  margin: auto;

  .footer_top {
    display: grid;
    grid-template-columns: [col1-start] 1fr [col1-end col2-start] 2fr [col2-end];
    column-gap: 3rem;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
      row-gap: 1rem;
    }
    .footer_top_left {
      flex: 0.35;
      h3 {
        color: var(--secondary-color);
        font-family: "Ranchers", cursive;
        font-weight: 400;
        font-size: 1.625rem;
      }
      p {
        margin-top: 1rem;
      }
    }

    .footer_top_right {
      flex: 0.65;
      display: flex;
      justify-content: space-between;

      @media screen and (max-width: 480px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(49%, 1fr));
      }
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        li {
          margin: 1rem 0rem;
        }
        li:nth-child(1) {
          font-weight: 700;
        }
      }
      ul:nth-child(2) {
        flex: 0.4;
      }
    }
  }
  .copyright_text {
    color: #afb5c0;
    margin-top: 1.5rem;
  }
`;
