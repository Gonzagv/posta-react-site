import React, { useState } from "react";
import { Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as ScrLink } from "react-scroll";
import styled from "styled-components";
import "./Navigation.css";

const Img = styled.img`
  margin-left: 140px;
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

const StyledNav = styled(Navbar)`
  height: 6em;
`;

const Li = styled.li`
  font-size: 18px;
  margin: 0px -10px -10px 155px;
  text-decoration: none;
  color: #005384;
  font-family: "Arial Black", Gadget, sans-serif;
  :hover {
    text-decoration: none;
  }
`;

const Li2 = styled.li`
  font-size: 18px;
  text-decoration: none;
  margin-left: 1100px;
  color: #005384;
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
  background-color: #191970;
  font-family: "Arial Black", Gadget, sans-serif;
  text-decoration: none;
  color: white;
`;
const A = styled.a`
  text-decoration: none;
  color: white;
`;

function Navigation(props) {
  if (props.currentSection === "Home") {
    return (
      <StyledNav bg="light" expand="lg" fixed="top">
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
          </Nav>
        </Navbar.Collapse>
        <A href="https://app.postacred.com.ar/?utm_source=Home&utm_medium=Sitio&utm_campaign=Organico&utm_term=2018">
          <StyledButton variant="primary">PEDÍ TU CRÉDITO</StyledButton>
        </A>
      </StyledNav>
    );
  } else if (props.currentSection === "FaqsPage") {
    return (
      <StyledNav bg="light" expand="lg" sticky="top">
        <Link to="/">
          <Img src={process.env.PUBLIC_URL + "/img/posta logo-inverse.png"} />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Li2>
              <NavDropdown title="Leyenda" id="nav-dropdown">
                <NavDropdown.Item>
                  <ScrLink
                    activeClass="active"
                    to="comofuncionamos"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Cómo Funcionamos
                  </ScrLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <ScrLink
                    activeClass="active"
                    to="comosolicitar"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    ¿Cómo solicitar un crédito?
                  </ScrLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <ScrLink
                    activeClass="active"
                    to="clientes"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Clientes
                  </ScrLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <ScrLink
                    activeClass="active"
                    to="incrementarmonto"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    ¿Querés incrementar el monto de tu crédito?
                  </ScrLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <ScrLink
                    activeClass="active"
                    to="datosrelevantes"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Consultas sobre datos relevantes
                  </ScrLink>
                </NavDropdown.Item>
              </NavDropdown>
            </Li2>
          </Nav>
        </Navbar.Collapse>
        <A href="https://app.postacred.com.ar/?utm_source=Home&utm_medium=Sitio&utm_campaign=Organico&utm_term=2018">
          <StyledButton variant="primary">PEDÍ TU CRÉDITO</StyledButton>
        </A>
      </StyledNav>
    );
  }
}

export default Navigation;
