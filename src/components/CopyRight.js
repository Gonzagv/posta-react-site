import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const Img = styled.img`
    height: 50px;
`

const Div = styled.div`
    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
    height: 30vh;
`

const StyledCol = styled(Col)`
    margin : 100px 400px 0px 0px;
`
const StyledCol2 = styled(Col)`
    margin : 100px 0px 0px 0px;
`
const Span = styled.span`
    padding: 0px 0px 0px 200px;
`

const H4 = styled.h4`
    font-family: Montserrat,sans-serif;
    font-size: 20px;
    font-family: Ultra, serif;
    color: white;
    margin: 10px;
`
const A = styled.a`
    color:white;
    text-transform: none;
    list-style: none;
`
const StyledRow = styled(Row)`
    font-size:15px;
    padding: 20px 200px 0px 0px;
`


const CopyRight = function(){
    return(
        <Div>
            <Container>
                <Row>
                    <StyledCol>
                        <Img src={process.env.PUBLIC_URL + '/img/posta logo.png'} alt="white posta logo"></Img>
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
                                <A target="_blank" href="../../resources/terminos-y-condiciones.pdf">Términos y Condiciones</A>
                            </Col>
                            <Col>
                                <A href="https://www.argentina.gob.ar/defensadelconsumidor">Defensa al Consumidor</A>
                            </Col>
                            <Col>
                                <A href="mailto:empleos@postacred.com">Trabaja con nosotros</A>
                            </Col>
                        </StyledRow>
                    </Col>
                    <Col>
                        <Span>
                            <A href="http://qr.afip.gob.ar/?qr=hlqSx8tPhj-LUCJvMcKwTA,,"><img src={process.env.PUBLIC_URL + '/img/datafiscal.png'} alt="data fiscal"></img></A>
                        </Span>
                    </Col>
                </Row>
            </Container>
        </Div>
    )
}

export default CopyRight;