import React, { useState } from "react";
import Navigation from "../components/Navigation/Navigation";
import CopyRight from "../components/CopyRight";
import styled from "styled-components";
import Accordion from "../components/Accordion/Accordion";
import Terms from "../components/Terms";
import FaqsAccordion from "../components/FaqsAccordion";

const Div = styled.div`
  background-color: white;
`;

const FaqsPage = function () {
  return (
    <div>
      <Div>
        <FaqsAccordion />
        <CopyRight />
        <Terms />
      </Div>
    </div>
  );
};

export default FaqsPage;
