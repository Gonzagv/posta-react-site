import React from "react";
import Navigation from "../components/Navigation/Navigation";
import CopyRight from "../components/CopyRight";
import styled from "styled-components";
import Terms from "../components/Terms";
import FaqsAccordion from "../components/FaqsAccordion";

const Div = styled.div`
  background-color: white;
`;

const FaqsPage = function (props) {
  return (
    <div>
      <Div>
        <Navigation currentSection="FaqsPage" />
        <FaqsAccordion />
        <CopyRight />
        <Terms />
      </Div>
    </div>
  );
};

export default FaqsPage;
