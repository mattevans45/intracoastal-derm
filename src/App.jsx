import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactSection from './ContactSection'
import Hero from "./Hero"


function App() {


  return (
    
    <>
    <Navbar />
    <Hero />

    <ContactSection />
       <Footer />

      </>
  )
}

export default App
