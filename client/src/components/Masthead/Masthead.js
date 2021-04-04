//Dependencies
import React from 'react';
import { Header, Button, Divider, Image, Icon } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';

// Image
import Avatar from '../../assets/images/ny.jpeg';
import logo from '../../assets/images/pb_logo_grey.png';

//CSS
import './Masthead.css';

const Masthead = () => {

    return (
        <React.Fragment>
            <div className='Masthead'>
                <div className='Masthead-logo-box'>
                    <Image
                        src={logo}
                        alt='logo'
                        as='a'
                        href='/'
                        className='Masthead-logo'
                        size='mini'
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
                        color='primary'
                        className='Masthead-header-button'
                        animated
                    >
                        <Button.Content visible>Work</Button.Content>
                        <Button.Content hidden>
                            <Icon name='angle double down' className='Masthead-header-button-icon' />
                        </Button.Content>
                    </Button>
                    <Button
                        as={HashLink}
                        to='#about'
                        basic
                        color='primary'
                        className='Masthead-header-button'
                        animated
                    >
                        <Button.Content visible>About</Button.Content>
                        <Button.Content hidden>
                            <Icon name='angle double down' className='Masthead-header-button-icon' />
                        </Button.Content>
                    </Button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Masthead;