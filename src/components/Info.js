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
    border-radius: 10px 10px 10px 10px;
    
  @media (min-width: 1201px) and (max-width: 1900px) {
    
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    
  }
  @media (min-width: 360px) and (max-width: 775px) {
    
  }

  

`

const Div2 = styled.div`
    font-family: Belgrano, serif;
    font-size: 40px;
    color: black;
  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size: 30px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 20px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 15px;
  }
`

const H1 = styled.h1`
    font-family: Ultra, serif;
    text-align: center;
    font-size: 70px;
    color: rgb(25, 66, 148);
    margin: 20px 20px 20px 20px;

  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size:55px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    margin-top:40px;
    font-size:40px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size:25px;
    margin-top:50px;
  }
`

const H4 = styled(animated.h4)`
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 25px;
    color: rgb(84, 84, 84);
    margin: 20px 20px 20px 20px;

  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size:20px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size:15px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size:14px;
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