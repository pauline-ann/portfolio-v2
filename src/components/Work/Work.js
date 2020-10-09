// Dependencies
import React from 'react';
import { Grid, Container, Header, Divider, List, Image, Icon } from 'semantic-ui-react';

// CSS
import './Work.css';

// Images
import outlandish_small from '../../assets/images/project_img/outlandish_small.png';
import runyon_small from '../../assets/images/project_img/runyon_small.png';
import lom_small from '../../assets/images/project_img/lom_small.png';
import plants_small from '../../assets/images/project_img/plants_small.jpg';
import zephyr_small from '../../assets/images/project_img/zephyr_small.jpg';
import meetMeHalfway_small from '../../assets/images/project_img/mmh_small.jpg';

const Work = () => {

  return (
    <div className='work-div'>
      <Container className='Work-container' id='work'>
        <Grid>
          <Grid.Row className='Project-row'>
            {/**********  OUTLANDISH BLOG  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-top-column Project-column'>
              <div className='Work-image-wrap'>
                <Image
                  className='Work-image'
                  src={outlandish_small}
                  alt='outlandish_small'
                  fluid
                />
                <div className='Work-image-description'>
                  <a href='https://outlandish.blog/' target='_blank'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='Blog' className='Work-header' />
              <p>
                Outlandish is an travel blog powered by WordPress. I enhanced our website's performance (image optimization, mobile responsiveness, SEO) and tailored the WordPress theme's CSS to achieve our desired function and design.</p>
              <Divider hidden />
            </Grid.Column>
            {/**********  RUNYON CANYON  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-column'>
              <div className='Work-image-wrap'>
                <Image
                  className='Work-image'
                  src={runyon_small}
                  alt='runyon_small'
                  fluid
                />
                <div className='Work-image-description'>
                  <a href='https://www.laparks.org/runyon' target='_blank'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='Runyon Canyon' className='Work-header' />
              <p>
                Collaborated with the Department of Recreation and Parks to create this informative website for Runyon Canyon Park in Los Angeles, CA.
              </p>
              <Divider hidden />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='Project-row'>
            {/**********  LEGEND OF MARCELINE  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-column'>
              <div className='Work-image-wrap'>
                <Image
                  className='Work-image'
                  src={lom_small}
                  alt='lom_small'
                  fluid
                />
                <div className='Work-image-description'>
                  <a href='https://adventure-game-lom.herokuapp.com/' target='_blank'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='Promotional' className='Work-header' />
              <p>
                A promotional website designed and built for a fictional video game, The Legend of Marceline. Built to be modern, highly responsive, and filled with animations using HTML, Sass, and one line of JavaScript.              </p>
              <List>
                <List.Item icon='github' content={<a href='https://github.com/pauline-ann/adventure-game' className='listLink' target='_blank'>View Source Code</a>} />
              </List>
              <Divider hidden />
            </Grid.Column>
            {/**********  PLANT STORE  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-top-column Project-column'>
              <div className='Work-image-wrap'>
                <Image
                  className='Work-image'
                  src={plants_small}
                  alt='plants_small'
                  fluid
                />
                <div className='Work-image-description'>
                  <a href='https://pauline-ann.github.io/template-1/' target='_blank'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='Plants' className='Work-header' />
              <p>
                A very simple layout template for a plant store featuring a sleek and minimal design that follows the color palette of the header. Includes a responsive navbar and image hover effects.</p>
              <List>
                <List.Item icon='github' content={<a href='https://github.com/pauline-ann/template-1' className='listLink' target='_blank'>View Source Code</a>} />
              </List>
              <Divider hidden />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='Project-row'>
            {/**********  ZEPHYR NODE  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-top-column Project-column'>
              <div className='Work-image-wrap'>
                <Image
                  className='Work-image'
                  src={zephyr_small} r
                  alt='zephyr_small'
                  fluid
                />
                <div className='Work-image-description'>
                  <a href='https://zephyr-node.herokuapp.com/' target='_blank'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='Productivity' className='Work-header' />
              <p>
                Zephyr Node is a React web application that seeks to help users reach their productivity goals.  Features include user log-in, a quote generator, flashcards, to-do lists, reminders, notes, and a homepage that summarizes all of the user's information.
              </p>
              <List>
                <List.Item icon='github' content={<a href='https://github.com/pauline-ann/Zephyr-Node' className='listLink'>View Source Code</a>} />
              </List>
            </Grid.Column>
            {/**********  MEET ME HALFWAY  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-column'>
              <div className='Work-image-wrap'>
                <Image
                  className='Work-image'
                  src={meetMeHalfway_small}
                  transitionTime='0.7s'
                  alt='meetMeHalfway_small'
                  fluid
                />
                <div className='Work-image-description'>
                  <a href='https://pauline-ann.github.io/Meet-Me-Halfway/' target='_blank'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='Maps & Food' className='Work-header' />
              <p>
                Meet Me Halfway utilizes the Google Maps and Yelp APIs to ease the process of making plans with friends. This app populates businesses/restaurants onto a map, based off of a middle point between 2 addresses.
              </p>
              <List>
                <List.Item icon='github' content={<a href='https://github.com/pauline-ann/Meet-Me-Halfway' className='listLink'>View Source Code</a>} />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default Work;