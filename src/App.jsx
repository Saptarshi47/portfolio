import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Education from './components/education/Education'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <Education/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App