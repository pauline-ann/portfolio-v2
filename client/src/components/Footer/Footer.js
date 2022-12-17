//Dependencies
import React from 'react'
import { Container, Divider, Icon } from 'semantic-ui-react'

//CSS
import './Footer.css'

const Footer = () => {

    return (
        <div>
            <Container textAlign='center' className='Footer-container'>
                <a href='#top' className='back-to-top'>
                    <Icon name='angle double up' size='huge' />
                </a>
                <p className='back-to-top-text'>Back to Top</p>
                <Divider hidden section />
                Made with <a href='https://reactjs.org/' target='_blank' rel='noreferrer'>React <i className='devicon-react-original' /></a> — © 2022
            </Container>
        </div>
    )
}

export default Footer