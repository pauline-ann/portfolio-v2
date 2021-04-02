import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Error404 = (props) => {

    return (
        <div>
            <Container textAlign='center' centered style={{ minHeight: '80vh', position: 'relative', paddingTop: '15em' }}>
                <p>Sorry! Page not found for {props.location.pathname}.</p>
                <Button
                    as={Link}
                    to='/'
                    basic
                    color='violet'
                >
                    <Icon
                        color='violet'
                        name='home'
                    />
                    Back to home
            </Button>
            </Container>
        </div >
    );
}

export default Error404;