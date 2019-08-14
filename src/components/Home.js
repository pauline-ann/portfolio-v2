import React from "react";
import Navbar from "./Navbar";
import { Container, Header, Image } from "semantic-ui-react";
import Avatar from "../assets/images/anime_me.png";
import "./Home.css";

const Home = () => {

  const containerStyle = {
    minHeight: 750,
    padding: '1em 0em',
    textAlign: 'center'
  }

  const headerStyle1 = {
    fontSize: '3.5em',
    fontWeight: 'normal',
    marginBottom: 0,
    fontFamily: "'Fira Code', monospace"

  }

  const headerStyle2 = {
    fontSize: '1em',
    fontWeight: 'normal',
    marginTop: '1.5em'
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
          content='👋🏼Hi! I am a 💻Full Stack Software Developer & 🍜Full-time Eater from 🌃Los Angeles, CA.'
          style={headerStyle2}
        />
      </Container>
    </div>
  );
}

export default Home;