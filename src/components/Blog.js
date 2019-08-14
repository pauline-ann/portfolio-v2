import React from "react";
import Navbar from "./Navbar";
import { Container, Segment } from "semantic-ui-react";

const Blog = () => {

  return (
    <div>
      <Navbar />
      <Container>
        <Segment raised>Pellentesque habitant morbi tristique senectus.</Segment>
      </Container>
    </div>
  );
}

export default Blog;