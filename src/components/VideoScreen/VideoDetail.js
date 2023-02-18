import React from 'react'
import './VideoScreen.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const VideoDetail = () => {
    const responsive = {

        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
        <div className='video-details'>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={3000}
                autoPlay={false}
                keyBoardControl={false}
                transitionDuration={500}
                arrows={false}
            >
                <div className="details_1">
                    <h1>Product Review</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus quos repudiandae magni eius, eveniet aperiam delectus suscipit sunt reprehenderit.</p>
                </div>
                <div className="details_1">
                    <h1>Product Review</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus quos repudiandae magni eius, eveniet aperiam delectus suscipit sunt reprehenderit.</p>
                </div>
                <div className="details_1">
                    <h1>Product Review</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus quos repudiandae magni eius, eveniet aperiam delectus suscipit sunt reprehenderit.</p>
                </div>
            </Carousel>
        </div>

    )
}

export default VideoDetail