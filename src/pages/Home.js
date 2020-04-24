import React from 'react';
import Navbar from '../components/Navbar';
import How from '../components/How';
import Req from '../components/Req';
import styled from 'styled-components';
import Info from '../components/Info';
import { useState } from 'react';

const Home = function (){

const Div = styled.div`
    background-image: url('/img/posta_hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
`
const Div1 = styled.div`
    background-color: darkorange;
    margin: 980px -10px 0px -100px;
    padding: 100px 10px 100px 0px;
    align-items: center;
    background-size: cover;
`
const Div2 = styled.div`
    background-color: darkorange;
    margin: -20px -10px 0px -100px;
    padding: 100px 10px 100px 0px;
    align-items: center;
    background-size: cover;
`
const H1 = styled.h1`
    color:white;
    font-size:40px;
    font-family: "Arial Black", Gadget, sans-serif;
    padding: 10px 10px 10px 10px;
    margin : 10px 10px 10px 10px;
`
const B = styled.b`
    font-size:40px;
`

    return(
        <Div>
            <Navbar/>
            <Div1>
                <H1>¡Más de <B>22.000 créditos</B> otorgados!</H1>
            </Div1>
            <Req/>
            <Info/>
            <How/>
            <Div2>
                <H1>Podés tener desde <B>$1.000 hasta $300.000</B> de 2 a 24 cuotas</H1>
            </Div2>
        </Div>
    );
}

export default Home;