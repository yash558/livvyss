import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'
const VideoScreenCart = () => {
    const vide1 =
    "https://www.mediafire.com/file/u78t3btrqzjq5x5/video1.mp4/file";
   
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 764 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={3000}
                autoPlay={false}
                keyBoardControl={false}
                transitionDuration={500}
                arrows={false}
            >
                <div className="video-img">
                    <video src={video1}  controls></video>
                    <div className="details_1">
                    <h3>Founder Story</h3>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus quos repudiandae magni eius, eveniet aperiam delectus suscipit sunt reprehenderit.</p> */}
                </div>
                </div>
                <div className="video-img">
                    <video src={video2}  controls></video>
                    <div className="details_1">
                    <h3>Live Interaction</h3>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus quos repudiandae magni eius, eveniet aperiam delectus suscipit sunt reprehenderit.</p> */}
                </div>
                </div>
                {/* <div className="video-img">
                    <video src={video1}  controls></video>
                    <div className="details_1">
                    <h3>Easy checkout</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus quos repudiandae magni eius, eveniet aperiam delectus suscipit sunt reprehenderit.</p>
                </div>
                </div> */}
            </Carousel>
        </>
    )
}

export default VideoScreenCart;