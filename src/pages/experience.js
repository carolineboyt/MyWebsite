import * as React from "react"
import { useState } from 'react'
import './experience.css'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import headshot from '../images/headshot.jpg'

const Experience = () => {
  return (
    <div className="experience-page">
      <div className="nav-container">
        <Navbar/>
      </div>

      <div className="experience-wrapper">
        <h1>my experience</h1>
      
        <JobPanel 
          company="Fortis Riders"
          title="Software Engineering Intern"
          dates="January 2019 - December 2019"
          bullets={[
            "Updated Fortis iOS apps to adhere to accessibility standards.",
            "Assisted in design and implementation of new features for Fortis iOS apps in Swift and SwiftUI.",
            "Wrote UI and Unit Tests for Fortis iOS apps."
          ]}
        />
        <JobPanel 
          company="Clemson University Choirs"
          title="Administrative Assistant"
          dates="March 2020 - May 2022"
        />
        <JobPanel 
          company="Clemson University General Engineering"
          title="Undergraduate Teaching Assistant"
          dates="January 2018 - May 2018"
        />
      </div>
      

      <div className="footer-container">
        <Footer/>
      </div>
      
    </div>

  )
}

const JobPanel = (props) => {

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  }


  return (
    <div className="job-panel">
        <hr className="solid"/>
        <div className="job-info">
          <div className="job-title">
            <h2>{props.company}</h2>
            <h3>{props.title}</h3>
          </div>
        <h3>{props.dates}</h3>
        </div>
        {showMore ?
        <div className="show-more-active">
          <ul>
            {props.bullets.map((item, index) =>
              <li key={index}>{item}</li>
            )}
          </ul>
          <button onClick={toggleShowMore}>see less</button>
        </div>
        :
        <button onClick={toggleShowMore}>see more</button>
      }
        
    </div>
  )
}

export default Experience
