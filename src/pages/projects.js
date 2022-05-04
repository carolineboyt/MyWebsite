import React from 'react'

import Footer from '../components/footer'
import Navbar from '../components/navbar'

import './projects.css'

const Projects = () => {
    return (
        <div className="projects-page">
            <div className="projects-wrapper">
                <div className="nav-container">
                    <Navbar/>
                </div>

                <h1>my projects</h1>
                <div className="projects-content">
                    <div className="project">
                        <h2>Clemson University Choirs Spotlight Series</h2>
                        <p>I shot, edited, and produced each of these videos, and others. See the entire Spotlight Series <a>here</a>.</p>
                        <div className="spotlights">
                            <iframe src="https://www.youtube.com/embed/QWqvEaGkIOg" className="media-player" title="In My Dreams"></iframe>
                            <iframe src="https://www.youtube.com/embed/jIXDBmQIxnQ" className="media-player" title="Mary, Did You Know?"></iframe>
                            <iframe src="https://www.youtube.com/embed/0sE2_9o3gMs" className="media-player" title="Only Us"></iframe>
                        </div>
                    </div>
                    <div className="project">
                        <h2>Clemson University Choirs Website</h2>
                        <div className="screenshots">

                        </div>
                    </div>
                    <div className="project">
                        <h2>Upstate: The Discovery Mock Client Site</h2>
                        <div className="screenshots">
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects