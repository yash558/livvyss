import React from 'react'
import './Download.css'
const Download = () => {
    return (
        <div className="app-download section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>Download <span>App</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="app-download-item">
                            <i className="fab fa-google-play"></i>
                            <h3>Google Play</h3>
                            <p>Livvy Shopping app is available at play store for android User's</p>
                            <a href="/" className='btn btn-2'>Coming Soon</a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="app-download-item">
                            <i className="fa-brands fa-apple"></i>
                            <h3>apple store</h3>
                            <p>Livvy Shopping app is available at Apple store for Iphone User's</p>
                            <a href="/" className='btn btn-2'>Coming Soon</a>
                        </div>
                    </div>
                    {/* <div className="col-lg-4 col-md-6">
                        <div className="app-download-item">
                            <i className="fa-brands fa-windows"></i>
                            <h3>Microsoft Store</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, modi!</p>
                            <a href="/" className='btn btn-2'>Coming Soon</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Download