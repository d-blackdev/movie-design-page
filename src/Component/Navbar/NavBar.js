import React from "react";
import Logo from "../../assests/Images/Logo.png";
import "./NavBar.css";
import { Col, Container, Nav, Navbar, NavbarBrand, Row } from "react-bootstrap";
import Input from "../Input/Input";
import { FaGlobeAfrica } from "react-icons/fa";
import Button from "../Button/Button";

function NavBar() {
  return (
    <Container className="nav" fluid>
      <Row className="row">
        <Col col={4}  className="col1">
          <Navbar.Brand href="#home">
            <img width={"200"} src={Logo} alt="Logo" />
          </Navbar.Brand>
        </Col>
        <Col col={8}  className="col2">
          <Input show type="text" holder="Search" long />
          <div className="select">
            <FaGlobeAfrica className="select-icon" />
            <span>EN</span>
          </div>
          <div className="btn-cont">
            <Button outline >login</Button>
            <Button primary>Sign up</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default NavBar;
