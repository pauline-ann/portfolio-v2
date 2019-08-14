import React from "react";
import Navbar from "./Navbar";

const Error404 = (props) => {

    return (
        <div>
            <Navbar />
            <p style={{ "text-align": "center" }}>Page not found for {props.location.pathname}.</p>
        </div>
    );
}

export default Error404;