//Dependencies
import React from 'react'
import { Container, Grid, Header, List, Image, Divider, Reveal } from 'semantic-ui-react'

//Image
import Me from '../../assets/images/grad.jpg'
import Resume from '../../assets/document/PaulineBantayanResume.pdf'

//CSS
import './About.css'

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
                  Curious and goal-oriented at heart, I am energized when I'm exposed to new ideas and challenged to think both creatively and critically in new ways.
                </p>
                <p>
                  I chose to pursue web development when I realized how much the field aligns with my innate drive to solve problems, learn continuously, and get in touch with my creativity.
                </p>
                <p>
                  Being that web development is constantly evolving, I find joy in doing my best to keep up with emerging trends in the industry and finding ways to implement them into my own work.
                </p>
                <p>
                  When I'm not coding, you may find me enjoying my favorite leisure activities such as drawing and painting, solving puzzles, playing video games, or <a href='https://outlandish.blog/' target='_blank' rel='noreferrer'>backpacking and exploring the world!</a>
                </p>
                <Divider hidden />
                <List className='About-resume-list' >
                  <List.Item icon='file alternate outline' content={<a href={Resume} className='listLink About-resume-button'>View Resume</a>} />
                </List>
              </Container>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <Container fluid>
                <Grid>
                  <Image
                    centered
                    src={Me}
                    alt='graduation-profile'
                    className='About-image'
                  />
                </Grid>
              </Container>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  )
}

export default About