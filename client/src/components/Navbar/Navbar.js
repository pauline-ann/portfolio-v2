//Dependencies
import React from "react";
import { Image, Breadcrumb, Container, Header, Divider, Icon, List } from 'semantic-ui-react'

//CSS
import "./Navbar.css";

import avatar from '../../assets/images/pb-avatar.png';

const Navbar = () => {

    const email = 'pauline'.concat('bantayan', '@', 'gmail', '.', 'com');

    return (
        <React.Fragment>
            <Container className='Navbar-container' textAlign='center' id='top'>
                <a href='/'>
                    <Header as='h2'>
                        <Image src={avatar} className='Navbar-icon' />
                    </Header>
                </a>
                <Breadcrumb size='massive'>
                    <a href='https://www.linkedin.com/in/pauline-ann/'>
                        <Breadcrumb.Section className="Navbar-navlink">
                            LinkedIn
                            </Breadcrumb.Section>
                    </a>
                    <Breadcrumb.Divider icon='moon' className='breadcrumb-divider' />
                    <a href='https://github.com/pauline-ann'>
                        <Breadcrumb.Section className="Navbar-navlink">
                            GitHub
                        </Breadcrumb.Section>
                    </a>
                    <Breadcrumb.Divider icon='star' className='breadcrumb-divider' />
                    <a href={`mailto:${email}`}>
                        <Breadcrumb.Section className="Navbar-navlink">
                            Contact
                        </Breadcrumb.Section>
                    </a>
                </Breadcrumb>
                <Divider />
                <Header as='h1' className='Navbar-header'>
                    Hi! I'm Pauline Bantayan, a front-end developer based in Los Angeles.
                </Header>
                <Container text>
                    <Header as='h2' inverted className='Navbar-text'>
                        I love the process of transforming ideas into intuitive and immersive web applications through design and code.
                    </Header>
                    <List link size='massive' className='Navbar-list'>
                        <List.Item as='a' className='Navbar-list-link'>
                            <a href='#work'>
                                <Icon name='right chevron' />Explore my projects
                        </a>
                        </List.Item>
                        <List.Item as='a' className='Navbar-list-link'>
                            <a href='#skills'>
                                <Icon name='right chevron' />View my technical background
                        </a>
                        </List.Item>
                        <List.Item as='a' className='Navbar-list-link'>
                            <a href='#about'>
                                <Icon name='right chevron' />Learn more about me
                        </a>
                        </List.Item>
                    </List>
                </Container>
            </Container>
        </React.Fragment>
    );
}

export default Navbar;