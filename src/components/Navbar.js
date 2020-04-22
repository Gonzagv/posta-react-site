import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Link as ScrLink} from 'react-scroll';
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
        display:flex;
        list-style: none;
        font-size: 15px;
        letter-spacing: -1.2px;
        color: #707070;
        text-decoration: none;
        font-style: normal;
        font-variant: normal;
        text-transform: none;
        white-space: nowrap;
    `

    const Li = styled.li`
        font-size: 18px;
        margin: 10px -10px -10px 50px;
        padding: 100px 10px -20px 10px;
        text-decoration: none;
        color: #666666;
        font-family: "Arial Black", Gadget, sans-serif;
    `

    const A2 = styled.a`
        color: #666666;
        font-size: 18px;
        text-decoration: none;
        
    `
    const StyledButton = styled(Button)`
        margin: 10px 10px 15px -100px;
        padding: 15px 15px 15px 10px;
        background-color: rgb(25, 66, 148);
        font-family: "Arial Black", Gadget, sans-serif;
    `

    return(       
        <div className="NavBar">
            <div className="container-fluid">
                <Nav>
                        <Link to = "/">
                            <Img src={process.env.PUBLIC_URL + '/img/posta logo-inverse.png'} /> 
                        </Link>
                    <Ul>
                            <Li> <A2 href="#req">Requisitos</A2></Li>
                            <ScrLink to ="#how">
                            <Li> <A2>Como funciona</A2></Li>
                            </ScrLink>
                        <Link to = "/faqs">
                            <Li>Preguntas Frequentes</Li>
                        </Link>
                            <Li> <A2 href="#info">Contacto</A2></Li>
                    </Ul>
                        <StyledButton variant="primary">
                            PEDÍ TU CRÉDITO
                        </StyledButton>
                </Nav>
            </div>
        </div> 
    );
}

export default Navbar;