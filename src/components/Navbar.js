import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ScrollspyNav from "react-scrollspy-nav";
import {Button} from 'react-bootstrap';

const Navbar = function(){

    const Nav = styled.nav`
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 10vh;
   `
    const Img = styled.img`
        position: left;
        margin: 5px 15px 15px 0px;
        height: 50px;
        width: 150px;
    `

    const Ul = styled.ul`
        width:50%;
        display:flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        font-family: "Arial Black", Gadget, sans-serif;
        font-size: 15px;
        letter-spacing: -1.2px;
        word-spacing: 0.8px;
        color: #707070;
        font-weight: 700;
        text-decoration: none;
        font-style: normal;
        font-variant: normal;
        text-transform: none;
        white-space: nowrap;
    `

    const Li = styled.li`
        font-size: 20px;
        margin: 10px 10px 15px 100px;
        text-decoration: none;
        color: #666666;
        justify-content: space-around;
    `

    const A2 = styled.a`
        color: #666666;
        font-size: 20px;
        text-decoration: none;
        
    `
    const StyledButton = styled(Button)`
        margin: 10px 10px 15px 300px;
        padding: 20px 20px 20px 20px;
        background-color: rgb(29, 85, 226);
    `

    return(       
        <div className="NavBar">
            <div className="container-fluid">
                <Nav>
                    <Ul>
                        <Link to = "/">
                            <Img src={process.env.PUBLIC_URL + '/img/posta logo-inverse.png'} /> 
                        </Link>
                            <Li> <A2 href="#how">Como funciona</A2></Li>
                            <Li> <A2 href="#req">Requisitos</A2></Li>
                        <Link to = "/faqs">
                            <Li>Preguntas Frequentes</Li>
                        </Link>
                            <Li> <A2 href="#info">Contacto</A2></Li>
                        <StyledButton variant="primary">
                            PEDÍ TU CRÉDITO
                        </StyledButton>
                    </Ul>
                </Nav>
            </div>
        </div> 
    );
}

export default Navbar;