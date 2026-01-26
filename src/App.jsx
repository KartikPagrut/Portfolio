// import React, { useEffect } from 'react'
// import { Routes, Route } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Clients from "./sections/Clients"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
import Experience from './sections/Experience'

const App = () => {
  
  return (
    <>
    
      <Navbar/>
       <Hero/>
       <About/>
       <Project/>
       <Clients/>
       <Experience/>
       <Contact/>
    
    </>
  )
}

export default App
