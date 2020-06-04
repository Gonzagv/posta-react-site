import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Div = styled.div`
  background-color: white;
  margin: 0px 10px 20px -50px;
  padding: 20px 10px 100px 10px;
  align-items: center;
  height: 50vh;
`;
const H1 = styled.h1`
  font-family: Ultra, serif;
  text-align: center;
  padding: 10px 10px 10px 10px;
  margin: 30px 10px 50px 10px;
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

const StyledCol = styled(Col)`
  padding: 10px 10px 10px 10px;
`;

const StyledRapipago = styled(animated.img)`
  height: 60px;
  width: 200px;
  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size: 50px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 40px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 30px;
  }
`;
const StyledPagoFacil = styled(animated.img)`
  height: 100px;
  width: 100px;
  @media (min-width: 1201px) and (max-width: 1900px) {
    height: 80px;
    width: 80px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    height: 70px;
    width: 70px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    height: 60px;
    width: 60px;
  }
`;

const SpanDebito = styled.span`
  font-size: 40px;
  color: #005384;
  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size: 40px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 30px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 20px;
  }
`;
const SpanTransferencia = styled.span`
  font-size: 40px;
  color: #005384;
  margin: 0px 0px 40px 0px;
  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size: 40px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 30px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 20px;
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const Payment = function () {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const [props2, set2] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const [props3, set3] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const [props4, set4] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  const [props5, set5] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));
  return (
    <Div id="Payment">
      <Container>
        <H1>
          <b>Medios de Pago</b>
        </H1>
        <Row>
          <Col xs="6">
            <a href="https://www.rapipago.com.ar/rapipagoWeb/index.php">
              <StyledRapipago
                src={process.env.PUBLIC_URL + "/img/rapipago.png"}
                alt="rapipagoLogo"
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set({ xys: calc(x, y) })
                }
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
              ></StyledRapipago>
            </a>
          </Col>
          <StyledCol xs="6">
            <animated.a href="https://pagomiscuentas.com/">
              <animated.img
                src={process.env.PUBLIC_URL + "/img/pagomiscuentas.png"}
                alt="pagomiscuentasLogo"
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set2({ xys: calc(x, y) })
                }
                onMouseLeave={() => set2({ xys: [0, 0, 1] })}
                style={{ transform: props2.xys.interpolate(trans) }}
              ></animated.img>
            </animated.a>
          </StyledCol>
        </Row>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
            <a href="https://www.e-pagofacil.com/">
              <StyledPagoFacil
                src={process.env.PUBLIC_URL + "/img/pagofacil.png"}
                alt="pagofacilLogo"
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set3({ xys: calc(x, y) })
                }
                onMouseLeave={() => set3({ xys: [0, 0, 1] })}
                style={{ transform: props3.xys.interpolate(trans) }}
              ></StyledPagoFacil>
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <SpanDebito>
              <animated.i
                class="far fa-credit-card fa-2x"
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set4({ xys: calc(x, y) })
                }
                onMouseLeave={() => set4({ xys: [0, 0, 1] })}
                style={{ transform: props4.xys.interpolate(trans) }}
              >
                <h5>
                  <b>Débito</b>
                </h5>
              </animated.i>
            </SpanDebito>
          </Col>
          <Col xs="6">
            <SpanTransferencia>
              <animated.i
                class="fas fa-university fa-2x"
                onMouseMove={({ clientX: x, clientY: y }) =>
                  set5({ xys: calc(x, y) })
                }
                onMouseLeave={() => set5({ xys: [0, 0, 1] })}
                style={{ transform: props5.xys.interpolate(trans) }}
              >
                <h5>
                  <b>Transferencia Bancaria</b>
                </h5>
              </animated.i>
            </SpanTransferencia>
          </Col>
        </Row>
      </Container>
    </Div>
  );
};

export default Payment;
