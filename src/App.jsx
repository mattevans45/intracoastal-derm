import { useState } from 'react'

import './index.css'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactSection from './ContactSection'
import Hero from "./components/Hero"
import SideBar from './backupsidebar'
import HeroServices from './HeroServices'
import AlertBar from './components/Alertbar.jsx';
import ContactBar from './components/ContactBar';
import { Parallax } from './components/Parallax.jsx'
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
