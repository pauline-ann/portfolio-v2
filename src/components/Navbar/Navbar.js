//Dependencies
import React from "react";
import { Menu, Image, Breadcrumb, Container } from 'semantic-ui-react'
import { Link, NavLink } from "react-router-dom";

//Assets
import logo from "../../assets/images/pb_logo_grey.png";
import pdf from "../../assets/document/PaulineBantayanResume.pdf";

//CSS
import "./Navbar.css";

const Navbar = () => {

  return (
    <div>
      <Container>
        <Menu top="true" inverted className="Navbar-menu">
          <Menu.Item fixed="true" as={Link} to="/" className="Navbar-menu-item">
            <Image size="mini" src={logo} />
          </Menu.Item>
          <Menu.Menu position="left">
            <Menu.Item fixed="true">
              <Breadcrumb>
                <Breadcrumb.Section as={NavLink} exact activeClassName="active" to="/about" className="Navbar-navlink">About</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section as={NavLink} exact activeClassName="active" to="/projects" className="Navbar-navlink">Projects</Breadcrumb.Section>
                <Breadcrumb.Divider />
                <Breadcrumb.Section as={NavLink} exact activeClassName="active" to={pdf} target="_blank" className="Navbar-navlink">Resume</Breadcrumb.Section>
              </Breadcrumb>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
}

export default Navbar;