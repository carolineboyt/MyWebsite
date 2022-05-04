import * as React from "react"
import './index.css'

import CustomButton from '../components/custom-button'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import headshot from '../images/headshot3.jpg'


// markup
const IndexPage = () => {
  return (
    <div className="home-page">
      <div className="home-wrapper">
      <div className="nav-container">
        <Navbar/>
      </div>
      
      <h1>nice to meet you!</h1>
      
      <div className="home-content">
        
        <p>My name is Caroline Boyt, and I am a recent graduate of Clemson University with a Bachelor's of Science in Computer Science. During my time at Clemson, I was heavily involved with Clemson University Choirs, Pi Beta Phi Fraternity for Women, and the Paw Pantry, a student-run free food pantry dedicated to fight food insecurity among Clemson's student body. I am passionate about creating music, helping anyone who needs it, and lifting up marginalized voices in my community.</p>
        <p>I chose to pursue a career in Software Engineering to create websites, apps, and other technologies that can help communities in need. My ultimate goal is to start a company that helps small businesses run by members of marginalized communities establish online presences that will help them succeed.</p>
        <p>I am beginning my career as an Associate Software Engineer at Arccos Golf, a company that develops connected golf products. I will be working on their subscriber web portal, and am looking forward to learning more about full-stack web development in this role.</p>
        <div className="buttons">
          <CustomButton label="see my past work"/>
          <CustomButton label="see my experience"/>
        </div>
        
      </div>
      </div>
      
      <div className="footer-container">
        <Footer/>
      </div>
      
    </div>
  )
}

export default IndexPage
