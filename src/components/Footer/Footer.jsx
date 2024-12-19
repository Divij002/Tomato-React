import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Thanks for visiting our website, This is made by Divij for connecting with me message me on Linkedin, Link is just right here, have a good day</p>
                <div className="footer-social-icons">
                    <a href=""><img src={assets.facebook_icon} alt="" /></a>
                    <a href="" target='_blank'><img src={assets.twitter_icon} alt="" /></a>
                    <a href="https://www.linkedin.com/in/divij-saini-22544622a/" target='_blank'><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-1111-1111-1111</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className='footer-copyright'>copyright are reserved</p>
    </div>
  )
}

export default Footer
