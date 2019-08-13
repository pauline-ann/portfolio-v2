import React from "react";
import { Menu, Image, Breadcrumb, MenuItem } from 'semantic-ui-react'
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/pb_logo_grey.png";
import * as Resume from "../assets/document/PaulineBantayanResume.pdf";

// NAVBAR
const Header = () => {

  // $('.masthead')
  //   .visibility({
  //     once: false,
  //     onBottomPassed: function () {
  //       $('.fixed.menu').transition('fade in');
  //     },
  //     onBottomPassedReverse: function () {
  //       $('.fixed.menu').transition('fade out');
  //     }
  //   });

  return (
    <div>
      <Menu>
        <Menu.Item as={Link} to="/">
          <Image size="mini" src={logo} />
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item>
            <Breadcrumb>
              <Breadcrumb.Section as={NavLink} exact activeClassName="active" to="/about">About</Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section as={NavLink} exact activeClassName="active" to="/projects">Projects</Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section as={NavLink} exact activeClassName="active" to="/blog">Blog</Breadcrumb.Section>
              <Breadcrumb.Divider />
              <Breadcrumb.Section as={NavLink} exact activeClassName="active" to={Resume}>Resume</Breadcrumb.Section>
            </Breadcrumb>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      {/* <Navbar bg="light" variant="light">
        <Navbar.Brand className="mr-auto" href="/" style={style}>
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Nav.Link href="/about">About</Nav.Link> /
        <Nav.Link href="/projects">Projects</Nav.Link> /
        <Nav.Link href="/contact">Contact</Nav.Link>
      </Navbar> */}
    </div>
  );
}

export default Header;