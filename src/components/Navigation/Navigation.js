import React from "react";
import { Navbar, Button, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as ScrLink } from "react-scroll";
import styled from "styled-components";
import "./Navigation.css";

const Img = styled.img`
  margin-left: 80px;
  height: 50px;
  width: 150px;
  margin-top: 15px;

  @media (max-width: 1600px) {
    height: 40px;
    width: 120px;
    margin-left: 80px;
  }
  @media (max-width: 1400px) {
    height: 35px;
    width: 100px;
    margin-left: 80px;
  }
  @media (min-width: 360px) {
    margin-bottom: 20px;
    height: 40px;
    width: 120px;
    margin-left: 20px;
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
  @media (min-width: 1201px) and (max-width: 1900px) {
    margin: 0px -10px -10px 80px;
    font-size: 18px;
    margin-bottom: 0px;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    margin: 0px -10px -10px 45px;
    font-size: 16px;
    margin-bottom: 0px;
    margin-left: 50px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    margin: 0px -10px -10px 40px;
    font-size: 16px;
    margin-bottom: 0px;
  }

  font-family: "Arial Black", Gadget, sans-serif;
  :hover {
    text-decoration: none;
  }
`;

const Li2 = styled.li`
  font-size: 20px;
  text-decoration: none;
  margin-left: 50px;
  color: #005384;
  @media (min-width: 1201px) and (max-width: 1900px) {
    margin-left: 50px;
    font-size: 18px;
    color: #005384;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    font-size: 18px;
    margin-left: 50px;
    color: #005384;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    margin-left: 50px;
    font-size: 18px;
    color: #005384;
    visibility: hidden;
  }

  font-family: "Arial Black", Gadget, sans-serif;
  :hover {
    text-decoration: none;
  }
`;

const A2 = styled.a`
  color: #666666;
  text-decoration: none;
  @media (min-width: 1201px) and (max-width: 1900px) {
  }
  @media (min-width: 766px) and (max-width: 1200px) {
  }
  @media (min-width: 360px) and (max-width: 775px) {
  }
`;
const StyledButton = styled(Button)`
  background-color: #191970;
  font-family: "Arial Black", Gadget, sans-serif;
  text-decoration: none;
  color: white;
  @media (min-width: 1201px) and (max-width: 1900px) {
    font-size: 1rem;
  }
  @media (min-width: 766px) and (max-width: 1200px) {
    margin-top: 10px;
    font-size: 0.9rem;
    margin-bottom: 10px;
  }
  @media (min-width: 360px) and (max-width: 775px) {
    font-size: 1.2rem;
  }
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
        <Navbar.Collapse>
          <Nav>
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
      <StyledNav bg="light" sticky="top">
        <Link to="/">
          <Img src={process.env.PUBLIC_URL + "/img/posta logo-inverse.png"} />
        </Link>
        <Navbar.Collapse>
          <Nav>
            <Link to="/">
              <Li2>
                {" "}
                <A2>Inicio</A2>
              </Li2>
            </Link>
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
