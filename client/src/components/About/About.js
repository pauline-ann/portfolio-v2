//Dependencies
import React from 'react';
import { Container, Grid, Header, List, Image, Divider, Reveal } from 'semantic-ui-react';

//Image
import Me from '../../assets/images/grad.jpg';
import Resume from '../../assets/document/PaulineBantayanResume2020.pdf';

//CSS
import './About.css';

const About = () => {

  return (
    <div>
      <Container className='About-container' id='about'>
        <Grid>
          <Grid.Row centered>
            {/**********  PAGE HEADER  **********/}
            <Grid.Column mobile={16} tablet={4} computer={4}>
              <Header as='h2' content='About' className='Section-header' />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={8} className='About-column'>
              <Container fluid>
                <p>
                  Software development aligns with my innate drive to solve problems, learn continuously, and get in touch with my creativity.
                </p>
                <p>
                  I am constantly keeping up to date with industry best practices and emerging trends, looking for ways to implement them into my work.
                </p>
                <p>
                  It is important to me to always striving to improve and being open to learn new ideas.
                </p>
                <p>
                  When I'm not coding, you may find me enjoying my favorite leisure activities such as drawing or painting, trying out new recipes, playing video games, or backpacking and exploring the world!
                </p>
                <Divider hidden />
                <List className='About-resume-list' size='large' >
                  <List.Item icon='file alternate outline' content={<a href={Resume} className='listLink About-resume-button'>View Resume</a>} />
                </List>
              </Container>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={4} computer={4}>
              <Container fluid>
                <Reveal animated='fade'>
                  <Reveal.Content visible>
                    <Image
                      centered
                      src={Me}
                      alt='graduation-profile'
                      className='About-image'
                    />
                  </Reveal.Content>
                  <Reveal.Content hidden>
                    <Image
                      centered
                      src={Me}
                      alt='graduation-profile'
                      className='About-image'
                    />                  </Reveal.Content>
                </Reveal>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default About;