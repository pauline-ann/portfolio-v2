import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

const Error404 = (props) => {

    return (
        <div>
            <Navbar />
            <p style={{ "text-align": "center" }}>Sorry! Page not found for {props.location.pathname}.</p>
            <Footer />
        </div>
    );
}

export default Error404;