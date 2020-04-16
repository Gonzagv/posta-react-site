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
const B = styled.b`
    background-color: hsla(0,0%,100%,.7);
    margin-top: 50%;
    margin-left: 50%;
    padding: 30px 30px 30px 30px;
    color : darkblue ;
    opacity: 0.8;
    margin: 10px 10px 20px -100px;
    justify-content: center;
    align-items: center;
}
`

    return(
        <Div className="Home">
            <Navbar/>
            <div>
                <h1 className="header center blue-text">
                    <B>Tu crédito 100% online </B>
                 </h1>
            </div>
            <How/>
        </Div>
    );
}

export default Home;