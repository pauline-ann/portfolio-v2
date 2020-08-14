//Dependencies
import React from 'react';

//Components
import Masthead from '../Masthead/Masthead';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

//CSS
import './Home.css';

const Home = () => {

  return (
    <div>
      <Masthead />
      {/* WORK */}
      <Work />
      {/* SKILLS */}
      <Skills />
      {/* EDUCATION */}
      <Education />
      {/* ABOUT */}
      <About />
      {/* CONTACT */}
      <Contact />
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;