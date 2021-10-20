import React from "react";
import styled from "styled-components";

const PlanCard = ({
  active_card,
  plan_card_image,
  plan_card_type,
  plan_card_list,
  plan_card_price,
  inactive_plan,
}) => {
  return (
    <CardContainer
      style={{
        border: active_card
          ? "2px solid var(--secondary-color)"
          : "2px solid #dddddd",
      }}
    >
      <div className={active_card ? "active_card" : "inactive_card"}></div>

      <div className="card_image_container">
        <img src={plan_card_image} alt="" />
      </div>
      <ul>
        <h3>{plan_card_type}</h3>

        {plan_card_list.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <div className="plan_price_container">
        <div className="plan_price">
          {plan_card_price ? (
            <div className="plan_price">
              <h3>$ {plan_card_price}</h3>
              <span> / mo</span>
            </div>
          ) : (
            <h3>Free</h3>
          )}
        </div>
        <div>
          <button className={inactive_plan ? "inactive_plan" : "active_plan"}>
            Select
          </button>
        </div>
      </div>
    </CardContainer>
  );
};

export default PlanCard;

const CardContainer = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .card_image_container {
    img {
      width: 100%;
    }
  }

  ul {
    flex: 1;
    margin: 0;
    padding: 0;
    margin-top: 1rem;

    li {
      margin: 1rem 0rem;
      list-style: none;
    }

    li::before {
      content: "✔ ";
      color: #2fab73;
      padding-right: 0.5rem;
    }
  }

  .plan_price_container {
    text-align: center;
    margin-top: 1rem;
    .plan_price {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      padding: 0.5rem 2rem;
      outline: none;
      margin-top: 1rem;
      border-radius: 4px;
      border: 3px solid var(--secondary-color);
    }
    .inactive_plan {
      color: var(--secondary-color);
      background: transparent;
    }
    .active_plan {
      background-color: var(--secondary-color);
      color: #fff;
    }
  }
`;
