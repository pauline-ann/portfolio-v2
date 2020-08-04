//Dependencies
import React from 'react';
import { Container, Header, Button, Divider, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Image, BackgroundImage } from 'react-image-and-background-image-fade';

// Image
import Avatar from '../../assets/images/ny.jpeg';
import Background from '../../assets/images/desk.jpg'

//Components
import Masthead from '../Masthead/Masthead';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

//CSS
import './Home.css';

const Home = () => {

  return (
    <div>
      <Masthead />
      {/* ABOUT */}
      <About />
      {/* PROJECTS */}
      <Projects />
      {/* CONTACT */}
      <Contact />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;