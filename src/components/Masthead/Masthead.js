//Dependencies
import React from 'react';
import { Container, Header, Button, Divider, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Image, BackgroundImage } from 'react-image-and-background-image-fade';
import { HashLink as HashLink } from 'react-router-hash-link';

// Image
import Avatar from '../../assets/images/ny.jpeg';
import Background from '../../assets/images/desk.jpg';

//Components
import Navbar from '../Navbar/Navbar';

//CSS
import './Masthead.css';

const Masthead = () => {

    return (
        <div>
            <BackgroundImage
                useChild
                transitionTime='0.2s'
                src={Background}
                className='Masthead'
            >
                <div className='Masthead'>
                    <Navbar />
                    <Container
                        text
                        vertical='true'
                        textAlign='center'
                        className='Masthead-container'
                    >
                        <Image
                            src={Avatar}
                            transitionTime='1.2s'
                            alt='avatar'
                            className='Masthead-avatar'
                        />
                        <Header
                            as='h1'
                            content='Pauline Ann Bantayan is a Software Developer based in Los Angeles, CA.'
                            className='Masthead-header-name'
                        />
                        <Divider hidden />
                        <Button circular
                            as={HashLink}
                            to='#work'
                            basic
                            color='violet'
                            className='Masthead-header-button'
                        >
                            Work
              </Button>
                        <Button
                            as={HashLink}
                            to='#about'
                            basic
                            color='violet'
                            className='Masthead-header-button'
                        >
                            About
            </Button>
                    </Container>
                </div>
            </BackgroundImage>
        </div>
    );
}

export default Masthead;