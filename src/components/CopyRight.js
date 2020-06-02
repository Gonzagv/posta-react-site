import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const Img2 = styled.img`
  height: 50px;
  @media (min-width: 1201px) and (max-width: 1900px) {
    height: 40px;
    margin: -20px 0px 0px 0px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    height: 20px;
    margin: 0px 135px 0px 0px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    height: 15px;
    margin: 20px 50px 0px -30px;
  }

`;
const Img = styled.img`
  height: 50px;
  @media (min-width: 1201px) and (max-width: 1900px) {
    height: 40px;
    margin: -20px 0px 0px 0px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    height: 30px;
    margin: 30px;
    margin-left:-5px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    height: 20px;
    margin: 30px -10px 0px -30px;
  }
`;

const Div = styled.div`
  background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
  @media (min-width: 1201px) {
    height: 27vh;
  }

  @media (min-width: 776px) and (max-width: 1199px) {
    padding: 20px;
    height: 25vh;
  }

  @media (min-width: 360px) and (max-width: 775px) {
    height: 20vh;
  }
`;

const StyledCol = styled(Col)`
  @media (min-width: 1200px) {
    margin: 70px 400px 0px 20px;
  }
  @media (min-width: 766px) and (max-width: 1199px) {
    margin: 0px -30px 10px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    margin: 0px 150px 0px 0px;
  }
`;
const StyledCol2 = styled(Col)`
  @media (min-width: 1201px) {
    margin: 70px 0px 0px 0px;
  }
  @media (min-width: 766px) and (max-width: 1199px) {
    margin: 50px 0px 0px 0px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    margin: 50px 0px 0px 0px;
  }
`;
const Span = styled.span`
  padding: 0px 0px 0px 200px;
`;

const H4 = styled.h4`
  font-family: Montserrat, sans-serif;
  font-size: 20px;
  font-family: Ultra, serif;
  color: white;
  margin: 10px;
  @media (min-width: 1201px) {
    font-size: 15px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 10px;
    margin: -10px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 7px;
    padding: 10px 10px 0px 0px;
  }
`;
const A = styled.a`
  color: white;
  text-decoration: none;
  :hover {
    color: #fe7414;
  }
  @media (max-width: 1201px) {
    font-size: 14px;
    text-decoration: none;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 10px;
    text-decoration: none;
    margin: 10px 20px;
    white-space: nowrap;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 7px;
    white-space: nowrap;
    text-decoration: none;
  }
`;
const StyledRow = styled(Row)`
  font-size: 15px;
  padding: 20px 200px 0px 0px;
  @media (min-width: 1201px) {
    padding: 10px 200px 0px 0px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    padding: 0px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    padding: 0px 100px 0px 0px;
  }
`;

const CopyRight = function () {
  return (
    <Div>
      <Container>
        <Row>
          <StyledCol>
            <Img
              src={process.env.PUBLIC_URL + "/img/posta logo.png"}
              alt="white posta logo"
            ></Img>
            <H4>© Copyright postacred.com / Todos los Derechos Reservados.</H4>
          </StyledCol>
          <StyledCol2>
            <Row>
              <Col>
                <A href="https://www.linkedin.com/company/posta-creditos/">
                  <i class="fab fa-linkedin fa-2x hoverColor"></i>
                </A>
              </Col>
              <Col>
                <A href="https://www.instagram.com/creditos.posta/">
                  <i class="fab fa-instagram fa-2x hoverColor"></i>
                </A>
              </Col>
              <Col>
                <A href="https://www.facebook.com/CreditosPosta/">
                  <i class="fab fa-facebook fa-2x hoverColor"></i>
                </A>
              </Col>
              <Col>
                <A href="https://twitter.com/CredPosta">
                  <i class="fab fa-twitter fa-2x hoverColor"></i>
                </A>
              </Col>
            </Row>
          </StyledCol2>
        </Row>
        <Row>
          <Col>
            <StyledRow>
              <Col>
                <A
                  target="_blank"
                  href="../../resources/terminos-y-condiciones.pdf"
                >
                  Términos y Condiciones
                </A>
              </Col>
              <Col>
                <A href="https://www.argentina.gob.ar/defensadelconsumidor">
                  Defensa al Consumidor
                </A>
              </Col>
              <Col>
                <A href="mailto:empleos@postacred.com">Trabaja con nosotros</A>
              </Col>
            </StyledRow>
          </Col>
          <Col>
            <Span>
              <A href="http://qr.afip.gob.ar/?qr=hlqSx8tPhj-LUCJvMcKwTA,,">
                <Img2
                  src={process.env.PUBLIC_URL + "/img/datafiscal.png"}
                  alt="data fiscal"
                ></Img2>
              </A>
            </Span>
          </Col>
        </Row>
      </Container>
    </Div>
  );
};

export default CopyRight;
