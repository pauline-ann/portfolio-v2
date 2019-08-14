import React from "react";
import Navbar from "./Navbar";
import { Container, Image, Icon, Message, Divider } from "semantic-ui-react";
import lobster from "../assets/images/lobster.png";
import sushi from "../assets/images/sushi.png";
import ramen from "../assets/images/ramen.png";

const Blog = () => {

  return (
    <div>
      <Navbar />
      <Container>
        <Message color="yellow" size="huge">
          <Message.Content>
            <Divider hidden />
            <Icon name='cogs' size="huge"/>
            <Divider hidden />
            <Message.Header>
              Under Construction
            </Message.Header>
            Will be delivering delicious content to you very soon!
            <Image.Group size="small">
              <Image src={ramen} />
              <Image src={lobster} />
              <Image src={sushi} />
            </Image.Group>
            <Divider hidden />
          </Message.Content>
        </Message>
      </Container>
    </div>
  );
}

export default Blog;