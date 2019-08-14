import React from "react";
import Navbar from "./Navbar";
import { Container, Segment, Grid, Image, Header, Card, Tab, List, Divider } from "semantic-ui-react";
import Me from "../assets/images/grad_me.jpg";

const About = () => {

  const panes = [
    {
      menuItem: 'Intro',
      render: () =>
        <Tab.Pane>
          In pariatur officia amet aute voluptate minim reprehenderit. Occaecat laboris est aute laborum id in do veniam minim velit adipisicing velit aliqua. Ea id duis do tempor fugiat consequat laborum do. Anim amet reprehenderit anim irure. Exercitation tempor sunt voluptate ut irure nisi incididunt adipisicing qui aute esse. Deserunt exercitation magna sunt labore commodo eu sit et enim eu est duis ullamco.
          Ut amet cillum labore enim pariatur enim. Anim sunt reprehenderit eiusmod aliquip aliquip excepteur ea duis qui proident culpa laboris nulla. Adipisicing est aute cillum magna cupidatat occaecat. Exercitation in magna enim ut culpa commodo non anim. Minim et excepteur nulla voluptate duis sit pariatur sunt exercitation amet qui cillum adipisicing.
        </Tab.Pane>
    },
    {
      menuItem: 'Skills',
      render: () =>
        <Tab.Pane>
          In pariatur officia amet aute voluptate minim reprehenderit. Occaecat laboris est aute laborum id in do veniam minim velit adipisicing velit aliqua. Ea id duis do tempor fugiat consequat laborum do. Anim amet reprehenderit anim irure. Exercitation tempor sunt voluptate ut irure nisi incididunt adipisicing qui aute esse. Deserunt exercitation magna sunt labore commodo eu sit et enim eu est duis ullamco.
          Ut amet cillum labore enim pariatur enim. Anim sunt reprehenderit eiusmod aliquip aliquip excepteur ea duis qui proident culpa laboris nulla. Adipisicing est aute cillum magna cupidatat occaecat. Exercitation in magna enim ut culpa commodo non anim. Minim et excepteur nulla voluptate duis sit pariatur sunt exercitation amet qui cillum adipisicing.
        </Tab.Pane>
    },
    {
      menuItem: 'Hobbies',
      render: () =>
        <Tab.Pane>
          In pariatur officia amet aute voluptate minim reprehenderit. Occaecat laboris est aute laborum id in do veniam minim velit adipisicing velit aliqua. Ea id duis do tempor fugiat consequat laborum do. Anim amet reprehenderit anim irure. Exercitation tempor sunt voluptate ut irure nisi incididunt adipisicing qui aute esse. Deserunt exercitation magna sunt labore commodo eu sit et enim eu est duis ullamco.
          Ut amet cillum labore enim pariatur enim. Anim sunt reprehenderit eiusmod aliquip aliquip excepteur ea duis qui proident culpa laboris nulla. Adipisicing est aute cillum magna cupidatat occaecat. Exercitation in magna enim ut culpa commodo non anim. Minim et excepteur nulla voluptate duis sit pariatur sunt exercitation amet qui cillum adipisicing.
        </Tab.Pane>
    }
  ]

  const listStyle = {
    paddingLeft: "5%",
    paddingBottom: "5%"
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Segment basic>
          <Grid>
            <Grid.Column width={5}>
              <Card>
                <Image src={Me} />
                <Card.Content>
                  <Card.Header>Pauline Ann Bantayan</Card.Header>
                  <Card.Meta>UCSB Class of 2017</Card.Meta>
                </Card.Content>
                <Card.Description>
                  <List style={listStyle}>
                    <List.Item icon='marker' content='Los Angeles, CA' />
                    <List.Item
                      icon='mail'
                      content={<a href='mailto:paulinebantayan@gmail.com'>paulinebantayan@gmail.com</a>}
                    />
                    <List.Item
                      icon='phone volume'
                      content="323-347-9057"
                    />
                  </List>
                </Card.Description>
              </Card>
            </Grid.Column>
            <Grid.Column width={7}>
              <Container text>
                <Header as="h2"
                style={{
                  fontFamily: "'Fira Code', monospace",
                  paddingTop: "1em"
                  }}>
                  //About
                </Header>
                <Divider hidden />
                <Tab panes={panes} />
              </Container>
            </Grid.Column>
          </Grid>
        </Segment>
      </Container>
    </div >
  );
}

export default About;