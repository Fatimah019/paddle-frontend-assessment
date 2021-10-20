import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/all";

const SlideCard = ({
  active_card,
  card_body,
  card_body_text,
  card_image,
  customer_name,
  customer_info,
  star_point,
}) => {
  return (
    <CardContainer
      style={{
        border: active_card
          ? "2px solid var(--secondary-color)"
          : "2px solid #dddddd",
      }}
    >
      <CardHeader>
        <div className="card_header_left">
          <img src={card_image} alt="" />
          <div>
            <h3>{customer_name}</h3>
            <p>{customer_info}</p>
          </div>
        </div>
        <div className="card_header_right">
          <p>
            {star_point} <AiFillStar color="#FEA250" />
          </p>
        </div>
      </CardHeader>
      {card_body && <blockquote>{card_body_text}</blockquote>}
    </CardContainer>
  );
};

export default SlideCard;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1rem;
  margin-right: 2rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .card_header_left {
    display: flex;
    align-items: center;
    img {
      object-fit: cover;
      margin-right: 8px;
    }
  }
  .card_header_right {
    p {
      white-space: nowrap;
    }
  }
`;
