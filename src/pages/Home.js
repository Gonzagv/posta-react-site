import React, {useState} from "react";
import Navigation from "../components/Navigation";
import How from "../components/How";
import Req from "../components/Req";
import styled from "styled-components";
import Payment from "../components/Payment";
import Info from "../components/Info";
import Who from "../components/Who";
import Contact from "../components/Contact";
import CopyRight from "../components/CopyRight";

const Div = styled.div`
  background-image: url("/img/posta_hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;
const Div1 = styled.div`
  background-color: #fe7414;
  padding: 100px 10px 100px 0px;
`;
const Div2 = styled.div`
  background-color: #fe7414;
  margin: 0px -10px 0px -50px;
  padding: 100px 10px 100px 0px;
  align-items: center;
  background-size: cover;
`;
const H1 = styled.h1`
  color: white;
  font-size: 50px;
  font-family: "Arial Black", Gadget, sans-serif;
`;

const Home = function (props) {
  return (
    <div>
      <Navigation currentSection="Home"/>
      <Div>
        <Info />
      </Div>
      <Div1>
        <H1>
          ¡Más de <b>22.000 créditos</b> otorgados!
        </H1>
      </Div1>
      <Req />
      <How />
      <Div2>
        <H1>
          Podés tener desde <b>$1.000 hasta $300.000</b> <br />
          de 2 a 24 cuotas
        </H1>
      </Div2>
      <Payment />
      <Who />
      <Contact />
      <CopyRight />
    </div>
  );
};

export default Home;
