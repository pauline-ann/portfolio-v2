// Dependencies
import React from 'react';
import { Grid, Container, Header, Icon, Popup, Divider, Modal, List } from 'semantic-ui-react';
import { Image } from 'react-image-and-background-image-fade';

// CSS
import './Skills.css';

// Images


const Skills = () => {

    return (
        <div className='skills-div'>
            <Container className='Skills-container' id='skills'>
                <Grid>
                    <Grid.Row columns={4} >
                        {/**********  PAGE HEADER  **********/}
                        <Grid.Column mobile={16} tablet={4} computer={4}>
                            <Header as='h1' content='Skills' className='Section-header' />
                        </Grid.Column>
                        <Grid.Column mobile={5} tablet={4} computer={4} className='Skills-column'>
                            <Header as='h3' content='Front End' className='Skills-header' />
                            <List>
                                <List.Item>
                                    <List.Icon name='html5' />
                                    <List.Content>HTML</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='css3' />
                                    <List.Content>CSS</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='js' />
                                    <List.Content>JavaScript</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon><i className='devicon-jquery-plain' /></List.Icon>
                                    <List.Content>jQuery</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='react' />
                                    <List.Content>React</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon><i className='devicon-bootstrap-plain'></i></List.Icon>
                                    <List.Content>Bootstrap</List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column mobile={5} tablet={4} computer={4} className='Skills-column'>
                            <Header as='h3' content='Back End' className='Skills-header' />
                            <List>
                                <List.Item>
                                    <List.Icon><i className='devicon-express-original' /></List.Icon>
                                    <List.Content>Express</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='node' />
                                    <List.Content>Node</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon><i className='devicon-mysql-plain' /></List.Icon>
                                    <List.Content>MySQL</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon><i className='devicon-mongodb-plain' /></List.Icon>
                                    <List.Content>MongoDB</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='python' />
                                    <List.Content>Python</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon><i className='devicon-sequelize-plain' /></List.Icon>
                                    <List.Content>Sequelize</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='wordpress' />
                                    <List.Content>WordPress</List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column mobile={5} tablet={4} computer={4}  className='Skills-column'>
                            <Header as='h3' content='Tools' className='Skills-header' />
                            <List>
                                <List.Item>
                                    <List.Icon name='git' />
                                    <List.Content>Git</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='github alternate' />
                                    <List.Content>GitHub</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='gitlab' />
                                    <List.Content>GitLab</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon><i className='devicon-heroku-original' /></List.Icon>
                                    <List.Content>Heroku</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='chrome' />
                                    <List.Content>Chrome Developer Tools</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon><i className='devicon-visualstudio-plain' /></List.Icon>
                                    <List.Content>Visual Studio Code</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='trello' />
                                    <List.Content>Trello</List.Content>
                                </List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                    <Divider className='Section-divider'/>
                </Grid>
            </Container >
        </div >
    );
}

export default Skills;