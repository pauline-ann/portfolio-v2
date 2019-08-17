// Dependencies
import React from "react";
import { Grid, Container, Header, Image, Icon, Popup, Divider, Modal, List } from "semantic-ui-react";

// Components
import Navbar from "./Navbar";

// CSS
import "./Projects.css";

// Images
import zephyr1 from "../assets/images/project_img/zephyr_1.png";
import zephyr2 from "../assets/images/project_img/zephyr_2.png";
import lightHouse1 from "../assets/images/project_img/lighthouse_1.png";
import lightHouse2 from "../assets/images/project_img/lighthouse_2.png";
import meetMeHalfway1 from "../assets/images/project_img/mmh_1.png";
import meetMeHalfway2 from "../assets/images/project_img/mmh_2.png";

const Projects = () => {

  const projectHeader = {
    fontFamily: "'Fira Code', monospace"
  }

  const zephyrStack = [
    {
      name: "HTML",
      iconName: "devicon-html5-plain"
    },
    {
      name: "CSS",
      iconName: "devicon-css3-plain"
    },
    {
      name: "JavaScript",
      iconName: "devicon-javascript-plain"
    },
    {
      name: "React",
      iconName: "devicon-react-plain"
    },
    {
      name: "MySQL",
      iconName: "devicon-mysql-plain"
    },
    {
      name: "Sequelize",
      iconName: "devicon-sequelize-plain"
    },
    {
      name: "Heroku",
      iconName: "devicon-heroku-plain"
    }
  ]

  const lightHouseStack = [
    {
      name: "HTML",
      iconName: "devicon-html5-plain"
    },
    {
      name: "CSS",
      iconName: "devicon-css3-plain"
    },
    {
      name: "JavaScript",
      iconName: "devicon-javascript-plain"
    },
    {
      name: "Node",
      iconName: "devicon-nodejs-plain"
    },
    {
      name: "Express",
      iconName: "devicon-express-original"
    },
    {
      name: "MySQL",
      iconName: "devicon-mysql-plain"
    },
    {
      name: "Heroku",
      iconName: "devicon-heroku-plain"
    }
  ]

  const meetMeHalfwayStack = [
    {
      name: "HTML",
      iconName: "devicon-html5-plain"
    },
    {
      name: "CSS",
      iconName: "devicon-css3-plain"
    },
    {
      name: "JavaScript",
      iconName: "devicon-javascript-plain"
    },
    {
      name: "jQuery",
      iconName: "devicon-jquery-plain"
    }
  ]

  return (
    <div>
      <Navbar />
      <Container>
        <Grid>
          <Grid.Row>
            {/**********  PAGE HEADER  **********/}
            <Grid.Column>
              <Header as="h2" content="//Projects" style={projectHeader} />
            </Grid.Column>
          </Grid.Row>
          {/**********  ZEPHYR NODE  **********/}
          <Grid.Row divided>
            {/**********  IMAGE/POPUP  **********/}
            <Grid.Column mobile={16} tablet={8} computer={6}>
              <Modal trigger={<Image className="projectImage" fluid src={zephyr1} />} basic size="large" closeIcon>
                <Image src={zephyr1} />
                <Image src={zephyr2} />
              </Modal>
            </Grid.Column>
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={10}>
              <Divider hidden />
              <Header as="h3" content="Zephyr Node" style={projectHeader} />
              <p>
                A web application that utilizes the Google Maps and Yelp APIs to ease the process of making plans with friends. Populates businesses/restaurants onto a map, based off of a middle point between 2 addresses.
              </p>
              {zephyrStack.map((stackItem) => (
                <Popup
                  key={stackItem.name}
                  content={stackItem.name}
                  trigger={<Icon size="small" color="violet" circular><i class={stackItem.iconName} /></Icon>}
                  position="bottom center"
                />
              ))}
              <Divider hidden />
              <List>
                <List.Item icon='github' content={<a href='https://github.com/pauline-ann/Zephyr-Node'>GitHub</a>} />
                <List.Item icon='globe' content={<a href='https://zephyr-node.herokuapp.com/'>Site</a>} />
              </List>
            </Grid.Column>
          </Grid.Row>
          {/**********  LIGHTHOUSE  **********/}
          <Grid.Row divided>
            {/**********  IMAGE/POPUP  **********/}
            <Grid.Column mobile={16} tablet={8} computer={6}>
              <Modal trigger={<Image className="projectImage" fluid src={lightHouse1} />} basic size="large" closeIcon>
                <Image src={lightHouse1} />
                <Image src={lightHouse2} />
              </Modal>
            </Grid.Column>
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={10}>
              <Divider hidden />
              <Header as="h3" content="lightHouse" style={projectHeader} />
              <p>
                Full-stack web application that is meant to help women navigate their social outings in Los Angeles. Allows users to search neighborhoods for safety reviews, as well as provide their own input regarding its safety.
              </p>
              {lightHouseStack.map((stackItem) => (
                <Popup
                  key={stackItem.name}
                  content={stackItem.name}
                  trigger={<Icon size="small" color="violet" circular><i class={stackItem.iconName} /></Icon>}
                  position="bottom center"
                />
              ))}
              <Divider hidden />
              <List>
                <List.Item icon='github' content={<a href='https://github.com/pauline-ann/LightHouse'>GitHub</a>} />
                <List.Item icon='globe' content={<a href='https://lighthouse-project2.herokuapp.com/'>Site</a>} />
              </List>
            </Grid.Column>
          </Grid.Row>
          {/**********  MEET ME HALFWAY  **********/}
          <Grid.Row divided>
            {/**********  IMAGE/POPUP  **********/}
            <Grid.Column mobile={16} tablet={8} computer={6}>
              <Modal trigger={<Image className="projectImage" fluid src={meetMeHalfway1} />} basic size="large" closeIcon>
                <Image src={meetMeHalfway1} />
                <Image src={meetMeHalfway2} />
              </Modal>
            </Grid.Column>
            {/**********  DESCRIPTION  **********/}
            <Grid.Column mobile={16} tablet={8} computer={10}>
              <Divider hidden />
              <Header as="h3" content="Meet Me Halfway" style={projectHeader} />
              <p>
                A study application made using React.js. Some of its features include: user log-in, quote generator, flashcards, to-do lists, reminders, notes, and a homepage summarizing all of the user's information.
              </p>
              {meetMeHalfwayStack.map((stackItem) => (
                <Popup
                  key={stackItem.name}
                  content={stackItem.name}
                  trigger={<Icon size="small" color="violet" circular><i class={stackItem.iconName} /></Icon>}
                  position="bottom center"
                />
              ))}
              <List>
                <List.Item icon='github' content={<a href='https://github.com/pauline-ann/Meet-Me-Halfway'>GitHub</a>} />
                <List.Item icon='globe' content={<a href='https://pauline-ann.github.io/Meet-Me-Halfway/'>Site</a>} />
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default Projects;