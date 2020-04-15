import React from 'react';
import Navbar from '../components/Navbar';
import How from '../components/How';
import styled from 'styled-components';


const Home = function (){

const Div = styled.div`
    background-image: url('/img/posta_hero.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 100vh;
`

    return(
        <Div className="Home">
            <Navbar/>
            <div>
                <h1 className="header center blue-text">
                    <b>Tu Crédito 100% online </b>
                 </h1>
            </div>
            <How/>
        </Div>
    );
}

export default Home;