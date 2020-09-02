// Dependencies
import React from 'react';
import { Grid, Container, Header, Divider, List, Image, Icon } from 'semantic-ui-react';

// CSS
import './Work.css';

// Images
import lom_small from '../../assets/images/project_img/lom_small.png';
import zephyr_small from '../../assets/images/project_img/zephyr_small.jpg';
import lightHouse_small from '../../assets/images/project_img/lighthouse_small.jpg';
import meetMeHalfway_small from '../../assets/images/project_img/mmh_small.jpg';

const Work = () => {

  return (
    <div className='work-div'>
      <Container className='Work-container' id='work'>
        <Grid>
          <Grid.Row className='Project-row'>
            {/**********  LEGEND OF MARCELINE  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-top-column'>
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
              <Header as='h2' content='The Legend of Marceline' className='Work-header' />
              <p>
                A promotional website designed and built for a fictional video game, "The Legend of Marceline". Built entirely with HTML and compiled Sass code; no open source CSS frameworks were used.              </p>
              <List>
                <List.Item icon='github' content={<a href='https://github.com/pauline-ann/adventure-game' className='listLink' target='_blank'>View Source Code</a>} />
              </List>
              <Divider hidden />
            </Grid.Column>
            {/**********  ZEPHYR NODE  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8}>
              <div className='Work-image-wrap'>
                <Image
                  className='Work-image'
                  src={zephyr_small}
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
              <Header as='h2' content='Zephyr Node' className='Work-header' />
              <p>
                A web application that utilizes the Google Maps and Yelp APIs to ease the process of making plans with friends. Populates businesses/restaurants onto a map, based off of a middle point between 2 addresses.
              </p>
              <List>
                <List.Item icon='github' content={<a href='https://github.com/pauline-ann/Zephyr-Node' className='listLink'>View Source Code</a>} />
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row className='Project-row'>
            {/**********  LIGHTHOUSE  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-top-column'>
              <div className='Work-image-wrap'>
                <Image
                  className='Work-image'
                  src={lightHouse_small}
                  alt='lightHouse_small'
                  fluid
                />
                <div className='Work-image-description'>
                  <a href='https://lighthouse-project2.herokuapp.com/' target='_blank'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='lightHouse' className='Work-header' />
              <p>
                Full-stack web application that is meant to help women navigate their social outings in Los Angeles. Allows users to search neighborhoods for safety reviews, as well as provide their own input regarding its safety.
              </p>
              <List>
                <List.Item icon='github' content={<a href='https://github.com/pauline-ann/LightHouse' className='listLink'>View Source Code</a>} />
              </List>
              <Divider hidden />
            </Grid.Column>
            {/**********  MEET ME HALFWAY  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8}>
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
              <Header as='h2' content='Meet Me Halfway' className='Work-header' />
              <p>
                A study application made using React.js. Some of its features include: user log-in, quote generator, flashcards, to-do lists, reminders, notes, and a homepage summarizing all of the user's information.
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