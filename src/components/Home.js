import React from "react";
import { Container, Header, Button, Divider, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import CSSTransition from 'react-transition-group/CSSTransition';
import { Image, BackgroundImage } from 'react-image-and-background-image-fade';

// Image
import Avatar from "../assets/images/ny.jpeg";
import Background from "../assets/images/desk.jpg"

//Components
import Navbar from "./Navbar";
import Footer from "./Footer";

//CSS
import "./Home.css";

const Home = () => {

  const containerStyle = {
    minHeight: 750,
    padding: '1em 0em'
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
    marginTop: "7em",
    width: "160px",
    height: "160px",
    borderRadius: "50%"
  }

  return (
    <div>
      <BackgroundImage
        useChild
        transitionTime="0.2s"
        src={Background}
        className="Home"
      >
        <div className="Home">
          <Navbar />
          <Container
            text
            vertical
            textAlign="center"
            style={containerStyle}
          >
            <Image
              src={Avatar}
              style={avatarStyle}
              transitionTime="1.8s"
              alt="avatar"
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
            <Button as={Link} to='/projects' basic color='violet'><Icon color="violet" name="globe" /> Projects</Button>
            <Button as={Link} to='/blog' basic color='violet'><Icon color="violet" name="food" /> Blog</Button>

          </Container>
          <Footer page="Home" />
        </div>
      </BackgroundImage>
      {/* <Navbar />
      <Container
        text
        vertical
        textAlign="center"
        style={containerStyle}
      >
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
        <Button as={Link} to='/projects' basic color='violet'><Icon color="violet" name="globe" /> Projects</Button>
        <Button as={Link} to='/blog' basic color='violet'><Icon color="violet" name="food" /> Blog</Button>

      </Container>
      <Footer page="Home" /> */}
    </div>
  );
}

export default Home;