import React from "react";
import { Container, Icon } from 'semantic-ui-react'

// Footer
const Footer = (props) => {

    const footerStyle = {
        background: "transparent",
        bottom: "0",
        left: "0",
        right: "0",
        paddingTop: "5em",
        paddingBottom: "0.8em",
        marginBottom: "0",
        position: "relative"
    }

    const footerText = {
        fontWeight: 'normal',
        paddingTop: "0.6em",
        fontSize: "0.9em"
    }

    if (props.page === "About") {
        footerStyle.paddingTop = "0"
    }

    return (
        <div style={footerStyle}>
            <Container textAlign="center">
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
                <p style={footerText}>
                    © 2019 Pauline Ann Bantayan | Made with <i class="devicon-react-original" /> & ♡
                </p>
            </Container>
        </div>
    );
}

export default Footer;