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
        margin: 5px 15px 15px -400px;
        height: 50px;
        width: 150px;
    `

    const Ul = styled.ul`
        width:50%;
        display:flex;
        justify-content: center;
        align-items: center;
        list-style: none;
    `

    const Li = styled.li`
        font-size: 20px;
        color: black;
        margin: 10px 10px 15px 100px;
    `
    const A = styled.a`
        align-items: right;
        margin: 10px 10px 15px 200px;
        border-style: solid;
        border-width : 1px 1px 1px 1px;
        text-decoration : none;
        padding : 4px;
        border-color : #000000;
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
                                <Li className="grey-text scroll"><a href="#how">Como funciona</a></Li>
                                <Li> <a href="#req">Requisitos</a></Li>
                            <Link to = "/faqs">
                                <Li>Preguntas Frequentes</Li>
                            </Link>
                                <Li> <a href="#info">Contacto</a></Li>
                            <A href = 'https://app.postacred.com.ar/?utm_source=Home&utm_medium=Sitio&utm_campaign=Organico&utm_term=2018'>PEDÍ TU CRÉDITO</A>
                        </Ul>
                    </Nav>
                </div>
            </div>
        </ScrollspyNav>
        
    );
}

export default Navbar;