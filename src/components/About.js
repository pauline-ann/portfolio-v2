import React from "react";
import Navbar from "./Navbar";
import { Container, Segment, Grid, Image, Header, Card, Tab, List } from "semantic-ui-react";
import Me from "../assets/images/grad_me.jpg";

const About = () => {

  const panes = [
    { menuItem: 'Intro', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
    { menuItem: 'Skills', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
    { menuItem: 'Hobbies', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
  ]

  const listStyle = {
    paddingLeft: "5%",
    paddingBottom: "5%"
  }

  return (
    <div>
      <Navbar />
      <Container>
        <Segment>
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
                <Header as="h2">
                  About
                </Header>
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