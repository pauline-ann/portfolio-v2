//Dependencies
import React from 'react';
import { Container, Grid, Header, Tab, List, Divider, Button } from 'semantic-ui-react';
import { Image } from 'react-image-and-background-image-fade';
import { HashLink as HashLink } from 'react-router-hash-link';

//Image
import Me from '../../assets/images/grad.jpg';
import Resume from '../../assets/document/PaulineBantayanResume2020.pdf';

//CSS
import './About.css';

const About = () => {

  const panes = [
    {
      menuItem: 'Intro',
      render: () =>
        <Tab.Pane className='About-tab-pane'>
          <Header as='h3' className='About-tab-pane-header' content='Hello World!' />
          <p>
            I'm Pauline, a full stack web developer from Los Angeles, CA.
          </p>
          <p>
            My desire to pursue technology began when I worked at a tech startup. I realized there that programming aligned with my drive to solve problems, learn continuously, and get in touch with my creativity. I switched my career path to web development and haven't looked back since. I love the process of transforming ideas into functional, intuitive, and immersive web applications.
          </p>
          <p>
            <a href={Resume} target='_blank'>
              <Button
                basic
                color='violet'
                className='Masthead-header-button'
              >
                View Resume
            </Button>
            </a>
          </p>
        </Tab.Pane>
    },
    {
      menuItem: 'Education',
      render: () =>
        <Tab.Pane className='About-tab-pane'>
          <Header as='h3' className='About-tab-pane-header' content='Education' />
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
                  2019 | <a className='listLink' href='https://www.udemy.com/react-the-complete-guide-incl-redux/'>React - The Complete Guide (incl Hooks, React Router, Redux)</a>
                </List.Description>
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='book' />
              <List.Content>
                <List.Header>Udemy</List.Header>
                <List.Description>
                  2019 | <a className='listLink' href='https://www.udemy.com/js-algorithms-and-data-structures-masterclass/'>JavaScript Algorithms and Data Structures Masterclass</a>
                </List.Description>
              </List.Content>
            </List.Item>
          </List>
        </Tab.Pane>
    },
    {
      menuItem: 'Interests',
      render: () =>
        <Tab.Pane className='About-tab-pane'>
          <Header as='h3' className='About-tab-pane-header' content='Interests' />
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
              <List.Icon name='food' />
              <List.Content>
                Looking for the next meal
            </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='tree' />
              <List.Content>
                Enjoying nature through camping and fishing
            </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='game' />
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
      <Container className='About-container' id='about'>
        <Grid>
          <Grid.Row>
            {/**********  PAGE HEADER  **********/}
            <Grid.Column>
              <Header as='h1' content='About Me' className='Section-header' />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={16} tablet={8} computer={6}>
              <Image
                src={Me}
                transitionTime='0.7s'
                alt='graduation-profile'
              />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={10}>
              <Container fluid>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default About;