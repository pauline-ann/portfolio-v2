import React from "react";
import Navbar from "./Navbar";
import { Container, Header, Image, Button, Divider, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import Avatar from "../assets/images/ny.jpeg";
import "./Home.css";

const Home = () => {

  const containerStyle = {
    minHeight: 750,
    padding: '1em 0em',
    textAlign: 'center'
  }

  const headerStyle1 = {
    fontSize: '3.3em',
    fontWeight: 'normal',
    marginBottom: 0,
    fontFamily: "'Fira Code', monospace"

  }

  const headerStyle2 = {
    fontSize: '1em',
    fontWeight: 'normal',
    marginTop: '0.8em'
  }

  const avatarStyle = {
    marginTop: "7em"
  }

  return (
    <div className="Home">
      <Navbar />
      <Container
        text
        vertical
        style={containerStyle}>
        <Image src={Avatar} size="small" circular centered
          style={avatarStyle}
        />
        <Header
          as='h1'
          content='Pauline Ann Bantayan'
          style={headerStyle1}
        />
        <Header
          as='h2'
          content='Full-stack Developer & Full-time Eater from Los Angeles, CA.'
          style={headerStyle2}
        />
        <Divider hidden />
        <Button as={Link} to='/projects' basic color='violet'><Icon name="globe" /> Projects</Button>
        <Button as={Link} to='/blog' basic color='violet'><Icon name="food" /> Blog</Button>

      </Container>
    </div>
  );
}

export default Home;