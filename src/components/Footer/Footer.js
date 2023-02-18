import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <Link className="footer-brand" to="hero" spy={true} smooth={true} offset={50} duration={100}>
                                <img src={logo} alt="" className="footer_img" />
                            </Link>
                            <p>Livvy is the new age solution to e-commerce as we know it today. We aim to provide our users
                                with an interactive and engaging shopping experience by bringing to them a dedicated live
                                selling platform.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <h3>Company</h3>
                            <ul>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms & Condition</a></li>
                                <li><a href="/">latest Blogs</a></li>
                                <li><a href="/">App Services</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <h3>Quicks Links</h3>
                            <ul>
                                <li><Link activeClass="active" className='links' to="hero" spy={true} smooth={true} offset={50} duration={100}>Home</Link></li>
                                <li><Link activeClass="active" className='links' to="features" spy={true} smooth={true} offset={50} duration={100}>Features</Link></li>
                                <li><Link activeClass="active" className='links' to="app-video" spy={true} smooth={true} offset={50} duration={100}>Content</Link></li>
                                <li><Link activeClass="active" className='links' to="fun-facts" spy={true} smooth={true} offset={50} duration={100}>About</Link></li>
                                <li><Link activeClass="active" className='links' to="testimonials" spy={true} smooth={true} offset={50} duration={100}>Blog</Link></li>
                                <li><Link activeClass="active" className='links' to="contact" spy={true} smooth={true} offset={50} duration={100}>Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <h3>Social Pages</h3>
                            <ul>
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">twitter</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">Linkedin</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <p className="copyright-text">
                            &copy;2023 @ The Livvy Company
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer