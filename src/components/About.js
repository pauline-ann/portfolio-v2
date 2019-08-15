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
          <Header as="h3"
            style={{
              fontFamily: "'Fira Code', monospace",
              paddingTop: "0.5em"
            }}>
          //Hello World!
          </Header>
          <p>
            I'm Pauline, a full-stack web developer from Los Angeles, CA.
          </p>
          <p>
            My desire to pursue technology began when I worked at a tech startup. There, I realized that programming aligned with my drive to solve problems, learn continuously, and get in touch with my creativity. I switched my career path to web development and haven't looked back since! I love the process of transforming ideas into functional, intuitive, and immersive web applications.
          </p>
          <Header as="h5"
            style={{
              fontFamily: "'Fira Code', monospace"
            }}>
            Contact
          </Header>
          <List>
            <List.Item
              icon='mail'
              content={<a href='mailto:paulinebantayan@gmail.com'>paulinebantayan@gmail.com</a>}
            />
            <List.Item
              icon='phone volume'
              content="323-347-9057"
            />
          </List>
        </Tab.Pane>
    },
    {
      menuItem: 'Stack',
      render: () =>
        <Tab.Pane>
          <Grid divided>
            <Grid.Row>
              <Grid.Column>
                <Header
                  as="h3"
                  style={{
                    fontFamily: "'Fira Code', monospace",
                    paddingTop: "0.5em"
                  }}>
                //Stack
                </Header>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3} >
              <Grid.Column>
                <Header as="h4"
                  style={{
                    fontFamily: "'Fira Code', monospace"
                  }}>
                  Front End
          </Header>
                <List>
                  <List.Item>
                    <List.Icon name="html5" />
                    <List.Content>HTML</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="css3" />
                    <List.Content>CSS</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="js" />
                    <List.Content>JavaScript</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i class="devicon-jquery-plain" /></List.Icon>
                    <List.Content>jQuery</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="react" />
                    <List.Content>React</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i class="devicon-bootstrap-plain"></i></List.Icon>
                    <List.Content>Bootstrap</List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4"
                  style={{
                    fontFamily: "'Fira Code', monospace"
                  }}>
                  Back End
          </Header>
                <List>
                  <List.Item>
                    <List.Icon><i class="devicon-express-original" /></List.Icon>
                    <List.Content>Express</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="node" />
                    <List.Content>Node</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i class="devicon-mysql-plain" /></List.Icon>
                    <List.Content>MySQL</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i class="devicon-mongodb-plain" /></List.Icon>
                    <List.Content>MongoDB</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="python" />
                    <List.Content>Python</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i class="devicon-sequelize-plain" /></List.Icon>
                    <List.Content>Sequelize</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="wordpress" />
                    <List.Content>WordPress</List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4"
                  style={{
                    fontFamily: "'Fira Code', monospace"
                  }}>
                  Tools
          </Header>
                <List>
                  <List.Item>
                    <List.Icon name="git" />
                    <List.Content>Git</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="github alternate" />
                    <List.Content>GitHub</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="gitlab" />
                    <List.Content>GitLab</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i class="devicon-heroku-original" /></List.Icon>
                    <List.Content>Heroku</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="chrome" />
                    <List.Content>Chrome Developer Tools</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i class="devicon-visualstudio-plain" /></List.Icon>
                    <List.Content>Visual Studio Code</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="trello" />
                    <List.Content>Trello</List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Tab.Pane>
    },
    {
      menuItem: 'Interests',
      render: () =>
        <Tab.Pane>
          <Header as="h3"
            style={{
              fontFamily: "'Fira Code', monospace",
              paddingTop: "0.5em"
            }}>
          //Interests
          </Header>
          <p>
            Aside from web development, I want to learn more about machine learning, artificial intelligence, and RPG game development. There is so much more to learn which pushes me to continue building and become a stronger developer everyday.
            </p>
          <p>
            I'm still deeply passionate about the environmental issues I studied in college such as renewable energy, sustainability, and environmental justice. A goal of mine is to work within where my passions intersect and develop software that can make a positive social and environmental impact.
            </p>
        </Tab.Pane>
    },
    {
      menuItem: 'Hobbies',
      render: () =>
        <Tab.Pane>
          <Header as="h3"
            style={{
              fontFamily: "'Fira Code', monospace",
              paddingTop: "0.5em"
            }}>
          //Hobbies
          </Header>
          <p>
            If I'm not coding or studying you'll find me...
          </p>
          <List>
            <List.Item>
              <List.Icon name="food" />
              <List.Content>
                Looking for the next meal to experience (spiritually)
            </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="tree" />
              <List.Content>
                Slowing down and enjoying nature through camping and fishing
            </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="game" />
              <List.Content>
                Waiting for the next Animal Crossing game
            </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="smile outline" />
              <List.Content>
                Being wholesome
            </List.Content>
            </List.Item>
          </List>
        </Tab.Pane>
    }
  ]

  return (

    < div >
      <Navbar />
      <Container>
        <Segment basic>
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={6}>
              <Image src={Me} />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={10}>
              <Container fluid>
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