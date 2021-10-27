import React from 'react';
import './Footer.css';

import logo from "../../asserts/logo.png"

import footerImage from '../../asserts/images/footer_image.png';
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer_left">
                    <div className="footer_logo">
                        <img src={logo} alt="" />
                    </div>
                    <p >A Company of AVIPL</p>
                </div>
                <div className="footer_mid">
                    <div className="footer_options">
                        <NavLink to="/" className="footer_option">Home</NavLink>
                        <NavLink to="/" className="footer_option">About</NavLink>
                        <NavLink to="/" className="footer_option">Learn in School</NavLink>
                    </div>
                    <div className="footer_socialmedia_icons">
                        <div className="footer_socialmedia_icon"><i class="fa fa-instagram" aria-hidden="true"></i></div>
                        <div className="footer_socialmedia_icon"><i class="fa fa-youtube-play" aria-hidden="true"></i></div>
                        <div className="footer_socialmedia_icon"><i class="fa fa-linkedin-square" aria-hidden="true"></i></div>
                        <div className="footer_socialmedia_icon"><i class="fa fa-twitter-square" aria-hidden="true"></i></div>
                        <div className="footer_socialmedia_icon"><i class="fa fa-facebook-official" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className="footer_right">
                    <img src={footerImage} alt="" />
                </div>
            </div>
        </>
    )
}

export default Footer
