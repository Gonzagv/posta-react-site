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
        margin: 20px 15px 15px 0px;
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
        margin: 30px -10px -10px 125px;
        padding: 100px 10px -10px 10px;
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
        margin: 15px 15px 15px 200px;
        padding: 15px 15px 15px 15px;
        background-color: #191970;
        font-family: "Arial Black", Gadget, sans-serif;
        text-decoration: none;
        color:white;
    `
    const A = styled.a`
        text-decoration:none;
        color:white;
    `

    return(      
        <div className="NavBar">
            <div className="container-fluid">
                <Nav>
                        
                    <Ul>
                        <Link to = "/">
                            <Img src={process.env.PUBLIC_URL + '/img/posta logo-inverse.png'} /> 
                        </Link>
                            <ScrLink activeClass="active"
                                     to="req"
                                     spy={true}
                                     smooth={true}
                                     offset={-70}
                                     duration= {500}>
                            <Li> <A2>Requisitos</A2></Li>
                            </ScrLink>
                            <ScrLink activeClass="active"
                                     to="how"
                                     spy={true}
                                     smooth={true}
                                     offset={-70}
                                     duration= {500}>
                            <Li> <A2>Como funciona</A2></Li>
                            </ScrLink>
                        <Link to = "/faqs">
                            <Li>Preguntas Frequentes</Li>
                        </Link>
                            <ScrLink activeClass="active"
                                     to="contact"
                                     spy={true}
                                     smooth={true}
                                     offset={-70}
                                     duration= {500}>
                            <Li><A2>Contacto</A2></Li>
                            </ScrLink>
                        
                            <A href="https://app.postacred.com.ar/?utm_source=Home&utm_medium=Sitio&utm_campaign=Organico&utm_term=2018">
                                <StyledButton variant="primary">
                                PEDÍ TU CRÉDITO
                                </StyledButton>
                            </A>
                        
                    </Ul>
                </Nav>
            </div>
        </div> 
    );
}

export default Navbar;