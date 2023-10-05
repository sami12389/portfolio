import React, {useState, useEffect} from 'react'
import {About, Footer, Header, Skills, Testimonial, Work, Certs} from "./container"
import "./App.scss"
import Navbar from './components/Navbar/Navbar'
import ParticlesBg from './components/ParticlesBg'


const App = () => {
  return (
    <div className = "app">
        <>
      <ParticlesBg/>
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      <Certs/>
      <Testimonial/>
      <Footer/>
      </>   
    </div>
  )
}

export default App