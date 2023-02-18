import React from 'react'
import image1 from '../../assets/1.png'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Screenshot.css'
const ScreenshotCard = () => {
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
        <>
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={3000}
                autoPlay={true}
                keyBoardControl={false}
                transitionDuration={500}
                arrows={false}
            >
                <div className="screenshot-img">
                    <img src={image1} alt="" />
                </div>
                <div className="screenshot-img">
                    <img src={image2} alt="" />
                </div>
                <div className="screenshot-img">
                    <img src={image3} alt="" />
                </div>
            </Carousel>
        </>
    )
}

export default ScreenshotCard