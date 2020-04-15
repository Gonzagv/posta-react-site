import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Navbar = function(){

    const Nav = styled.nav`
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 10vh;
   `
    const Img = styled.img`
        position: left;
        margin: 10px 15px 15px -400px;
    `

    const Ul = styled.ul`
        width:50%;
        display:flex;
        justify-content: center;
        align-items: center;
    `

    const Li = styled.li`
        font-size: 20px;
        color: grey;
        margin: 10px 15px 15px;
    `

    return(
        <div className="NavBar">
            <div className="container-fluid">
                <Nav>
                    <Ul>
                        <Link to = "/">
                            <Img src={process.env.PUBLIC_URL + '/img/logo-posta.png'} /> 
                        </Link>
                            <Li>Como funciona</Li>
                            <Li>Requisitos</Li>
                        <Link to = "/faqs">
                            <Li>Preguntas Frequentes</Li>
                        </Link>
                            <Li>Contacto</Li>
                        <a href = 'https://app.postacred.com.ar/?utm_source=Home&utm_medium=Sitio&utm_campaign=Organico&utm_term=2018'>PEDÍ TU CRÉDITO</a>
                    </Ul>
                </Nav>
            </div>
        </div>
        
    );
}

export default Navbar;