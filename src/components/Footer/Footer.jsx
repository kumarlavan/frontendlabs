import React from 'react'
import "./Footer.css"
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import LabsLogo from "../../assets/images/blackbglogo1.png"

const Footer = () => {
  return (
    <div className='footer  '>
        <div className="footer-section logo-part">
                 <img src={LabsLogo} alt="" className='logo' />
            <p>&copy; 2025 FrontendLab</p>
            <p>All rights reserved</p>
            <p>Qsp,bbsr</p>
        </div>

       <ul className="footer-section">
            <li><h5>Useful Links</h5></li>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/questions" >Questions</NavLink></li>
            <li><NavLink to="/contact" >Contact</NavLink></li>
        </ul>

        <ul className="footer-section">
            <li><h5>Quick Links</h5></li>
            <li><NavLink >Support</NavLink></li>
            <li><NavLink >Terms</NavLink></li>
        </ul>

        <ul className="footer-section">
            <li><h5>Contact With Us</h5></li>
            <li><NavLink ><FaInstagram /> Instagram</NavLink></li>
            <li><NavLink ><FaTwitter/> Twitter</NavLink></li>
            <li><NavLink ><FaLinkedin /> Linkdin</NavLink></li>
        </ul>
        
    </div>
  )
}

export default Footer