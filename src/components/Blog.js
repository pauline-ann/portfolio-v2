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
      <Container text textAlign="center">
          <Message color="violet" size="large">
            <Message.Content>
              <Divider hidden />
              <Icon name='cogs' size="huge" />
              <Divider hidden />
              <Message.Header content="Under Construction" />
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
      </Container>
    </div>
  );
}

export default Blog;