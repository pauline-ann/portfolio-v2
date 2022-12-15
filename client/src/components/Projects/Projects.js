// Dependencies
import React from "react"
import {
  Grid,
  Container,
  Header,
  Divider,
  List,
  Tab,
  Image,
  Modal,
} from "semantic-ui-react"
import ImageFadeIn from "react-image-fade-in"
import { Link } from "react-router-dom"

// CSS
import "./Projects.css"

// Images
import kdara_small from "../../assets/images/project_img/kdara_small.jpg"
import foodie_small from "../../assets/images/project_img/foodie_small.jpg"
import outlandish_small from "../../assets/images/project_img/outlandish_small.jpg"
import griffith_small from "../../assets/images/project_img/griffith_small.jpg"
import learntoswim_small from "../../assets/images/project_img/learntoswim_small.jpg"
import lom_small from "../../assets/images/project_img/lom_small.jpg"
import plants_small from "../../assets/images/project_img/plants_small.jpg"
import twitterbot_small from "../../assets/images/project_img/twitterbot_small.jpg"

// Gifs
import before from "../../assets/images/project_img/kdara-before.gif"
import after from "../../assets/images/project_img/kdara-after.gif"

const Work = () => {
  const [openBefore, setOpenBefore] = React.useState(false)
  const [openAfter, setOpenAfter] = React.useState(false)

  const panes = [
    {
      menuItem: "Featured",
      render: () => (
        <Tab.Pane attached={false} basic>
          <Grid stackable>
            {/**********  TWITTER BOT **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              className="Project-top-column Project-column"
            >
              <a
                href="https://twitter.com/space_generator"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Work-image-wrap">
                  <ImageFadeIn
                    opacityTransition={1.3}
                    className="Work-image"
                    src={twitterbot_small}
                    alt="twitterbot_small"
                    type="image/jp2"
                    fluid
                  />
                </div>
                <Header
                  as="h2"
                  content="Twitter Bot"
                  className="Work-header"
                />
                <p className="Work-text">
                  A Twitter bot that posts photos (and videos!) from the NASA
                  "Astronomy Picture of the Day" API daily.
                </p>
                <List size="huge">
                  <List.Item
                    icon="github alternate"
                    content={
                      <a
                        href="https://github.com/pauline-ann/NASA-photo-twitter-bot"
                        className="listLink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Source Code + README
                      </a>
                    }
                  />
                </List>
                <Divider hidden section />
              </a>
            </Grid.Column>
            {/**********  OUTLANDISH BLOG  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              className="Project-top-column Project-column"
            >
              <a
                href="https://outlandish.blog/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Work-image-wrap">
                  <ImageFadeIn
                    opacityTransition={1.3}
                    className="Work-image"
                    src={outlandish_small}
                    alt="outlandish_small"
                    type="image/jp2"
                    fluid
                  />
                </div>
                <Header
                  as="h2"
                  content="WordPress Blog"
                  className="Work-header"
                />
                <p className="Work-text">
                  Outlandish is a travel blog powered by WordPress. I enhanced
                  our website's performance (image optimization, mobile
                  responsiveness, SEO) and tailored the WordPress theme's CSS to
                  achieve our desired function and design.
                </p>
                <Divider hidden section />
              </a>
            </Grid.Column>
            {/**********  K'DARA  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              className="Project-column"
            >
              <a href="https://kdara.com/" target="_blank" rel="noreferrer">
                <div className="Work-image-wrap">
                  <ImageFadeIn
                    opacityTransition={1.3}
                    className="Work-image"
                    src={kdara_small}
                    alt="kdara_small"
                    fluid
                  />
                </div>
                <Header as="h2" content="K'dara" className="Work-header" />
                <p className="Work-text">
                  Complete redesign and rebranding for an e-commerce website
                  hosted on WordPress. Implemented new features and plug-ins
                  into the existing site to modernize and improve performance.
                </p>
              </a>
              <Modal
                onClose={() => setOpenBefore(false)}
                onOpen={() => setOpenBefore(true)}
                open={openBefore}
                trigger={
                  <List size="huge">
                    <List.Item
                      icon="caret right"
                      as={Link}
                      content={"Before Website Revamp"}
                    />
                  </List>
                }
                closeIcon
              >
                <Modal.Header className="Work-modal-header">
                  Before
                </Modal.Header>
                <Modal.Content image>
                  <Image src={before} fluid />
                </Modal.Content>
              </Modal>
              <Modal
                onClose={() => setOpenAfter(false)}
                onOpen={() => setOpenAfter(true)}
                open={openAfter}
                trigger={
                  <List size="huge">
                    <List.Item
                      icon="caret right"
                      as={Link}
                      content={"After Website Revamp"}
                    />
                  </List>
                }
                closeIcon
              >
                <Modal.Header className="Work-modal-header">After</Modal.Header>
                <Modal.Content image>
                  <Image src={after} fluid />
                </Modal.Content>
              </Modal>
              <Divider hidden section />
            </Grid.Column>
            {/**********  GRIFFITH PARK  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              className="Project-column"
            >
              <a
                href="https://www.laparks.org/griffithpark/griffith-park-home-page"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Work-image-wrap">
                  <ImageFadeIn
                    opacityTransition={1.3}
                    className="Work-image"
                    src={griffith_small}
                    alt="griffith_small"
                    fluid
                  />
                </div>
                <Header
                  as="h2"
                  content="Griffith Park"
                  className="Work-header"
                />
                <p className="Work-text">
                  Added new features and new information to the Griffith Park
                  homepage to welcome their new Parkline Shuttle program,
                  alongside maintaining regular upkeep.
                </p>
                <Divider hidden section />
              </a>
            </Grid.Column>
            {/**********  Swim LA **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              className="Project-column"
            >
              <a
                href="https://www.swimla.org/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Work-image-wrap">
                  <ImageFadeIn
                    opacityTransition={1.3}
                    className="Work-image"
                    src={learntoswim_small}
                    alt="learntoswim_small"
                    fluid
                  />
                </div>
                <Header as="h2" content="Swim LA" className="Work-header" />
                <p className="Work-text">
                  Created a website for Swim LA, a swimming program to teach the
                  youth in Los Angeles, as per the Governor’s request.
                </p>
                <Divider hidden section />
              </a>
            </Grid.Column>
          </Grid>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Personal",
      render: () => (
        <Tab.Pane attached={false} basic>
          <Grid stackable>
            {/* *********  FOODIE BLOG  ********* */}
            {/**********  DESCRIPTION  **********/}
            {/* <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              className="Project-top-column Project-column"
            >
              <a
                href="https://foodie-react-blog.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Work-image-wrap">
                  <ImageFadeIn
                    opacityTransition={1.3}
                    className="Work-image"
                    src={foodie_small}
                    alt="foodie_small"
                    type="image/jp2"
                    fluid
                  />
                </div>
                <Header
                  as="h2"
                  content="MERN Stack Blog"
                  className="Work-header"
                />
                <p className="Work-text">
                  Foodie is a full stack blogging application built on MongoDB,
                  Express, React, and Node.js. Foodies welcome!
                </p>
                <List size="huge">
                  <List.Item
                    icon="github alternate"
                    content={
                      <a
                        href="https://github.com/pauline-ann/blog-react"
                        className="listLink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Source Code + README
                      </a>
                    }
                  />
                </List>
                <Divider hidden section />
              </a>
            </Grid.Column> */}
            {/**********  LEGEND OF MARCELINE  **********/}
            {/**********  DESCRIPTION  **********/}
            {/* <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              className="Project-column"
            >
              <a
                href="https://adventure-game-lom.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Work-image-wrap">
                  <ImageFadeIn
                    opacityTransition={1.3}
                    className="Work-image"
                    src={lom_small}
                    alt="lom_small"
                    fluid
                  />
                </div>
                <Header as="h2" content="Promotional" className="Work-header" />
                <p className="Work-text">
                  A promotional website designed and built for a fictional video
                  game, The Legend of Marceline. Built to be modern, highly
                  responsive, and filled with animations using HTML, Sass, and
                  one line of JavaScript.{" "}
                </p>
                <List size="huge">
                  <List.Item
                    icon="github alternate"
                    content={
                      <a
                        href="https://github.com/pauline-ann/adventure-game"
                        className="listLink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Source Code + README
                      </a>
                    }
                  />
                </List>
                <Divider hidden section />
              </a>
            </Grid.Column> */}
            {/**********  PLANT STORE  **********/}
            {/**********  DESCRIPTION  **********/}
            <Grid.Column
              mobile={16}
              tablet={8}
              computer={8}
              className="Project-top-column Project-column"
            >
              <a
                href="https://pauline-ann.github.io/template-1/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="Work-image-wrap">
                  <ImageFadeIn
                    opacityTransition={1.3}
                    className="Work-image"
                    src={plants_small}
                    alt="plants_small"
                    fluid
                  />
                </div>
                <Header as="h2" content="Plant Store" className="Work-header" />
                <p className="Work-text">
                  A minimalistic layout template for a plant store featuring a
                  sleek design that follows the color palette of the header.
                  Includes a responsive navbar and image hover effects.
                </p>
                <List size="huge">
                  <List.Item
                    icon="github alternate"
                    content={
                      <a
                        href="https://github.com/pauline-ann/template-1"
                        className="listLink"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Source Code + README
                      </a>
                    }
                  />
                </List>
                <Divider hidden section />
              </a>
            </Grid.Column>
          </Grid>
        </Tab.Pane>
      ),
    },
  ]

  return (
    <div id="work">
      <Container className="Work-container">
        <Tab
          menu={{ secondary: true }}
          className="Work-tab-menu"
          panes={panes}
        />
        <Divider className="Section-divider" />
      </Container>
    </div>
  )
}

export default Work
