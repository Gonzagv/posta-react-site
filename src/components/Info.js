import React from 'react';
import styled from 'styled-components';
import {useSpring, animated, useTransition} from 'react-spring';

const Div = styled.div`
    background-color: hsla(0,0%,100%,.7);
    opacity: 0.8;
    color: blue;
    margin: 10px 10px 20px -100px;
    padding: 30px 10px 10px 10px;
    align-items: center;
    position: absolute;
    z-index: 15;
    top: 30%;
    left: 30%;
    right: 30%;
    bottom: 30%;
`

const Div2 = styled.div`
    padding: 60px 10px 10px 10px;
    font-family: Belgrano, serif;
    font-size: 40px;
    color: black;
`

const H1 = styled.h1`
    font-family: "Alfa Slab One", cursive;
    text-align: center;
    font-size: 70px;
    color: rgb(29, 85, 226);
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
                <animated.h4 style={props}>¡Conseguí hasta $300.000 en sólo 15 minutos!</animated.h4>
                <animated.h4 style={props}>Al toque y con mínimos requisitos. </animated.h4>
            </Div2>
        </Div>
    );
}

export default Info;