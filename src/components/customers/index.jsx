import React from "react";
import styled from "styled-components";
import CustomCarousel from "../uis/carousel";
import SlideCard from "../uis/slidecard";

const Customers = () => {
  return (
    <CustomerContainer>
      <CustomerInner>
        <CustomerHeader>
          <h2>Trusted by Thousands of Happy Customer</h2>
          <p>
            Nam laoreet cursus diam, sed tristique arcu semper non. Suspendisse
            et suscipit est, nec laoreet mi. Nunc pellentesque imperdiet
            ultricies.{" "}
          </p>
        </CustomerHeader>

        <CustomerSlide>
          <CustomCarousel
            carousel_items={[
              <SlideCard
                active_card
                customer_name="Viezh Robert"
                customer_info="Warsaw, Poland"
                card_image="/assets/images/cust1.png"
                star_point={4.5}
                card_body
                card_body_text="“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”"
              />,
              <SlideCard
                customer_name="Yessica Christy"
                customer_info="Shanxi, China"
                card_image="/assets/images/cust2.png"
                star_point={4.5}
                card_body
                card_body_text="“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”"
              />,
              <SlideCard
                customer_name="Yessica Kim Young Jou"
                customer_info="Seoul, South Korea, China"
                card_image="/assets/images/cust3.png"
                star_point={4.5}
                card_body
                card_body_text="“Mauris sem neque, ultrices nec sapien id, consequat laoreet dolor. Ut rhoncus sollicitudin metus, ac lobortis felis dignissim et. Fusce arcu ex”"
              />,
            ]}
          />
        </CustomerSlide>
      </CustomerInner>
    </CustomerContainer>
  );
};

export default Customers;
const CustomerContainer = styled.div`
  position: relative;
`;

const CustomerInner = styled.div``;

const CustomerHeader = styled.div`
  width: 60%;
  text-align: center;
  margin: 0rem auto;

  h2 {
    font-weight: 500;
    margin: 1rem auto;
  }
`;

const CustomerSlide = styled.div`
  width: 90%;
  margin: 3rem 0 3rem auto;
`;
