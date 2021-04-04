//Dependencies
import React from 'react';
import { Container, Divider } from 'semantic-ui-react'

//CSS
import './Footer.css';

const Footer = () => {

    return (
        <div>
            <Container textAlign='center' className='Footer-container'>
                Powered by <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>React <i className='devicon-react-original' /></a> — Developed and Designed by Pauline Ann Bantayan © 2021
            </Container>
        </div>
    );
}

export default Footer;