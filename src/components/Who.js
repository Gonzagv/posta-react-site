import React from "react";
import styled from "styled-components";

const Div = styled.div`
  margin: 0px -10px;
  background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
  height: 509px;
  padding: 60px;
`;

const Img = styled.img`
  margin: -30px 0px 0px -600px;
  width: 329px;
  position: absolute;
  @media (min-width: 360px) and (max-width: 1280px) {
    visibility: hidden;
  }
`;
const H4 = styled.h4`
  font-family: Montserrat, sans-serif;
  color: #fff;
  font-size: 50px;
  @media (min-width: 766px) and (max-width: 1910px) {
    font-size: 40px;
    margin: 0px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 30px;
    margin: 0px;
  }
`;
const H6 = styled.h6`
  font-family: Montserrat, sans-serif;
  color: #fff;
  @media (min-width: 766px) and (max-width: 1910px) {
    margin: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    margin: 0px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
const ImgPosta = styled.img`
  padding-bottom: 10px;
  height: 40px;
`;
const Pre = styled.pre`
  font-family: Montserrat, sans-serif;
  color: #fff;
  font-size: 25px;
  @media (min-width: 766px) and (max-width: 1910px) {
    font-size: 20px;
    margin: 0px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 15px;
    margin: 0px;
  }
`;

const Who = function () {
  return (
    <Div>
      <Img src={process.env.PUBLIC_URL + "/img/phone-in-hand.png"} />
      <H4>
        <b>¿Quiénes somos?</b>
      </H4>
      <H6>
        Somos la <b>mejor alternativa</b> para <b>vos.</b>
      </H6>
      <Pre>
        Nos interesa satisfacer las necesidades de
        <br />
        las <b>personas</b>, actuando como un{" "}
        <b>
          facilitador
          <br />
          financiero
        </b>
        , a través de un equipo de trabajo
        <br />
        comprometido que brinda{" "}
        <b>
          asesoría
          <br />
          personalizada{" "}
        </b>
        de forma ágil e integral
        <br />
        en conjunto con la innovación tecnológica,
        <br />
        trascendiendo nuestras propias fronteras.
      </Pre>
      <H6>
        <b>Somos fintech, somos </b>{" "}
        <ImgPosta
          src={process.env.PUBLIC_URL + "/img/posta logo.png"}
          alt="white posta logo"
        ></ImgPosta>
      </H6>
    </Div>
  );
};

export default Who;
