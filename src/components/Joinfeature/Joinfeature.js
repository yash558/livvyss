import React from 'react'
import './Joinfeature.css'

import JoinfeatureCard from './JoinfeatureCard';

const JoinFeature = () => {
    return (
        <div className="joinfeatures section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>Why you should<span> join Livvy</span></h2>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="joinfeatures-carousel">
                        <JoinfeatureCard/>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default JoinFeature;