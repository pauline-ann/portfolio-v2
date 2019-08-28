//Dependencies
import React from "react";
import { Container, Header, Button, Divider, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { Image, BackgroundImage } from 'react-image-and-background-image-fade';

// Image
import Avatar from "../../assets/images/ny.jpeg";
import Background from "../../assets/images/desk.jpg"

//Components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

//CSS
import "./Home.css";

const Home = () => {

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
            vertical="true"
            textAlign="center"
            className="Home-container"
          >
            <Image
              src={Avatar}
              transitionTime="1.2s"
              alt="avatar"
              className="Home-avatar"
            />
            <Header
              as='h1'
              content='Pauline Ann Bantayan'
              className="Home-header-name"
            />
            <Header
              as='h2'
              content='Full Stack Developer from Los Angeles, CA.'
              className="Home-header-description"
            />
            <Divider hidden />
            <Button
              as={Link}
              to='/about'
              basic
              color='violet'
              className="Home-header-button"
            >
              <Icon
                color="violet"
                name="address card outline"
              />
              About
            </Button>
            <Button
              as={Link}
              to='/projects'
              basic
              color='violet'
              className="Home-header-button"
            >
              <Icon
                color="violet"
                name="globe"
              />
              Projects
              </Button>
          </Container>
          <Footer />
        </div>
      </BackgroundImage>
    </div>
  );
}

export default Home;