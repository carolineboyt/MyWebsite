import * as React from "react"
import { useState } from 'react'
import './experience.css'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

const Experience = () => {
  return (
    <div className="experience-page">
      <title>Experience - Caroline Boyt</title>
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
            {
              title: "Accessibility",
              content: "My first project at Fortis was to update their existing iOS apps to adhere to Apple's accessibility standards. This included implementing dynamic type capabilities and adjusting color contrast to adhere color blindness standards. This was a great way to dip my toe into learning Swift, and also inspired a passion for creating fully accesible applications."
            },
            {
              title: "iOS App Design and Implementation",
              content: "After updating the existing apps for accessibility, I was able to assist our mobile designer as he created the vision for new apps and features. I also began to create the front end of one of the new apps, using both Swift and SwiftUI. This was a great learning experience for me, as I has access to a sturdy starting point from the existing apps, but was challenged to create something new from the old."
            },
            {
              title: "iOS Testing",
              content: "The biggest challenge I faced at Fortis was the task of writing UI and Unit tests in Swift for the existing iOS apps. I was already learning a brand new language, and the syntax used for Unit testing felt even more foreign. I definitely struggled, but was able to use this as a learning opportunity, and asked my mentor to walk me through the first test. After he helped me understand how testing worked, I was able to complete the rest of the tests, and continue to make sure the apps were working smoothly."
            }
            
            
          ]}
        />
        <JobPanel 
          company="Clemson University Choirs"
          title="Administrative Assistant"
          dates="March 2020 - May 2022"
          bullets={[
            {
              title: "Website Reconstruction",
              content: "One of my proudest accomplishments during my time working in the choral department at Clemson was redesigning our website and rebuilding it completely from scratch. This was a huge challenge for me, as I had never had a chance to refine my design skills, and building an entire website was a massive undertaking, especically on top of my existing schoolwork. I am incredibly proud of what I was able to accomplish, and was so excited to share it with the Clemson community and the world."
            },
            {
              title: "Content Creation and Social Media Management",
              content: "The first project I inherited from the previous Administrative Assistant was producing the Clemson Choirs and Vocal Arts Spotlight Series. This project consisted of scheduling recording sessions, shooting video from multiple angles, working closely with audio technology students, and editing all of the footage. I was able to produce 10 videos for the Spotlight Series in the two semesters I was in charge of it, and was also tasked with managing uploading these videos, and other content, to Clemson Choirs' multiple social media accounts."
            },
            {
              title: "Ensemble Management",
              content: "As an administrative assistant, I was very involved in managing the day to day operations of each choir ensemble. Managing concerts, recording sessions, and student requests for up to 6 ensembles could be stressful at times, but I had the opportunity to learn how to make a seemingly overwhelming situation feel manageable. My greatest accomplishment in this regard was planning the annual Sounds of the Season Concert, a performance that includes all 6 ensembles, a small orchestra, and solo performances."
            }
            
            
          ]}
        />
        <JobPanel 
          company="Clemson University General Engineering"
          title="Undergraduate Teaching Assistant"
          dates="January 2018 - May 2018"
          bullets={[
            {
              title: "Accessibility",
              content: "My first project at Fortis was to update their existing iOS apps to adhere to Apple's accessibility standards. This included implementing dynamic type capabilities and adjusting color contrast to adhere color blindness standards. This was a great way to dip my toe into learning Swift, and also inspired a passion for creating fully accesible applications."
            },
            {
              title: "iOS App Design and Implementation",
              content: "After updating the existing apps for accessibility, I was able to assist our mobile designer as he created the vision for new apps and features. I also began to create the front end of one of the new apps, using both Swift and SwiftUI. This was a great learning experience for me, as I has access to a sturdy starting point from the existing apps, but was challenged to create something new from the old."
            },
            {
              title: "iOS Testing",
              content: "say something here about writing UI and Unit tests, and general debugging."
            }
            
            
          ]}
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
          {props.bullets.map(item => {
            return(
              <div className="bullet">
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </div>
            );
          })}
          <button onClick={toggleShowMore}>see less</button>
        </div>
        :
        <button onClick={toggleShowMore}>see more</button>
      }
        
    </div>
  )
}

export default Experience
