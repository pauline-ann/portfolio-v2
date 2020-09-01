//Dependencies
import React from 'react';
import { Container, Icon, Grid, Header, List } from 'semantic-ui-react'


//CSS
import './Contact.css';

const Contact = () => {

    const phoneNum = '('.concat('3', '2', '3', ')', ' ', '3', '4', '7', '-', '9', '0', '5', '7');
    const email = 'pauline'.concat('bantayan', '@', 'gmail', '.', 'com');

    return (
        <div className='contact-div'>
            <Container className='Contact-container' id='contact'>
                <Grid>
                    <Grid.Row>
                        {/**********  PAGE HEADER  **********/}
                        <Grid.Column textAlign='center'>
                            <Header as='h2' content='Get in touch' className='Section-header' />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid textAlign='center' columns={4}>
                    <Grid.Row>
                        <Grid.Column>
                            <a href='https://www.linkedin.com/in/pauline-ann/'>
                                <Icon
                                    name='linkedin'
                                    link
                                    size='huge' />
                            </a>
                        </Grid.Column>
                        <Grid.Column>
                            <a href='https://github.com/pauline-ann'>
                                <Icon
                                    name='github alternate'
                                    link
                                    size='huge' />

                            </a>
                        </Grid.Column>
                        <Grid.Column>
                            <a href='mailto:paulinebantayan@gmail.com'>
                                <Icon
                                    name='mail'
                                    link
                                    size='huge' />
                            </a>
                        </Grid.Column>
                        <Grid.Column>
                            <a href='tel:3233479057'>
                                <Icon
                                    name='phone volume'
                                    link
                                    size='huge' />
                            </a>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div >
    );
}

export default Contact;