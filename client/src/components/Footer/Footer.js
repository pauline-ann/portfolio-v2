//Dependencies
import React from 'react';
import { Container, Divider, Icon } from 'semantic-ui-react'

//CSS
import './Footer.css';

const Footer = () => {

    return (
        <div>
            <Container textAlign='center' className='Footer-container'>
                <a href='#top'>
                    <Icon name='chevron up' size='huge' />
                </a>
                <Divider hidden />
                Powered by <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>React <i className='devicon-react-original' /></a> — Developed and Designed by Pauline Ann Bantayan © 2021
            </Container>
        </div>
    );
}

export default Footer;