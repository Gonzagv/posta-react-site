import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ScrollspyNav from "react-scrollspy-nav";

const Navbar = function(){

    const Nav = styled.nav`
        display: flex;
        justify-content: space-around;
        align-items: center;
        min-height: 10vh;
   `
    const Img = styled.img`
        position: left;
        margin: 5px 15px 15px -200px;
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
    `
    const A = styled.a`
        align-items: right;
        margin: 10px 10px 15px 200px;
        border-style: solid;
        border-width : 1px 1px 1px 1px;
        padding : 4px;
        color: white;
        border-color : #000000;
        box-shadow: 3px 4px 0px 0px #1564ad;
	    background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
	    background-color:#79bbff;
	    border-radius:5px;
	    border:1px solid #337bc4;
	    display:inline-block;
	    cursor:pointer;
	    color:#ffffff;
	    font-family:Arial;
	    font-size:17px;
	    font-weight:bold;
	    padding:12px 44px;
	    text-decoration:none;
	    text-shadow:0px 1px 0px #528ecc;
    `

    const A2 = styled.a`
        color: #666666;
        font-size: 20px;
        text-decoration: none;
        
    `

    return(
        <ScrollspyNav
                    scrollTargetIds={["how", "req", "info"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                
            <div className="NavBar">
                <div className="container-fluid">
                    <Nav>
                        <Ul>
                            <Link to = "/">
                                <Img src={process.env.PUBLIC_URL + '/img/posta logo-inverse.png'} /> 
                            </Link>
                                <Li className="grey-text scroll"><A2 href="#how">Como funciona</A2></Li>
                                <Li> <A2 href="#req">Requisitos</A2></Li>
                            <Link to = "/faqs">
                                <Li>Preguntas Frequentes</Li>
                            </Link>
                                <Li> <A2 href="#info">Contacto</A2></Li>
                            <A href = 'https://app.postacred.com.ar/?utm_source=Home&utm_medium=Sitio&utm_campaign=Organico&utm_term=2018'>PEDÍ TU CRÉDITO</A>
                        </Ul>
                    </Nav>
                </div>
            </div>
        </ScrollspyNav>
        
    );
}

export default Navbar;