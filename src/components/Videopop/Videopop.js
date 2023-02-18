import React from 'react'
import './Videopop.css'
const Videopop = () => {
    const close = () => {

    }
    return (
        <div className="video-popup">
            <div className="video-popup-inner">
                <i className="fas fa-times video-popup-close"></i>
                <div className='iframe-box'>
                    <iframe id='player-1' src="https://www.youtube.com/embed/Kc2XYjk-M0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}

export default Videopop