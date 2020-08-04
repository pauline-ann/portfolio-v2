//Dependencies
import React from 'react';
import { Container, Icon, Grid, Header, List } from 'semantic-ui-react'


//CSS
import './Contact.css';

const Contact = () => {

    const phoneNum = '('.concat('3', '2', '3', ')', ' ', '3', '4', '7', '-', '9', '0', '5', '7');
    const email = 'pauline'.concat('bantayan', '@', 'gmail', '.', 'com');

    return (
        <div>
            <Container className='Contact-container' id='contact'>
                <Grid>
                    <Grid.Row>
                        {/**********  PAGE HEADER  **********/}
                        <Grid.Column>
                            <Header as='h1' content='Get in touch!' className='Section-header' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <a href='https://www.linkedin.com/in/pauline-ann/'>
                            <Icon
                                name='linkedin'
                                link
                                size='large' />
                        </a>
                        <a href='https://github.com/pauline-ann'>
                            <Icon
                                name='github alternate'
                                link
                                size='large' />

                        </a>
                        <List>
                            <List.Item
                                icon='mail'
                                content={<a className='listLink' href='mailto:paulinebantayan@gmail.com'>{email}</a>}
                            />
                            <List.Item
                                icon='phone volume'
                                content={phoneNum}
                            />
                        </List>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
}

export default Contact;