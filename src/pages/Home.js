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
    margin: 0px -10px 0px -100px;
    padding: 100px 10px 100px 0px;
    align-items: center;
    background-size: cover;
`
const H1 = styled.h1`
    color: white;
    font-size: 30px;
    font-family: "Arial Black", Gadget, sans-serif;
`
const B = styled.b`
    font-size:40px;
`

const Home = function (){

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
                <H1>Podés tener desde <br />
                <B>$1.000 hasta $300.000</B> <br />
                de 2 a 24 cuotas</H1>
            </Div2>
            <Payment/>
        </Div>
    );
}

export default Home;