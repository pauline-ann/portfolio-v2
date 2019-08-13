import React from "react";
import { Container, Header, Image } from "semantic-ui-react";
import * as Avatar from "../assets/images/myAvatar.png";
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
  }

  const headerStyle2 = {
    fontSize: '1.2em',
    fontWeight: 'normal',
    marginTop: '1.5em'
  }

  return (
    <div className="Home">
      <Container
        text
        vertical
        style={containerStyle}
      >
        <Image src={Avatar} size="small" circular centered
          style={{
            marginTop: '13.5em'
          }}
        />
        <Header
          as='h1'
          content='Pauline Ann Bantayan'
          style={headerStyle1}
          inverted
        />
        <Header
          as='h2'
          content='Hi! I am a Full Stack Software Developer & Full-time Eater from Los Angeles, CA.'
          style={headerStyle2}
          inverted
        />
      </Container>
    </div>
  );
}

export default Home;