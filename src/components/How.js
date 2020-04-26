import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col } from 'reactstrap';
import {Button} from 'react-bootstrap';

const Div = styled.div`
    background-image: linear-gradient(to right top,#00253c,#00304d,#003b5f,#004771,#005384);
    opacity: 0.8;
    color: blue;
    align-items: center;
    margin: -20px -10px 0px -100px;
    padding: 100px 10px 100px 0px;
`

const H1 = styled.h1`
    font-family: Ultra, serif;
    text-align: center;
    font-size: 70px;
    color: white;
    padding: 10px 10px 10px 10px;
    margin: 0px 20px 50px 20px;
`

const H2 = styled.h2`
    color: white;
    size: 200px;
`

const H4 = styled.h4`
    color: white;
`

const Span = styled.span`
    color: white;
    font-size: 70px;
    padding: 10px 10px 10px 10px;
`

const StyledButton = styled(Button)`
    background-color: darkorange;
    font-family: "Arial Black", Gadget, sans-serif;
    padding: 10px 10px 10px 10px;
    margin: 100px 20px 20px 20px;
`

const How = function (){
    return(
        <Div id="how">
            <H1>¡Tené tu plata en sólo 15 minutos!</H1>
            <Container>
                <Row>
                    <Col>
                        <H2>1</H2>
                        <H4>Completá los datos del formulario.</H4>
                        <Span>
                            <i class="far fa-edit fa-2x"></i>
                        </Span>
                    </Col>
                    <Col>
                        <H2>2</H2>
                        <H4>Recibí el monto solicitado en tu cuenta.</H4>
                        <Span>
                            <i class="far fa-money-bill-alt fa-2x"></i>
                        </Span>
                    </Col>
                    <Col>
                        <H2>3</H2>
                        <H4>Pagás las cuotas de tu crédito por mes.</H4>
                        <Span>
                            <i class="far fa-calendar-check fa-2x"></i>
                        </Span>
                    </Col>
                </Row>
                <a href="https://app.postacred.com.ar/?utm_source=Home&utm_medium=Sitio&utm_campaign=Organico&utm_term=2018">
                    <StyledButton variant="primary">
                        ¡LO QUIERO! 
                    </StyledButton>
                </a>
            </Container>
        </Div>
    );
}

export default How;