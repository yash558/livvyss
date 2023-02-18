import React from 'react'
import './Feature.css'
import FeatureCard from './FeatureCard';

const Feature = () => {
    return (
        <div className="features section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>Awesome <span> Features List</span></h2>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="features-carousel">
                        <FeatureCard />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Feature