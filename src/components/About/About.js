//Dependencies
import React from "react";
import { Container, Grid, Header, Tab, List, Divider } from "semantic-ui-react";
import { Image } from 'react-image-and-background-image-fade';

//Image
import Me from "../../assets/images/grad.jpg";

//Components
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

//CSS
import "./About.css";

const About = () => {

  const phoneNum = "(".concat("3", "2", "3", ")", " ", "3", "4", "7", "-", "9", "0", "5", "7");
  const email = "pauline".concat("bantayan", "@", "gmail", ".", "com");

  const panes = [
    {
      menuItem: 'Intro',
      render: () =>
        <Tab.Pane className="About-tab-pane">
          <Header as="h3" className="About-tab-pane-header" content="//Hello World!" />
          <p>
            I'm Pauline, a full-stack web developer from Los Angeles, CA.
          </p>
          <p>
            My desire to pursue technology began when I worked at a tech startup. I realized there that programming aligned with my drive to solve problems, learn continuously, and get in touch with my creativity. I switched my career path to web development and haven't looked back since. I love the process of transforming ideas into functional, intuitive, and immersive web applications.
          </p>
          <Header as="h5" className="About-tab-pane-header" content="Contact" />
          <List>
            <List.Item
              icon='mail'
              content={<a className="listLink" href='mailto:paulinebantayan@gmail.com'>{email}</a>}
            />
            <List.Item
              icon='phone volume'
              content={phoneNum}
            />
          </List>
        </Tab.Pane>
    },
    {
      menuItem: 'Stack',
      render: () =>
        <Tab.Pane className="About-tab-pane">
          <Grid divided>
            <Grid.Row>
              <Grid.Column>
                <Header as="h3" className="About-tab-pane-header" content="//Stack" />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3} >
              <Grid.Column>
                <Header as="h4" className="About-tab-pane-header" content="Front End" />
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
                    <List.Icon><i className="devicon-jquery-plain" /></List.Icon>
                    <List.Content>jQuery</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="react" />
                    <List.Content>React</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i className="devicon-bootstrap-plain"></i></List.Icon>
                    <List.Content>Bootstrap</List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4" className="About-tab-pane-header" content="Back End" />
                <List>
                  <List.Item>
                    <List.Icon><i className="devicon-express-original" /></List.Icon>
                    <List.Content>Express</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="node" />
                    <List.Content>Node</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i className="devicon-mysql-plain" /></List.Icon>
                    <List.Content>MySQL</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i className="devicon-mongodb-plain" /></List.Icon>
                    <List.Content>MongoDB</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="python" />
                    <List.Content>Python</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i className="devicon-sequelize-plain" /></List.Icon>
                    <List.Content>Sequelize</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="wordpress" />
                    <List.Content>WordPress</List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <Header as="h4" className="About-tab-pane-header" content="Tools" />
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
                    <List.Icon><i className="devicon-heroku-original" /></List.Icon>
                    <List.Content>Heroku</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="chrome" />
                    <List.Content>Chrome Developer Tools</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon><i className="devicon-visualstudio-plain" /></List.Icon>
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
      menuItem: 'Education',
      render: () =>
        <Tab.Pane className="About-tab-pane">
          <Header as="h3" className="About-tab-pane-header" content="//Education" />
          <List>
            <List.Item>
              <List.Icon name='graduation' />
              <List.Content>
                <List.Header>University of California, Santa Barbara</List.Header>
                <List.Description>
                  2017 | B.S. in Environmental Science | Emphasis in Ecology, Evolution, and Marine Biology
            </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='graduation' />
              <List.Content>
                <List.Header>UCLA Extension</List.Header>
                <List.Description>
                  2018 | Full Stack Web Development Certificate
            </List.Description>
              </List.Content>
            </List.Item>
            <Divider />
            <List.Item>
              <List.Icon name='book' />
              <List.Content>
                <List.Header>Udemy</List.Header>
                <List.Description>
                  2019 | <a className="listLink" href="https://www.udemy.com/react-the-complete-guide-incl-redux/">React - The Complete Guide (incl Hooks, React Router, Redux)</a>
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='book' />
              <List.Content>
                <List.Header>Udemy</List.Header>
                <List.Description>
                  2019 | <a className="listLink" href="https://www.udemy.com/js-algorithms-and-data-structures-masterclass/">JavaScript Algorithms and Data Structures Masterclass</a>
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Tab.Pane>
    },
    {
      menuItem: 'Interests',
      render: () =>
        <Tab.Pane className="About-tab-pane">
          <Header as="h3" className="About-tab-pane-header" content="//Interests" />
          <p>
            Aside from web development, I want to learn more about machine learning, artificial intelligence, and RPG game development. There is still so much more for me to learn which pushes me to continue building and become a stronger developer everyday.
          </p>
          <p>
            Additionally, I care deeply about environmental issues I studied in college such as renewable energy, sustainability, and environmental justice. It's my goal to work within where my passions intersect and develop software that can make a positive social and environmental impact down the line.
          </p>
          <p>
            When I'm not programming or studying you can find me
          </p>
          <List>
            <List.Item>
              <List.Icon name="food" />
              <List.Content>
                Looking for the next meal
            </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="tree" />
              <List.Content>
                Enjoying nature through camping and fishing
            </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="game" />
              <List.Content>
                Waiting for the next Animal Crossing game
            </List.Content>
            </List.Item>
          </List>
        </Tab.Pane>
    }
  ]

  return (
    <div>
      <Navbar />
      <Container className="About-container">
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={6}>
            <Image
              src={Me}
              transitionTime="0.7s"
              alt="graduation-profile"
            />
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={10}>
            <Container fluid>
              <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </Container>
          </Grid.Column>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default About;