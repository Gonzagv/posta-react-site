import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

const Div = styled.div`
    background-color: hsla(0,0%,100%,.7);
    color: blue;
    align-items: center;
    position: absolute;
    top: 30%;
    left: 20%;
    right: 20%;
    bottom: 45%;
    @media (max-width: 768px) {
    width: 200px;
  }
  @media (max-width: 1024px) {
    font-size:40px;
  }
  @media (max-width: 1024px) {
    font-size:40px;
  }
  @media (max-width: 1024px) {
    font-size:40px;
  }
`

const Div2 = styled.div`
    font-family: Belgrano, serif;
    font-size: 40px;
    color: black;
    @media (max-width: 1600) {
    font-size: 30px;
  }
  @media (max-width: 1400px) {
    font-size:20px;
  }
  @media (max-width: 1024px) {
    font-size:15px;
  }
`

const H1 = styled.h1`
    font-family: Ultra, serif;
    text-align: center;
    font-size: 70px;
    color: rgb(25, 66, 148);
    margin: 20px 20px 20px 20px;

    @media (max-width: 1600px) {
    font-size:55px;
  }
    @media (max-width: 1400px) {
    font-size:40px;
  }
    @media (max-width: 1024px) {
    font-size:25px;
  }
`

const H4 = styled(animated.h4)`
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 25px;
    color: rgb(84, 84, 84);
    margin: 20px 20px 20px 20px;

    @media (max-width: 1600px) {
    font-size:20px;
  }
    @media (max-width: 1400px) {
    font-size:15px;
  }
    @media (max-width: 1024px) {
    font-size: 10px;
  }
  
`
const B = styled.b`
    color: rgb(255, 77, 0);
`



const Info = function (){

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
    });

    return(
        <Div id="info">
            <H1><b>Tu crédito 100% online</b></H1>
            <Div2>
                <H4 style={props}>¡Conseguí hasta <B> $300.000</B> en sólo <B>15 minutos</B>!</H4>
                <H4 style={props}>Al toque y con mínimos requisitos. </H4>
            </Div2>
        </Div>
    );
}

export default Info;