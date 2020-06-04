import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col } from 'reactstrap';
import {Button} from 'react-bootstrap';

const H4 = styled.h4`
    font-family: Montserrat,sans-serif;
    font-size: 45px;
    color: #005384;
    padding-top: 50px;
`
const StyledButton = styled(Button)`
    background-color: #005384;
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 12px;
`

const Div = styled.div`
    height: 53.8vh;
    padding: 60px 0px;
`
const StyledRow = styled(Row)`
    padding-top: 50px;
    color: grey;
    justify-content: space-around;
`
const Span = styled.span`
    font-size: 40px;
    :hover{color:#fe7414};
    @media (min-width: 360px) and (max-width: 860px) {
        font-size: 4vw;
    }
`
const Span2 = styled.span`
    padding: 10px 0px 0px 0px;
`
const StyledRow2 = styled(Row)`
    color: grey;
    justify-content: space-around;
    margin: 20px -30px;
`

const Contact = function(){
    return(
        <Div id="contact">
            <H4><b>Contactanos</b></H4>
            <Container>
                <StyledRow>
                    <Span>
                        <Col><i class="fas fa-headset fa-2x hoverColor"></i></Col>
                    </Span>
                    <Span>
                        <Col><i class="far fa-envelope fa-2x hoverColor"></i></Col>
                    </Span>
                    <Span>
                        <Col><i class="fab fa-whatsapp fa-2x hoverColor"></i></Col>
                    </Span>
                </StyledRow>
                <StyledRow2>
                    <Span2>
                        <Col>
                            <a href="tel:08001127678">
                                <StyledButton>0800 112 7678</StyledButton>
                            </a>
                        </Col>
                    </Span2>
                    <Span2>
                        <Col>
                            <a href="mailto:hola@postacred.com">
                                <StyledButton>hola@postacred.com</StyledButton>
                            </a>
                        </Col>
                    </Span2>
                    <Span2>
                        <Col>
                            <a href="https://wa.me/541156906223">
                                <StyledButton>11 5690 6223</StyledButton>
                            </a>
                        </Col>
                    </Span2>
                </StyledRow2>
            </Container>
        </Div>
        
    )
}

export default Contact;