import * as React from "react"
import './index.css'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import headshot from '../images/headshot.jpg'


// markup
const Experience = () => {
  return (
    <div className="home-page">
      <div className="nav-container">
        <Navbar/>
      </div>
      <h1>my experience</h1>
      
      <div className="footer-container">
        <Footer/>
      </div>
      
    </div>
  )
}

export default Experience
