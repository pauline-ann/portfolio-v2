// Dependencies
import React from 'react';
import { Grid, Container, Header, Divider, List, Tab, Reveal, Image } from 'semantic-ui-react';
import ImageFadeIn from 'react-image-fade-in';

// CSS
import './Work.css';

// Images
import kdara_small from '../../assets/images/project_img/kdara_small.jpg';
import foodie_small from '../../assets/images/project_img/foodie_small.jpg';
import outlandish_small from '../../assets/images/project_img/outlandish_small.jpg';
import griffith_small from '../../assets/images/project_img/griffith_small.jpg';
import runyon_small from '../../assets/images/project_img/runyon_small.jpg';
import learntoswim_small from '../../assets/images/project_img/learntoswim_small.jpg';
import lom_small from '../../assets/images/project_img/lom_small.jpg';
import plants_small from '../../assets/images/project_img/plants_small.jpg';
import zephyr_small from '../../assets/images/project_img/zephyr_small.jpg';
import meetMeHalfway_small from '../../assets/images/project_img/mmh_small.jpg';

const Work = () => {

  const panes = [
    {
      menuItem: 'Professional',
      render: () =>
        <Tab.Pane attached={false} basic>
          <Grid>
            <Grid.Row>
              {/**********  K'DARA  **********/}
              {/**********  DESCRIPTION  **********/}
              <Grid.Column mobile={16} tablet={8} computer={8} className='Project-column'>
                <a href='https://kdara.com/' target='_blank' rel='noreferrer'>
                  <div className='Work-image-wrap'>
                    <Reveal animated='fade in'>
                      <Reveal.Content visible>
                        <ImageFadeIn
                          className='Work-image'
                          src={kdara_small}
                          alt='kdara_small'
                          fluid
                        />
                      </Reveal.Content>
                      <Reveal.Content hidden>
                        <Image src={kdara_small} className='Work-image-hidden'/>
                      </Reveal.Content>
                    </Reveal>
                    <Header as='h2' content="K'dara" className='Work-header' />
                    <p className='Work-text'>
                      Complete redesign and rebranding for an e-commerce website hosted on WordPress. Implemented new features and plug-ins into the existing site to modernize and improve performance.</p>
                  </div>
                </a>
                <Divider hidden />
              </Grid.Column>
              {/**********  GRIFFITH PARK  **********/}
              {/**********  DESCRIPTION  **********/}
              <Grid.Column mobile={16} tablet={8} computer={8} className='Project-column'>
                <a href='https://www.laparks.org/griffithpark/griffith-park-home-page' target='_blank' rel='noreferrer'>
                  <div className='Work-image-wrap'>
                    <ImageFadeIn
                      className='Work-image'
                      src={griffith_small}
                      alt='griffith_small'
                      fluid
                    />
                  </div>
                  <Divider hidden />
                  <Header as='h2' content='Griffith Park' className='Work-header' />
                  <p className='Work-text'>
                    Added new features and new information to the Griffith Park homepage to welcome their new Parkline Shuttle program, alongside maintaining regular upkeep.
                  </p>
                  <Divider hidden />
                </a>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              {/**********  RUNYON CANYON  **********/}
              {/**********  DESCRIPTION  **********/}
              <Grid.Column mobile={16} tablet={8} computer={8} className='Project-column'>
                <a href='https://www.laparks.org/runyon' target='_blank' rel='noreferrer'>
                  <div className='Work-image-wrap'>
                    <ImageFadeIn
                      className='Work-image'
                      src={runyon_small}
                      alt='runyon_small'
                      fluid
                    />
                  </div>
                  <Divider hidden />
                  <Header as='h2' content='Runyon Canyon' className='Work-header' />
                  <p className='Work-text'>
                    Collaborated with the Department of Recreation and Parks to create an informational webpage for the popular Runyon Canyon Park in Los Angeles.
              </p>
                </a>
              </Grid.Column>
              {/**********  Swim LA **********/}
              {/**********  DESCRIPTION  **********/}
              <Grid.Column mobile={16} tablet={8} computer={8} className='Project-column'>
                <a href='https://www.swimla.org/' target='_blank' rel='noreferrer'>
                  <div className='Work-image-wrap'>
                    <ImageFadeIn
                      className='Work-image'
                      src={learntoswim_small}
                      alt='learntoswim_small'
                      fluid
                    />
                  </div>
                  <Divider hidden />
                  <Header as='h2' content='Swim LA' className='Work-header' />
                  <p className='Work-text'>
                    Created a website for Swim LA, a swimming program to teach the youth in Los Angeles, as per the Governor’s request.
              </p>
                  <Divider hidden />
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Tab.Pane>,
    },
    {
      menuItem: 'Personal',
      render: () =>
        <Tab.Pane attached={false} basic>
          <Grid stackable>
            {/**********  FOODIE BLOG  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-top-column Project-column'>
              <a href='https://foodie-react-blog.herokuapp.com/' target='_blank' rel='noreferrer'>
                <div className='Work-image-wrap'>
                  <ImageFadeIn
                    className='Work-image'
                    src={foodie_small}
                    alt='foodie_small'
                    type='image/jp2'
                    fluid
                  />
                </div>
                <Divider hidden />
                <Header as='h2' content='MERN Stack Blog' className='Work-header' />
                <p className='Work-text'>
                  Foodie is a full stack blogging application built on MongoDB, Express, React, and Node.js. Foodies welcome!
                </p>
                <List size='huge'>
                  <List.Item icon='github alternate' content={<a href='https://github.com/pauline-ann/blog-react' className='listLink' target='_blank' rel='noreferrer'>View Source Code + README</a>} />
                </List>
                <Divider hidden />
              </a>

            </Grid.Column>
            {/**********  OUTLANDISH BLOG  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-top-column Project-column'>
              <a href='https://outlandish.blog/' target='_blank' rel='noreferrer'>
                <div className='Work-image-wrap'>
                  <ImageFadeIn
                    className='Work-image'
                    src={outlandish_small}
                    alt='outlandish_small'
                    type='image/jp2'
                    fluid
                  />
                </div>
                <Divider hidden />
                <Header as='h2' content='WordPress Blog' className='Work-header' />
                <p className='Work-text'>
                  Outlandish is an travel blog powered by WordPress. I enhanced our website's performance (image optimization, mobile responsiveness, SEO) and tailored the WordPress theme's CSS to achieve our desired function and design.
                </p>
                <Divider hidden />
              </a>
            </Grid.Column>
            {/**********  LEGEND OF MARCELINE  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-column'>
              <a href='https://adventure-game-lom.herokuapp.com/' target='_blank' rel='noreferrer'>
                <div className='Work-image-wrap'>
                  <ImageFadeIn
                    className='Work-image'
                    src={lom_small}
                    alt='lom_small'
                    fluid
                  />
                </div>
                <Divider hidden />
                <Header as='h2' content='Promotional' className='Work-header' />
                <p className='Work-text'>
                  A promotional website designed and built for a fictional video game, The Legend of Marceline. Built to be modern, highly responsive, and filled with animations using HTML, Sass, and one line of JavaScript.              </p>
                <List size='huge'>
                  <List.Item icon='github alternate' content={<a href='https://github.com/pauline-ann/adventure-game' className='listLink' target='_blank' rel='noreferrer'>View Source Code + README</a>} />
                </List>
                <Divider hidden />
              </a>
            </Grid.Column>
            {/**********  PLANT STORE  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-top-column Project-column'>
              <a href='https://pauline-ann.github.io/template-1/' target='_blank' rel='noreferrer'>
                <div className='Work-image-wrap'>
                  <ImageFadeIn
                    className='Work-image'
                    src={plants_small}
                    alt='plants_small'
                    fluid
                  />
                </div>
                <Divider hidden />
                <Header as='h2' content='Plant Store' className='Work-header' />
                <p className='Work-text'>
                  A very simple layout template for a plant store featuring a sleek and minimal design that follows the color palette of the header. Includes a responsive navbar and image hover effects.</p>
                <List size='huge'>
                  <List.Item icon='github alternate' content={<a href='https://github.com/pauline-ann/template-1' className='listLink' target='_blank' rel='noreferrer'>View Source Code + README</a>} />
                </List>
                <Divider hidden />
              </a>
            </Grid.Column>
            {/**********  ZEPHYR NODE  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-top-column Project-column'>
              <a href='https://zephyr-node.herokuapp.com/' target='_blank' rel='noreferrer'>
                <div className='Work-image-wrap'>
                  <ImageFadeIn
                    className='Work-image'
                    src={zephyr_small} r
                    alt='zephyr_small'
                    fluid
                  />
                </div>
                <Divider hidden />
                <Header as='h2' content='Productivity App' className='Work-header' />
                <p className='Work-text'>
                  Zephyr Node is a React web application that seeks to help users reach their productivity goals.  Features include user log-in, a quote generator, flashcards, to-do lists, reminders, notes, and a homepage that summarizes all of the user's information.
              </p>
                <List size='huge'>
                  <List.Item icon='github alternate' content={<a href='https://github.com/pauline-ann/Zephyr-Node' className='listLink' target='_blank' rel='noreferrer'>View Source Code + README</a>} />
                </List>
              </a>
            </Grid.Column>
            {/**********  MEET ME HALFWAY  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-column'>
              <a href='https://pauline-ann.github.io/Meet-Me-Halfway/' target='_blank' rel='noreferrer'>
                <div className='Work-image-wrap'>
                  <ImageFadeIn
                    className='Work-image'
                    src={meetMeHalfway_small}
                    transitionTime='0.7s'
                    alt='meetMeHalfway_small'
                    fluid
                  />
                </div>
                <Divider hidden />
                <Header as='h2' content='Maps & Food' className='Work-header' />
                <p className='Work-text'>
                  Meet Me Halfway utilizes the Google Maps and Yelp APIs to ease the process of making plans with friends. This app populates businesses/restaurants onto a map, based off of a middle point between 2 addresses.
              </p>
                <List size='huge'>
                  <List.Item icon='github alternate' content={<a href='https://github.com/pauline-ann/Meet-Me-Halfway' className='listLink' target='_blank' rel='noreferrer'>View Source Code + README</a>} />
                </List>
              </a>
            </Grid.Column>
          </Grid>
        </Tab.Pane>
    }
  ]

  return (
    <div id='work'>
      <Container className='Work-container'>
        <Tab menu={{ secondary: true }} className='Work-tab-menu' panes={panes} />
        <Divider className='Section-divider' />
      </Container>
    </div>
  );
}

export default Work;