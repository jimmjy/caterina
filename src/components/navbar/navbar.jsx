import React from "react";
import { Link } from "@reach/router";

//bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

//logo
import Logo from "../../assets/logo-vector.svg";

//data
import { navLinks } from "../../data/data";

//styles
import "./navbar.scss";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg" collapseOnSelect={true}>
      <Navbar.Brand as={Link} to="/">
        <img width="60" height="60" src={Logo} alt="" />
        Caterina Psychotherapy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav defaultActiveKey="/">
          {navLinks.map(({ name, link }) => (
            <Nav.Link id="custom-nav-item" eventKey={link} to={link} as={Link}>
              {name}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
