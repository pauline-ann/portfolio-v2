//Dependencies
import React from 'react'

//Components
import Navbar from '../Navbar/Navbar'
import Projects from '../Projects/Projects'
import Skills from '../Skills/Skills'
import Education from '../Education/Education'
import About from '../About/About'
import Footer from '../Footer/Footer'

//CSS
import './Home.css'

const Home = () => {

  return (
    <div>
      <Navbar />
      <Projects />
      <Skills />
      <Education />
      <About />
      <Footer />
    </div>
  )
}

export default Home