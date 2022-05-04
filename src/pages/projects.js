import React from 'react'

import Footer from '../components/footer'
import Navbar from '../components/navbar'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import pic1 from '../images/choir-website1.png'
import pic2 from '../images/choir-website2.png'
import pic3 from '../images/choir-website3.png'
import pic4 from '../images/pic4.png'
import pic5 from '../images/pic5.png'
import pic6 from '../images/pic6.png'

import './projects.css'

const Projects = () => {
    return (
        <div className="projects-page">
            <title>Projects - Caroline Boyt</title>
            <div className="projects-wrapper">
                <div className="nav-container">
                    <Navbar/>
                </div>

                <h1>my projects</h1>
                <div className="projects-content">
                    <div className="project">
                        <h2>Clemson University Choirs Spotlight Series</h2>
                        <p>I shot, edited, and produced each of these videos, and others. See the entire Spotlight Series <a href="https://www.youtube.com/playlist?list=PLJI3Pv0gkD2D2U3tAGboUUdgnNH462NZq" target="blank" rel="noreferrer">here</a>.</p>
                        <div className="spotlights">
                            <iframe src="https://www.youtube.com/embed/QWqvEaGkIOg" className="media-player" title="In My Dreams"></iframe>
                            <iframe src="https://www.youtube.com/embed/jIXDBmQIxnQ" className="media-player" title="Mary, Did You Know?"></iframe>
                            <iframe src="https://www.youtube.com/embed/0sE2_9o3gMs" className="media-player" title="Only Us"></iframe>
                        </div>
                    </div>
                    <div className="project">
                        <h2>Clemson University Choirs Website</h2>
                        <p>I spent some of the Spring 2022 semester redesigning and building the Clemson Choirs website using React. See the full website <a href="https://www.clemsonchoirs.com" target="blank" rel="noreferrer">here</a>.</p>
                        <div className="screenshots">
                            <Carousel>
                                <img src={pic1}/>
                                <img src={pic2}/>
                                <img src={pic3}/>
                            </Carousel>
                        </div>
                    </div>
                    <div className="project">
                        <h2>Upstate: The Discovery Mock Client Site</h2>
                        <p>During the Spring 2022 semester, I was assigned to create a website based on a fellow student's vision. See the full website <a href="http://clemsongc.com/archive/2400S22/mboyt/coding3/index.html" target="blank" rel="noreferrer">here</a>.</p>
                        <div className="screenshots">
                        <Carousel>
                                <img src={pic4}/>
                                <img src={pic5}/>
                                <img src={pic6}/>
                            </Carousel>
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer-container">
                <Footer/>
            </div>
        </div>
    )
}

export default Projects