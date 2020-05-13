import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';

const Div = styled.div`
    
`
const H1 = styled.h1`
    background-color: #fe7414;
    color: white;
    height: 15vh;
    font-size: 50px;
    padding: 45px;
`

const FaqsPage = function (){

    return(
        <Div>
            <Navbar />
            <H1>
                <b>Preguntas Frecuentes</b>
            </H1>
        </Div>
    );
}

export default FaqsPage;