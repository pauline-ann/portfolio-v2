//Dependencies
import React from 'react';
import { Container, Icon } from 'semantic-ui-react'

//CSS
import './Footer.css';

const Footer = () => {

    return (
        <div className='footer-div'>
            <Container className='Footer-container'>
                <p className='Footer-text'>
                    © 2019-2020 - Made by Pauline Ann Bantayan - Powered by <a href='https://reactjs.org/' target='_blank'>React <i className='devicon-react-original' /></a>
                </p>
            </Container>
        </div>
    );
}

export default Footer;