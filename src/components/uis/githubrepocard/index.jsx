import React from "react";
import styled from "styled-components";
import { getFormattedDate } from "../../../utils";

const ListCard = ({
  list_card_image,
  list_card_heading,
  list_card_description,
  list_card_star_count,
  list_card_issues_count,
  list_card_submission_date,
  list_card_owner_name,
}) => {
  return (
    <>
      <ListContainer>
        <div className="card_image_container">
          <img src={list_card_image} alt="" />
        </div>
        <div className="list_card_info">
          <h2>{list_card_heading}</h2>
          <p className="description">{list_card_description}</p>
          <div className="list_card_info_bottom">
            <label>Stars: {list_card_star_count}</label>
            <label>Issues: {list_card_issues_count}</label>
            <span>
              Submitted on {getFormattedDate(list_card_submission_date)} by{" "}
              {list_card_owner_name}
            </span>
          </div>
        </div>
      </ListContainer>
    </>
  );
};

export default ListCard;

const ListContainer = styled.li`
  background: #ffffff;
  border-radius: 10px;
  padding: 2rem 1.5rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .card_image_container {
    flex: 0.1;
    margin-right: 1rem;
    img {
      width: 100%;

      @media screen and (max-width: 768px) {
        width: 50%;
      }
    }
  }
  .list_card_info {
    flex: 0.9;
    .description {
      margin: 0.5rem 0rem;
    }
    .list_card_info_bottom {
      display: flex;
      align-items: center;
      margin-top: 1rem;
      @media screen and (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
        label {
          margin-bottom: 1rem;
        }
      }
      label {
        margin-right: 2rem;
        white-space: nowrap;
        padding: 0.5rem 1rem;
        border: 1px solid gray;
        border-radius: 4px;
      }
    }
  }
`;
