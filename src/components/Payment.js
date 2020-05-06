import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';

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

const Img = styled.img`
    height: 100px;
    width: 100px;
    margin: 20px 15px 15px 0px;
`


const Payment = function(){
    return(
        <Div id="Payment">
            <Container>
                <H1>Medios de Pago</H1>
                <Row>
                    <Col xs="6">
                        <a href="https://www.rapipago.com.ar/rapipagoWeb/index.php">
                            <Img src={process.env.PUBLIC_URL + '/img/rapipago.png'} alt="rapipagoLogo">
                        
                            </Img>
                        </a>
                    </Col>
                    <Col xs="6">
                        <a href="https://pagomiscuentas.com/">
                            <img src={process.env.PUBLIC_URL + '/img/pagomiscuentas.png'} alt="pagomiscuentasLogo">
                            
                            </img>
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <a href="https://www.e-pagofacil.com/">
                            <Img src={process.env.PUBLIC_URL + '/img/pagofacil.png'} alt="pagofacilLogo">
                            
                            </Img>
                        </a>
                    </Col>
                </Row>
            </Container>
        </Div>
    );
   
}



export default Payment;

