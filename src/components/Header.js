import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import logo from "../assets/images/pb_logo_grey.png";

const Header = () => {

  const style = {
    padding: "0"
  }

  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand className="mr-auto" href="/" style={style}>
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/projects">Projects</Nav.Link>
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Navbar>
    </div>
  );
}

export default Header;