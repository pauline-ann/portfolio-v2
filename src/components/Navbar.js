import React from "react";
import { Menu, Image, Breadcrumb, Container } from 'semantic-ui-react'
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/pb_logo_grey.png";
import pdf from "../assets/document/PaulineBantayanResume.pdf";

// NAVBAR
const Navbar = () => {

  const linkNav = {
    color: "black"
  }

  const nav = {
    background: "transparent",
    marginBottom: "6em"
  }

  const brand = {
    paddingLeft: "0"
  }

  return (
    <div>
      <Container>
        <Menu fixed inverted style={nav}>
          <Menu.Item fixed as={Link} to="/" style={brand}>
            <Image size="mini" src={logo} />
          </Menu.Item>
          <Menu.Menu position="left">
            <Menu.Item fixed>
              <Breadcrumb>
                <Breadcrumb.Section as={NavLink} exact activeClassName="active" to="/about" style={linkNav}>About</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section as={NavLink} exact activeClassName="active" to="/projects" style={linkNav}>Projects</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section as={NavLink} exact activeClassName="active" to={pdf} target="_blank" style={linkNav}>Resume</Breadcrumb.Section>
              </Breadcrumb>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
}

export default Navbar;