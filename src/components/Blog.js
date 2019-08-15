import React from "react";
import Navbar from "./Navbar";
import { Container, Image, Icon, Message, Divider, Segment } from "semantic-ui-react";
import lobster from "../assets/images/lobster.png";
import sushi from "../assets/images/sushi.png";
import ramen from "../assets/images/ramen.png";

const Blog = () => {

  return (
    <div>
      <Navbar />
      <Container>
        <Segment basic textAlign="center">
          <Message color="violet" size="medium">
            <Message.Content>
              <Divider hidden />
              <Icon name='cogs' size="huge" />
              <Divider hidden />
              <Message.Header>
                Under Construction
              </Message.Header>
              Coming soon!
              <Divider hidden />
            <Image.Group size="small">
                <Image src={ramen} />
                <Image src={lobster} />
                <Image src={sushi} />
              </Image.Group>
              <Divider hidden />
            </Message.Content>
          </Message>
        </Segment>
      </Container>
    </div>
  );
}

export default Blog;