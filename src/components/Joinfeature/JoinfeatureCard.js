import React from 'react'
import './Joinfeature.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const JoinfeatureCard = () => {
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
                autoPlaySpeed={7000}
                autoPlay={true}
                keyBoardControl={false}
                transitionDuration={500}
                arrows={false}
            >

                <div className="joinfeature-item card mx-2 px-4">
                    <div className="icon">
                        <i class="fa-solid fa-user"></i>

                    </div>
                    <h3>Customer</h3>
                    <p>Livvy customers are provided with all the information related to a product live, all while
                        interacting with favourite creator. This not only makes a more enjoyable
                        shopping experience, but it also trust in the product and brand.</p>
                </div>


                <div className="joinfeature-item card mx-2 px-4">
                    <div className="icon">
                        <i class="fa-sharp fa-solid fa-business-time"></i>
                    </div>
                    <h3>Business</h3>
                    <p>With our new-age solution to e-commerce, Livvy brand partners are given a chance to
                        widen their reach at no cost. We facilitate transactions, and product and brand
                        promotion for them. With social live commerce.</p>
                </div>


                <div className="joinfeature-item card mx-2 px-5">
                    <div className="icon">
                        <i className="fas fa-paint-brush"></i>
                        {/* <img src={smartphone} alt="" /> */}
                    </div>
                    <h3>Creator</h3>
                    <p>Ready to have a steady flow of income as a creator? We at Livvy give you the best
                        opportunity to expand your audience reach by being REAL with them in REAL-TIME.
                        Our goal is to help you reach your goal.
                    </p>
                </div>
            </Carousel>
        </>
    )
}

export default JoinfeatureCard