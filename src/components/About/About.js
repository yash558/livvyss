import React from 'react'
import './About.css'
import about from '../../assets/about.png'
const About = () => {
    return (
        <div className="fun-facts section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-5">
                        <div className="fun-fact-img">
                            <img src={about} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-7">
                        <div className="section-title ">
                            <h2>About <span>Livvy</span></h2>
                        </div>
                        <div className="fun-facts-text">
                            <p>Livvy is the new age solution to e-commerce as we know it today. We aim to provide our users
                                with an interactive and engaging shopping experience by bringing to them a dedicated live
                                selling platform. We focus on keeping our platform up-to-date with the latest technology, such as
                                streaming capabilities and interactive features. <br /> <br />
                                On our app, creators will showcase a variety of lifestyle products made by multiple SMEs via a
                                live stream. This will allow our shoppers to clearly understand the qualities of the products, get
                                answers to their questions in real-time and even make a purchase - all in one place! It also
                                enables our partner SMEs and creators to reach a wider audience and build a trusted brand. A
                                win-win situation! <br /> <br />
                                We’re on a mission to upgrade India’s online shopping journey and hope you join us in doing so. </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About