import * as React from "react"
import './index.css'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import headshot from '../images/headshot3.jpg'


// markup
const IndexPage = () => {
  return (
    <div className="home-page">
      <div className="nav-container">
        <Navbar/>
      </div>
      <h1>nice to meet you!</h1>
      <div className="home-content">
        <img src={headshot}/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales iaculis scelerisque. Pellentesque urna ex, vulputate id elit tristique, tincidunt mattis elit. In auctor semper leo, eu vulputate arcu interdum eu. Praesent ac quam ex. Quisque blandit eros ac imperdiet dictum. Sed sodales libero et tristique vestibulum. Fusce pulvinar leo quis scelerisque pulvinar. Praesent euismod volutpat ipsum quis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales iaculis scelerisque. Pellentesque urna ex, vulputate id elit tristique, tincidunt mattis elit. In auctor semper leo, eu vulputate arcu interdum eu. Praesent ac quam ex. Quisque blandit eros ac imperdiet dictum. Sed sodales libero et tristique vestibulum. Fusce pulvinar leo quis scelerisque pulvinar. Praesent euismod volutpat ipsum quis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales iaculis scelerisque. Pellentesque urna ex, vulputate id elit tristique, tincidunt mattis elit. In auctor semper leo, eu vulputate arcu interdum eu. Praesent ac quam ex. Quisque blandit eros ac imperdiet dictum. Sed sodales libero et tristique vestibulum. Fusce pulvinar leo quis scelerisque pulvinar. Praesent euismod volutpat ipsum quis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales iaculis scelerisque. Pellentesque urna ex, vulputate id elit tristique, tincidunt mattis elit. In auctor semper leo, eu vulputate arcu interdum eu. Praesent ac quam ex. Quisque blandit eros ac imperdiet dictum. Sed sodales libero et tristique vestibulum. Fusce pulvinar leo quis scelerisque pulvinar. Praesent euismod volutpat ipsum quis pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sodales iaculis scelerisque. Pellentesque urna ex, vulputate id elit tristique, tincidunt mattis elit. In auctor semper leo, eu vulputate arcu interdum eu. Praesent ac quam ex. Quisque blandit eros ac imperdiet dictum. Sed sodales libero et tristique vestibulum. Fusce pulvinar leo quis scelerisque pulvinar. Praesent euismod volutpat ipsum quis pretium.</p>
      </div>
      <div className="home-list-container">
        <div className="home-list">
          <h2>skills</h2>
          <h3>Programming Languages</h3>
          <ul>
            <li>C/C++</li>
            <li>HTML/CSS</li>
            <li>ReactJS</li>
            <li>Java</li>
            <li>Swift</li>
            <li>MySQL</li>
          </ul>
          <h3>Adobe Suite</h3>
          <ul>
            <li>XD</li>
            <li>Premiere Pro</li>
            <li>Photoshop</li>
          </ul>
        </div>
        <div className="home-list">
          <h2>strengths</h2>
          <h3>Confident leader</h3>
          <h3>Detail oriented</h3>
          <h3>Adaptable</h3>
          <h3>Team player</h3>
          <h3>{'Passionate & Committed'}</h3>
          <h3>Strong communicator</h3>
        </div>
      </div>
      <div className="footer-container">
        <Footer/>
      </div>
      
    </div>
  )
}

export default IndexPage
