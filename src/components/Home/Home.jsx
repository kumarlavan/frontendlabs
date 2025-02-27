import React from 'react'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Questions from '../questions/Questions'
import Footer from '../Footer/Footer'
import Hero from './Hero'


const Home = () => {
  return (
    <div >
        <Hero/>
        <About/>
        <Questions/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home