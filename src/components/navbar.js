import React from 'react'
import { Link } from "gatsby"
import './navbar.css'

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="../">about me</Link></li>
                <li><Link to="#">my experience</Link></li>
            </ul>
            <div className="logo">
                <h2>caroline boyt</h2>
                <h3>software engineer</h3>
            </div>
            <ul>
                <li><Link to="#">projects</Link></li>
                <li><Link to="#">contact me</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar