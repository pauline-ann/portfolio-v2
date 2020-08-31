//Dependencies
import React from 'react';
import { Container, Grid, Header, Tab, List, Divider, Button, Icon, Image } from 'semantic-ui-react';

//Image
import Me from '../../assets/images/grad.jpg';
import Resume from '../../assets/document/PaulineBantayanResume2020.pdf';

//CSS
import './About.css';

const About = () => {

  return (
    <div className='about-div'>
      <Container className='About-container' id='about'>
        <Grid>
          <Grid.Row centered>
            {/**********  PAGE HEADER  **********/}
            <Grid.Column mobile={16} tablet={4} computer={4}>
              <Header as='h1' content='About' className='Section-header' />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={9} computer={8} className='About-column'>
              <Container fluid>
                <p>
                  Hello! I'm Pauline, a Full Stack Software Developer from Los Angeles, CA.
                </p>
                <p>
                  I love the process of transforming ideas into functional, intuitive, and immersive web applications through design and code. Software development aligns with my innnate drive to solve problems, learn continuously, and get in touch with my creativity.
                </p>
                <p>
                  Aside from continue to grow in skill as a developer, I'm interested in learning about artificial intelligence, video game development, and sustainable engineering. It's my goal to work within where my passions intersect and develop software that can make a positive social and environmental impact.
                </p>
                <p>
                  When I'm not coding, you can find me enjoying my favorite leisure activities such as trying out new recipes, playing video games, or backpacking and exploring the world!
                </p>
                <br />
                <List className='About-resume-icon'>
                  <List.Item icon='file alternate outline' content={<a href={Resume} className='listLink About-resume-button'>View Resume</a>} />
                </List>
              </Container>
            </Grid.Column>
            <Grid.Column mobile={6} tablet={3} computer={4}>
              <Container fluid>
                <Image
                  centered
                  src={Me}
                  alt='graduation-profile'
                />
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default About;