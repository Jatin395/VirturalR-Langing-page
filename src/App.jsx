import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Work from './components/Work'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Features/>
    <Work/>
    <Pricing/>
    <Testimonials/>    
    <Footer/>
    </>
  )
}
