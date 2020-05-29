import React, { useState } from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as ScrLink } from "react-scroll";
import styled from "styled-components";

const Img = styled.img`
  margin: 0px 0px 0px 140px;
  height: 50px;
  width: 150px;

  @media (max-width: 1600px) {
    height: 40px;
    width: 120px;
    margin: 20px 15px 15px 0px;
  }
  @media (max-width: 1400px) {
    height: 30px;
    width: 100px;
  }
`;

const Div = styled.div`
  height: 100%;
  top: 0;
`;

const Li = styled.li`
  font-size: 18px;
  margin: 30px -10px -10px 125px;
  padding: 100px 10px -10px 10px;
  text-decoration: none;
  color: #666666;
  font-family: "Arial Black", Gadget, sans-serif;
  :hover {
    text-decoration: none;
  }
`;

const A2 = styled.a`
  color: #666666;
  text-decoration: none;
`;
const StyledButton = styled(Button)`
  margin: 15px 15px 15px 200px;
  padding: 15px 15px 15px 15px;
  background-color: #191970;
  font-family: "Arial Black", Gadget, sans-serif;
  text-decoration: none;
  color: white;
`;
const A = styled.a`
  text-decoration: none;
  color: white;
`;

function Navigation() {
  return (
    <Div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Link to="/">
          <Img src={process.env.PUBLIC_URL + "/img/posta logo-inverse.png"} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <ScrLink
              activeClass="active"
              to="req"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Li>
                {" "}
                <A2>Requisitos</A2>
              </Li>
            </ScrLink>
            <ScrLink
              activeClass="active"
              to="how"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Li>
                {" "}
                <A2>Como funciona</A2>
              </Li>
            </ScrLink>
            <Link to="/faqs">
              <Li>Preguntas Frequentes</Li>
            </Link>
            <ScrLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Li>
                <A2>Contacto</A2>
              </Li>
            </ScrLink>

            <A href="https://app.postacred.com.ar/?utm_source=Home&utm_medium=Sitio&utm_campaign=Organico&utm_term=2018">
              <StyledButton variant="primary">PEDÍ TU CRÉDITO</StyledButton>
            </A>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Div>
  );
}

export default Navigation;
