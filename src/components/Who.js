import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    background-image: linear-gradient(147deg, #000000 0%, #04619f 74%);
    height: 53.7vh;
`

const Img = styled.img`
    margin: -30px 0px 0px -700px;
`
const H4 = styled.h4`
    font-family: Montserrat,sans-serif;
    margin: -500px 0px 0px 600px;
    color: #fff;
    font-size: 50px;
`
const H6 = styled.h6`
    font-family: Montserrat,sans-serif;
    color: #fff;
    font-size: 25px;
    margin: 30px 0px 0px 600px;
`

const Who = function(){
    return(
        <Div>
            <Img src={process.env.PUBLIC_URL + '/img/phone-in-hand.png'} />
            <H4><b>¿Quiénes somos?</b></H4>
            <H6>Somos la <b>mejor alternativa</b> para <b>vos.</b></H6>
            <H6>Nos interesa satisfacer las necesidades de<br/>
            las <b>personas</b>, actuando como un <b>facilitador<br/>
            financiero</b>, a través de un equipo de trabajo<br/>
            comprometido que brinda <b>asesoría<br/>
            personalizada </b>de forma ágil e integral<br/>
            en conjunto con la innovación tecnológica,<br/>
            trascendiendo nuestras propias fronteras.</H6>
            
        </Div>
    )
}

export default Who;