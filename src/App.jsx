import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import ContactSection from './ContactSection'

function App() {


  return (
    
    <div className="min-h-screen flex flex-col">
    <Navbar />
    <ContactSection />
       <Footer />

      </div>
  )
}

export default App
