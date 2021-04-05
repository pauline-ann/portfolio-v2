// Dependencies
import React from 'react';
import { Grid, Container, Header, Divider, List, Image, Icon, Tab } from 'semantic-ui-react';

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
                <div className='Work-image-wrap'>
                  <Image
                    className='Work-image'
                    src={kdara_small}
                    alt='kdara_small'
                    fluid
                  />
                  <div className='Work-image-description'>
                    <a href='https://kdara.com/' target='_blank' rel='noreferrer'
                    ><Icon
                        name='linkify'
                        color='grey'
                        link
                        size='big' />
                    </a>
                  </div>
                </div>
                <Divider hidden />
                <Header as='h2' content="K'dara" className='Work-header' />
                <p className='Work-text'>
                  Assisted client in redesigning and developing a new WordPress website for a CBD company in Los Angeles.
                </p>
              </Grid.Column>
              {/**********  GRIFFITH PARK  **********/}
              {/**********  DESCRIPTION  **********/}
              <Grid.Column mobile={16} tablet={8} computer={8} className='Project-column'>
                <div className='Work-image-wrap'>
                  <Image
                    className='Work-image'
                    src={griffith_small}
                    alt='griffith_small'
                    fluid
                  />
                  <div className='Work-image-description'>
                    <a href='https://www.laparks.org/griffithpark/griffith-park-home-page' target='_blank' rel='noreferrer'
                    ><Icon
                        name='linkify'
                        color='grey'
                        link
                        size='big' /></a>
                  </div>
                </div>
                <Divider hidden />
                <Header as='h2' content='Griffith Park' className='Work-header' />
                <p className='Work-text'>
                  Worked with the City of Los Angeles Department of Recreation and Parks to add new features and maintain upkeep for the Griffith Park website.
              </p>
                <Divider hidden />
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
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
                    <a href='https://www.laparks.org/runyon' target='_blank' rel='noreferrer'
                    ><Icon
                        name='linkify'
                        color='grey'
                        link
                        size='big' /></a>
                  </div>
                </div>
                <Divider hidden />
                <Header as='h2' content='Runyon Canyon' className='Work-header' />
                <p className='Work-text'>
                  Collaborated with the City of Los Angeles Department of Recreation and Parks to create this informative website for the popular Runyon Canyon Park.
              </p>
              </Grid.Column>
              {/**********  Swim LA **********/}
              {/**********  DESCRIPTION  **********/}
              <Grid.Column mobile={16} tablet={8} computer={8} className='Project-column'>
                <div className='Work-image-wrap'>
                  <Image
                    className='Work-image'
                    src={learntoswim_small}
                    alt='learntoswim_small'
                    fluid
                  />
                  <div className='Work-image-description'>
                    <a href='https://www.swimla.org/' target='_blank' rel='noreferrer'
                    ><Icon
                        name='linkify'
                        color='grey'
                        link
                        size='big' /></a>
                  </div>
                </div>
                <Divider hidden />
                <Header as='h2' content='Swim LA' className='Work-header' />
                <p className='Work-text'>
                  Collaborated with the Department of Recreation and Parks to help create this promotional website for Swim LA, a swimming program to teach the youth in Los Angeles, CA.
              </p>
                <Divider hidden />
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
              <div className='Work-image-wrap'>
                <Image
                  className='Work-image'
                  src={foodie_small}
                  alt='foodie_small'
                  type='image/jp2'
                  fluid
                />
                <div className='Work-image-description'>
                  <a href='https://foodie-react-blog.herokuapp.com/' target='_blank' rel='noreferrer'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='MERN Stack Blog' className='Work-header' />
              <p className='Work-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              <List size='huge'>
                <List.Item icon='github alternate' content={<a href='https://github.com/pauline-ann/blog-react' className='listLink' target='_blank' rel='noreferrer'>View Source Code + README</a>} />
              </List>
              <Divider hidden />
            </Grid.Column>
            {/**********  OUTLANDISH BLOG  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={8} className='Project-top-column Project-column'>
              <div className='Work-image-wrap'>
                <Image
                  className='Work-image'
                  src={outlandish_small}
                  alt='outlandish_small'
                  type='image/jp2'
                  fluid
                />
                <div className='Work-image-description'>
                  <a href='https://outlandish.blog/' target='_blank' rel='noreferrer'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='WordPress Blog' className='Work-header' />
              <p className='Work-text'>
                Outlandish is an travel blog powered by WordPress. I enhanced our website's performance (image optimization, mobile responsiveness, SEO) and tailored the WordPress theme's CSS to achieve our desired function and design.
                </p>
              <Divider hidden />
            </Grid.Column>
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
                  <a href='https://adventure-game-lom.herokuapp.com/' target='_blank' rel='noreferrer'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='Promotional' className='Work-header' />
              <p className='Work-text'>
                A promotional website designed and built for a fictional video game, The Legend of Marceline. Built to be modern, highly responsive, and filled with animations using HTML, Sass, and one line of JavaScript.              </p>
              <List size='huge'>
                <List.Item icon='github alternate' content={<a href='https://github.com/pauline-ann/adventure-game' className='listLink' target='_blank' rel='noreferrer'>View Source Code + README</a>} />
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
                  <a href='https://pauline-ann.github.io/template-1/' target='_blank' rel='noreferrer'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='Plant Store' className='Work-header' />
              <p className='Work-text'>
                A very simple layout template for a plant store featuring a sleek and minimal design that follows the color palette of the header. Includes a responsive navbar and image hover effects.</p>
              <List size='huge'>
                <List.Item icon='github alternate' content={<a href='https://github.com/pauline-ann/template-1' className='listLink' target='_blank' rel='noreferrer'>View Source Code + README</a>} />
              </List>
              <Divider hidden />
            </Grid.Column>
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
                  <a href='https://zephyr-node.herokuapp.com/' target='_blank' rel='noreferrer'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='Productivity App' className='Work-header' />
              <p className='Work-text'>
                Zephyr Node is a React web application that seeks to help users reach their productivity goals.  Features include user log-in, a quote generator, flashcards, to-do lists, reminders, notes, and a homepage that summarizes all of the user's information.
              </p>
              <List size='huge'>
                <List.Item icon='github alternate' content={<a href='https://github.com/pauline-ann/Zephyr-Node' className='listLink' target='_blank' rel='noreferrer'>View Source Code + README</a>} />
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
                  <a href='https://pauline-ann.github.io/Meet-Me-Halfway/' target='_blank' rel='noreferrer'
                  ><Icon
                      name='linkify'
                      color='grey'
                      link
                      size='big' /></a>
                </div>
              </div>
              <Divider hidden />
              <Header as='h2' content='Maps & Food' className='Work-header' />
              <p className='Work-text'>
                Meet Me Halfway utilizes the Google Maps and Yelp APIs to ease the process of making plans with friends. This app populates businesses/restaurants onto a map, based off of a middle point between 2 addresses.
              </p>
              <List size='huge'>
                <List.Item icon='github alternate' content={<a href='https://github.com/pauline-ann/Meet-Me-Halfway' className='listLink' target='_blank' rel='noreferrer'>View Source Code + README</a>} />
              </List>
            </Grid.Column>
          </Grid>
        </Tab.Pane>
    }
  ]

  return (
    <div>
      <Container className='Work-container' id='work'>
        <Tab menu={{ secondary: true, style: { display: 'flex', justifyContent: 'center', fontSize: '1.9rem', marginLeft: '-45px' } }} panes={panes} />
        <Divider className='Section-divider' />
      </Container>
    </div>
  );
}

export default Work;