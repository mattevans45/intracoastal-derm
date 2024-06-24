import { useState } from 'react'
import './index.css'
import ContactSection from './ContactSection'
import Hero from "./components/Hero"

import HeroServices from './HeroServices'

import AboutUs from './components/AboutUs.jsx'
import ServicesLanding from './components/ServicesLanding.jsx'
import Testimonials from './components/Testimonials.jsx'
import MeetTheTeam from './components/MeetTheTeam.jsx'

function App() {
  return (
    
    <>

    <Hero />
    <HeroServices />
    <AboutUs />
    <ServicesLanding />
    <Testimonials />
    <MeetTheTeam />
    <ContactSection />
      </>
  )
}

export default App
