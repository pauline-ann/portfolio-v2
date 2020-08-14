//Dependencies
import React from 'react';
import { Container, Grid, Header, Tab, List, Divider, Button, Icon } from 'semantic-ui-react';
import { Image } from 'react-image-and-background-image-fade';
import { HashLink as HashLink } from 'react-router-hash-link';

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
          <Grid.Row>
            {/**********  PAGE HEADER  **********/}
            <Grid.Column mobile={16} tablet={16} computer={4}>
              <Header as='h1' content='About' className='Section-header' />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <Container fluid>
                <p>
                  Hello! I'm Pauline, a Full Stack Software Developer from Los Angeles, CA.
                </p>
                <p>
                  I love the process of transforming ideas into functional, intuitive, and immersive web applications through design and code.
                </p>
                <p>
                  Aside from continuing to grow as a web developer, I'm interested in learning about artificial intelligence, video game development, and sustainable engineering. It's my goal to work within where my passions intersect and develop software that can make a positive social and environmental impact.
                </p>
                <p>
                  I switched career paths after realizing that web development aligns with my drive to solve problems, learn continuously, and get in touch with my creativity.
                </p>
                <p>
                  When I'm not coding, you can find me enjoying my favorite leisure activities such as trying new recipes to cook, playing video games, or camping and backapacking!
                </p>
                <p>
                  <a href={Resume} target='_blank'>
                    <Button
                      basic
                      color='violet'
                      className='Masthead-header-button'
                    >
                      <Icon
                        color='violet'
                        name='file alternate outline'
                      />
                      View Resume
            </Button>
                  </a>
                </p>
              </Container>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Image
                src={Me}
                transitionTime='0.7s'
                alt='graduation-profile'
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default About;