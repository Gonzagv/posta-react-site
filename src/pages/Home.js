import React from 'react';
import Navbar from '../components/Navbar';
import How from '../components/How';
import Req from '../components/Req';
import styled from 'styled-components';
import Payment from '../components/Payment';
import Info from '../components/Info';

const Div = styled.div`
    background-image: url('/img/posta_hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
    margin: 0;
`
const Div1 = styled.div`
    background-color: #fe7414;
    margin: 980px -10px 0px -50px;
    padding: 100px 10px 100px 0px;
    align-items: center;
    background-size: cover;
`
const Div2 = styled.div`
    background-color: #fe7414;
    margin: 0px -10px 0px -50px;
    padding: 100px 10px 100px 0px;
    align-items: center;
    background-size: cover;
`
const H1 = styled.h1`
    color: white;
    font-size: 50px;
    font-family: "Arial Black", Gadget, sans-serif;
`

const Home = function (){

    return(
        <Div>
            <Navbar/>
            <Info/>
            <Div1>
                <H1>¡Más de <b>22.000 créditos</b> otorgados!</H1>
            </Div1>
            <Req/>
            <How/>
            <Div2>
                <H1>Podés tener desde <b>$1.000 hasta $300.000</b> <br/>
                de 2 a 24 cuotas</H1>
            </Div2>
            <Payment/>
        </Div>
    );
}

export default Home;