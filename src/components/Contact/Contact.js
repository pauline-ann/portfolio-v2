//Dependencies
import React from "react";
import { Container, Icon } from 'semantic-ui-react'

//CSS
import "./Contact.css";

const Contact = () => {

    return (
        <div>
            <Container textAlign="center" className="Contact-container">
                <a href='https://www.linkedin.com/in/pauline-ann/'>
                    <Icon
                        name="linkedin"
                        link
                        size="large" />
                </a>
                <a href='https://github.com/pauline-ann'>
                    <Icon
                        name="github alternate"
                        link
                        size="large" />

                </a>
                <p className="Contact-text">
                    © 2019 Pauline Ann Bantayan | Made with <i className="devicon-react-original" /> & ♡
                </p>
            </Container>
        </div>
    );
}

export default Contact;