//Dependencies
import React from 'react';
import { Header, Button, Divider, Image } from 'semantic-ui-react';
import { HashLink as HashLink } from 'react-router-hash-link';

// Image
import Avatar from '../../assets/images/ny.jpeg';
import logo from '../../assets/images/pb_logo_grey.png';

//CSS
import './Masthead.css';

const Masthead = () => {

    return (
        <div>
            <div className='Masthead'>
                <div className='Masthead-logo-box'>
                    <Image
                        src={logo}
                        alt='logo'
                        className='Masthead-logo'
                    />
                </div>
                <div className='Masthead-main-box'>
                    <Image
                        centered
                        src={Avatar}
                        alt='avatar'
                        className='Masthead-avatar'
                    />
                    <Header as='h1' className='Masthead-header-name'>
                        Pauline Ann Bantayan is a Software Developer based in Los Angeles, CA.
                        </Header>
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
                </div>
            </div>
        </div>
    );
}

export default Masthead;