//Dependencies
import React from 'react';

//Components
import Navbar from '../Navbar/Navbar';
import Masthead from '../Masthead/Masthead';
import Work from '../Work/Work';
import Skills from '../Skills/Skills';
import Education from '../Education/Education';
import About from '../About/About';
import Footer from '../Footer/Footer';

//CSS
import './Home.css';

const Home = () => {

  return (
    <div>
      <Navbar />
      {/* <Masthead /> */}
      <Work />
      <Skills />
      <Education />
      <About />
      <Footer />
    </div>
  );
}

export default Home;