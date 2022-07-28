import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className='Footer'>
        <div className="top">
            <h3>Quick Links</h3>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Products">Products</Link>
                <Link to="/Contact">Contacts Us</Link>
                <p>Find Out More</p>
                <p>Get Our Newsletter</p>
            </div>
        </div>
        <div className="bottom">
            <p> 
                &copy;{new Date().getFullYear()} All rights Reversed. <Link className='rights' to="/">Nexurvices</Link>
            </p>  
        </div>
    </div>
  )
}
