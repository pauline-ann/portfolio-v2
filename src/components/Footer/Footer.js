//Dependencies
import React from "react";
import { Container, Icon } from 'semantic-ui-react'

//CSS
import "./Footer.css";

const Footer = () => {

    return (
        <div>
            <Container textAlign="center" className="Footer-container">
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
                <p className="Footer-text">
                    © 2019 Pauline Ann Bantayan | Made with <i className="devicon-react-original" /> & ♡
                </p>
            </Container>
        </div>
    );
}

export default Footer;