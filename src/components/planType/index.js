import React from "react";
import PlanCard from "../uis/plancard";
import styled from "styled-components";

const Plan = () => {
  return (
    <PlanMain>
      <PlanHeader>
        <h2>Choose Your Plan</h2>
        <p>
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </PlanHeader>
      <PlanContainer>
        <PlanCard
          plan_card_image="/assets/images/plan1.png"
          plan_card_type="Free Plan"
          plan_card_list={[
            "Mauris sem neque",
            "Mauris sem neque",
            "Mauris sem neque",
            "Mauris sem neque",
          ]}
          inactive_plan
        />
        <PlanCard
          plan_card_image="/assets/images/plan2.png"
          plan_card_type="Standard Plan"
          plan_card_list={[
            "Mauris sem neque",
            "Mauris sem neque",
            "Mauris sem neque",
            "Mauris sem neque",
            "Mauris sem neque",
          ]}
          plan_card_price={9}
          inactive_plan
        />
        <PlanCard
          active_card
          plan_card_image="/assets/images/plan3.png"
          plan_card_type="Premium Plan"
          plan_card_list={[
            "Mauris sem neque",
            "Mauris sem neque",
            "Mauris sem neque",
            "Mauris sem neque",
            "Mauris sem neque",
            "Mauris sem neque",
          ]}
          plan_card_price={12}
        />
      </PlanContainer>
    </PlanMain>
  );
};
export default Plan;

const PlanMain = styled.div`
  padding: 0rem 0rem;
`;
const PlanHeader = styled.div`
  width: 60%;
  margin: 0rem auto 2rem auto;
  text-align: center;

  h2 {
    font-weight: 800;
    color: #0b132a;
  }
  p {
    margin: 1rem 0rem;
  }
`;
const PlanContainer = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  column-gap: 1rem;
  row-gap: 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(48%, 1fr));
  }
`;
