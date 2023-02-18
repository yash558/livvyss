import React from 'react'
import './VideoScreen.css'
import VideoScreenCart from './VideoScreenCart';
import VideoDetail from './VideoDetail';


const VideoScreen = () => {


    return (
        <section className="app-video mb-5" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>App <span>Content</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="video-carasouel">
                        <VideoScreenCart />
                            {/* <VideoDetail /> */}
                       

                    </div>
                </div>

            </div>
        </ section >
    )
}

export default VideoScreen;