import React from 'react';
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';

const Div = styled.div`
    background-color: hsla(0,0%,100%,.7);
    opacity: 0.8;
    color: blue;
    margin: 10px 10px 20px -100px;
    padding: 40px 10px 10px 10px;
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
    font-family: Ultra, serif;
    text-align: center;
    font-size: 70px;
    color: rgb(25, 66, 148);
`

const H4 = styled(animated.h4)`
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 25px;
    color: rgb(84, 84, 84);
    padding: 10px 10px 20px 10px;
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
                <H4 style={props}>¡Conseguí hasta <B> $300.000</B> en sólo <B>15 minutos!</B></H4>
                <H4 style={props}>Al toque y con mínimos requisitos. </H4>
            </Div2>
        </Div>
    );
}

export default Info;