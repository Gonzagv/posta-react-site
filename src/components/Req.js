import React, { useState } from "react";
import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";
import { Button } from "react-bootstrap";

const Div = styled.div`
  background-color: white;
  margin: 10px 10px 20px -50px;
  padding: 20px 0px 20px 10px;
  align-items: center;
`;

const H1 = styled.h1`
  font-family: Ultra, serif;
  text-align: center;
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 10px;
  font-size: 60px;
  color: #005384;
  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size: 60px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 50px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 40px;
  }
`;
const H5 = styled.h5`
  font-size: 30px;
  font-family: Ultra, serif;
  color: #005384;

  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size: 30px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 25px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 20px;
  }
`;
const P = styled.p`
  color: rgb(84, 84, 84);
  font-size: 17px;
  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size: 17px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 15px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 14px;
  }
`;

const Span = styled.span`
  color: #fe7414;
  font-size: 100px;
  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size: 100px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 90px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 80px;
  }
`;
const StyledButton = styled(Button)`
  background-color: #005384;
  font-family: "Arial Black", Gadget, sans-serif;
  padding: 10px 10px 10px 10px;
  margin: 20px 20px 40px 20px;
`;

const Req = function () {
  const [toggleView, setToggleView] = useState(false);

  return (
    <Div id="req">
      <Container>
        <H1>
          <b>Mínimos Requisitos</b>
        </H1>
        <Row>
          <Col>
            <Span>
              <i class="fas fa-fingerprint"></i>
            </Span>
            <H5>
              <b>DNI Argentino</b>
            </H5>
            <P>Nos permite poder evaluarte</P>
          </Col>
          <Col>
            <Span>
              <i class="far fa-smile"></i>
            </Span>
            <H5>
              <b>Más de 18 años</b>
            </H5>
            <P>Necesitamos que seas mayor de edad</P>
          </Col>
          <Col>
            <Span>
              <i class="fas fa-university"></i>
            </Span>
            <H5>
              <b>Cuenta sueldo</b>
            </H5>
            <P>
              Es excluyente que acredites tus haberes en una cuenta bancaria.
            </P>
          </Col>
        </Row>
        {!toggleView && (
          <Container id="ShowButton">
            <StyledButton
              variant="primary"
              onClick={() => setToggleView(!toggleView)}
            >
              Ver Más
            </StyledButton>
          </Container>
        )}
      </Container>
      {toggleView && (
        <Container id="reqRow">
          <Row>
            <Col>
              <Span>
                <i class="fas fa-mobile-alt"></i>
              </Span>
              <H5>
                <b>Teléfono celular</b>
              </H5>
              <P>Te enviaremos un código numérico para re confirmar.</P>
            </Col>
            <Col>
              <Span>
                <i class="fas fa-wallet"></i>
              </Span>
              <H5>
                <b>Ingreso mínimo de $6.000</b>
              </H5>
              <P>
                Queremos cuidarte, por lo que medimos la relación cuota/ingreso.
              </P>
            </Col>
            <Col>
              <Span>
                <i class="far fa-building"></i>
              </Span>
              <H5>
                <b>Antigüedad laboral mínima de 3 meses</b>
              </H5>
              <P>
                Nos interesa cuidarte, por lo que tenemos en cuenta tu
                estabilidad laboral.
              </P>
            </Col>
          </Row>
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Span>
                <i class="far fa-envelope"></i>
              </Span>
              <H5>
                <b>Correo electrónico</b>
              </H5>
              <P>
                En este recibirás nuestro contrato y toda la información
                necesaria.
              </P>
            </Col>
          </Row>
        </Container>
      )}
      {toggleView && (
        <Container id="ShowButtonClose">
          <StyledButton
            variant="primary"
            onClick={() => setToggleView(!toggleView)}
          >
            Ver Menos
          </StyledButton>
        </Container>
      )}
    </Div>
  );
};

export default Req;
