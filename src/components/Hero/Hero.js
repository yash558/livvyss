import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <div className="hero d-flex align-items-center">
      <div className="effect-wrap">
        <i className="fas fa-plus effect effect-1"></i>
        <i className="fas fa-plus effect effect-2"></i>
        <i className="fas fa-circle-notch effect effect-3"></i>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-7">
            <div className="hero-text">
              <h1>Live Shopping with your Favorite Creators: Unleash Your Creativity!</h1>
              <p>Introducing Livvy, the revolutionary one-stop lifestyle video shopping platform! We make it easy
                for small and medium-sized enterprises, as well as individual creators, to showcase and sell
                their products through the convenience of video</p>
              {/* <div className="hero-btn">
                <a href="/" className='btn btn-1'>Explore</a>
                <button type='button' className="btn btn-1 video-play-btn">
                  <i className="fas fa-play"></i>
                </button>
              </div> */}
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div className="hero-img">
              <div className="circle">
              </div>
              <img src={hero} alt="livvy app" height={600} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero