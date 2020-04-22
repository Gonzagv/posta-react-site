import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-color: hsla(0,0%,100%,.7);
    opacity: 0.8;
    color: blue;
    margin: 10px 10px 20px -100px;
    padding: 200px 10px 100px 10px;
    align-items: center;
    z-index: 15;
    top: 30%;
    left: 30%;
    right: 30%;
    bottom: 30%;
`

const H1 = styled.h1`
    font-family: "Alfa Slab One", cursive;
    text-align: center;
    font-size: 70px;
    color: red;
`

const How = function (){
    return(
        <Div>
            <H1>¡Tené tu plata en sólo 15 minutos!</H1>
        </Div>
    );
}

export default How;