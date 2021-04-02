//Dependencies
import React from 'react';
import { Container } from 'semantic-ui-react'

//CSS
import './Footer.css';

const Footer = () => {

    return (
        <div className='footer-div'>
            <Container className='Footer-container'>
                <p className='Footer-text'>
                    Developed and Designed by Pauline Ann Bantayan — Powered by <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>React <i className='devicon-react-original' /></a> — © 2019-2020
                </p>
            </Container>
        </div>
    );
}

export default Footer;