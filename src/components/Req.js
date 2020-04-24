import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col } from 'reactstrap';


const Div = styled.div`
    background-color: white;
    margin: 10px 10px 20px -100px;
    padding: 20px 10px 100px 10px;
    align-items: center;
`

const H1 = styled.h1`
    font-family: Ultra, serif;
    text-align: center;
    padding: 10px 10px 10px 10px;
    margin: 10px 10px 10px 10px;
    font-size: 60px;
    color: rgb(25, 66, 148);
`
const H5 = styled.h5`
    font-size: 30px;
    font-family: Ultra, serif;
    color: rgb(25, 66, 148);
`
const P = styled.p`
    color: rgb(84, 84, 84);
    font-size: 17px;
`

const Span = styled.span`
    color: darkorange;
    font-size: 100px;
`

const Req = function (){
    return(
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
                            <H5>DNI Argentino</H5>
                            <P>Nos permite poder evaluarte</P>
                        </Col>
                        <Col>
                            <Span>
                                <i class="far fa-smile"></i>
                            </Span>
                            <H5>Más de 18 años</H5>
                            <P>Necesitamos que seas mayor de edad</P>
                        </Col>
                        <Col>
                            <Span>
                                <i class="fas fa-university"></i>
                            </Span>
                            <H5>Cuenta sueldo</H5>
                            <P>Es excluyente que acredites tus haberes en una cuenta bancaria.</P>
                        </Col>
                    </Row>
            </Container>
        </Div>
    );
}

export default Req;