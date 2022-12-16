//Dependencies
import React from "react"
import { Image, Breadcrumb, Container, Header, Divider, Icon, List } from 'semantic-ui-react'

//CSS
import "./Navbar.css"

import avatar from '../../assets/images/paupixel.ico'
import avatarHover from '../../assets/images/pau-wink.png'

const Navbar = () => {

    const email = 'pauline'.concat('bantayan', '@', 'gmail', '.', 'com')

    return (
        <React.Fragment>
            <Container className='Navbar-container' textAlign='center' id='top'>
                <a href='/'>
                    <Header as='h2'>
                        <Image src={avatar} className='Navbar-icon animated-med animatedFadeIn fadeIn' onMouseOver={e => e.currentTarget.src = avatarHover} onMouseOut={e => e.currentTarget.src = avatar} />
                    </Header>
                </a>
                <Breadcrumb size='massive' className='animated-med animatedFadeIn fadeIn'>
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
                <Header as='h1' className='Navbar-header font-face-pixel animated-fast animatedFadeInUp fadeInUp'>
                    Hi there, I'm Pauline! <br />
                    I'm a full stack web developer.
                </Header>
                <Container text textAlign='center'>
                    <p className='Navbar-header-sub animated-med animatedFadeInUp fadeInUp font-face-pixel'>
                        &#x1f334;
                        Los Angeles, CA
                    </p>
                    <List link size='massive' className='Navbar-list animated-slow animatedFadeInUp fadeInUp'>
                        <List.Item as='a' className='Navbar-list-link'>
                            <a href='#work'>
                                <Icon name='right chevron' />Explore projects
                            </a>
                        </List.Item>
                        <List.Item as='a' className='Navbar-list-link'>
                            <a href='#skills'>
                                <Icon name='right chevron' />View technical skills
                            </a>
                        </List.Item>
                        {/* <List.Item as='a' className='Navbar-list-link'>
                            <a href='#about'>
                                <Icon name='right chevron' />Contemplate art
                            </a>
                        </List.Item> */}
                        <List.Item as='a' className='Navbar-list-link'>
                            <a href='#about'>
                                <Icon name='right chevron' />Learn more about me
                            </a>
                        </List.Item>
                    </List>
                </Container>
            </Container>
        </React.Fragment >
    )
}

export default Navbar