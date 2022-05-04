import React from 'react'
import { Link } from "gatsby"
import './navbar.css'

const Navbar = () => {
    return(
        <nav>
            <ul>
                <li><Link to="../experience">my experience</Link></li>
            </ul>
            <Link to="../" className="logo">
                <h2>caroline boyt</h2>
                <h3>software engineer</h3>
            </Link>
            <ul>
                <li><Link to="../projects">projects</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar