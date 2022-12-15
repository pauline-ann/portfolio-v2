import React from 'react'
import { Container, Button, Icon } from 'semantic-ui-react'
import { Link, useLocation } from 'react-router-dom'

// CSS
import './Error.css'

const Error404 = (props) => {

    const location = useLocation()

    return (
        <div>
            <Container flex className='Error-container'>
                <div className='Error-contents'>
                    <h1 className='Error-header'>Page not found for {location.pathname}</h1>
                    <Button
                        as={Link}
                        to='/'
                        basic
                        color='purple'
                        size='huge'
                    >
                        <Icon
                            color='primary'
                            name='home'
                        />
                        Bring me back home
                    </Button>
                </div>
            </Container>
        </div >
    )
}

export default Error404