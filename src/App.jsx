import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocilaLink from './components/SocilaLink'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Expereince from './components/Expereince'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Expereince />
      <Contact />
      <Footer />

      <SocilaLink />
    </div>
  )
}

export default App
