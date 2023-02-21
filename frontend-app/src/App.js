import React, {useState, useEffect} from 'react'
import {About, Footer, Header, Skills, Testimonial, Work, Certs} from "./container"
import "./App.scss"
import Navbar from './components/Navbar/Navbar'
import ParticlesBg from './components/ParticlesBg'
import Loader from './container/Loader/Loader'


const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <div className = "app">
       <>
       {loading ? <Loader/> : (
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
       )}
       </>     
    </div>
  )
}

export default App