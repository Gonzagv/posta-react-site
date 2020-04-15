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
            <How/>
        </Div>
    );
}

export default Home;