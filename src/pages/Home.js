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
    margin: 980px 10px 0px -200px;
    padding: 100px 10px 100px 100px;
    align-items: center;
    z-index: 15;
    top: 30%;
    left: 30%;
    right: 30%;
`
const H1 = styled.h1`
    color:white;
    font-size:50px;
    font-family: "Arial Black", Gadget, sans-serif;
    padding: 10px 10px 10px 10px;
`

    return(
        <Div>
            <Navbar/>
            <Div1>
                <H1>¡Más de 22.000 créditos otorgados!</H1>
            </Div1>
            <Req/>
            <Info/>
            <How/>
        </Div>
    );
}

export default Home;