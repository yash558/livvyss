import React from 'react'
import './Feature.css'
import Carousel from 'better-react-carousel'
import "react-multi-carousel/lib/styles.css";
import selfie from '../../assets/selfie.png'
import livestream from '../../assets/livestream.png'
import smartphone from '../../assets/smartphone.png'
import profile from '../../assets/profile.png'
import money from '../../assets/money.png'
import onlineshop from '../../assets/online-shop.png'
import noemi from '../../assets/no-emi.png'
import quickpay from '../../assets/quickpay.png'
const FeatureCard = () => {
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
                cols={4}
                rows={2}
                gap={10}
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={4000}
                autoPlay={true}
                keyBoardControl={false}
                transitionDuration={500}
                arrows={false}
            >
                <Carousel.Item>
                    <div className="feature-item card  px-4">
                        <div className="icon">
                            {/* <i class="fa-solid fa-user"></i> */}
                            <img src={selfie} alt="" />
                        </div>
                        <h3>Creator Interaction</h3>
                        {/* <p>Livvy customers are provided with all the information related to a product live, all while
                            interacting with favourite creator. This not only makes a more enjoyable
                            shopping experience, but it also trust in the product and brand.</p> */}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="feature-item card px-4">
                        <div className="icon">
                            <img src={livestream} alt="" />
                            {/* <i class="fa-sharp fa-solid fa-business-time"></i> */}
                        </div>
                        <h3>Live Interactive Shopping</h3>
                        {/* <p>With our new-age solution to e-commerce, Livvy brand partners are given a chance to
                            widen their reach at no cost. We facilitate transactions, and product and brand
                            promotion for them. With social live commerce.</p> */}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="feature-item card px-4">
                        <div className="icon">
                            {/* <i className="fas fa-paint-brush"></i> */}
                            <img src={smartphone} alt="" />
                        </div>
                        <h3>Short Video Snippets</h3>
                        {/* <p>Ready to have a steady flow of income as a creator? We at Livvy give you the best
                            opportunity to expand your audience reach by being REAL with them in REAL-TIME.
                            Our goal is to help you reach your goal.Creator explore the world.
                        </p> */}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="feature-item card px-4">
                        <div className="icon">
                            <img src={profile} alt="" />
                            {/* <i className="fas fa-paint-brush"></i> */}
                        </div>
                        <h3>User-Friendly UI</h3>
                        {/* <p>Ready to have a steady flow of income as a creator? We at Livvy give you the best
                            opportunity to expand your audience reach by being REAL with them in REAL-TIME.
                            Our goal is to help you reach your goal.Creator explore the world.
                        </p> */}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="feature-item card px-4">
                        <div className="icon">
                            <img src={money} alt="" />
                            {/* <i className="fas fa-paint-brush"></i> */}
                        </div>
                        <h3>Multiple Payment Options</h3>
                        {/* <p>Ready to have a steady flow of income as a creator? We at Livvy give you the best
                        opportunity to expand your audience reach by being REAL with them in REAL-TIME.
                        Our goal is to help you reach your goal.Creator explore the world.
                    </p> */}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="feature-item card px-4">
                        <div className="icon">
                            <img src={onlineshop} alt="" />
                        </div>
                        <h3>2-Click checkout interface</h3>
                        {/* <p>Ready to have a steady flow of income as a creator? We at Livvy give you the best
                            opportunity to expand your audience reach by being REAL with them in REAL-TIME.
                            Our goal is to help you reach your goal.Creator explore the world.
                        </p> */}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="feature-item card px-4">
                        <div className="icon">
                            <img src={noemi} alt="" />
                        </div>
                        <h3>No set up costs for MSEs</h3>
                        {/* <p>Ready to have a steady flow of income as a creator? We at Livvy give you the best
                            opportunity to expand your audience reach by being REAL with them in REAL-TIME.
                            Our goal is to help you reach your goal.Creator explore the world.
                        </p> */}
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="feature-item card px-4">
                        <div className="icon">
                            <img src={quickpay} alt="" />
                        </div>
                        <h3>Quick Payout</h3>
                        {/* <p>Ready to have a steady flow of income as a creator? We at Livvy give you the best
                            opportunity to expand your audience reach by being REAL with them in REAL-TIME.
                            Our goal is to help you reach your goal.Creator explore the world.
                        </p> */}
                    </div>
                </Carousel.Item>
                {/* <Carousel.Item>
                    <div className="feature-item card px-4">
                        <div className="icon">
                            <i className="fas fa-paint-brush"></i>
                        </div>
                        <h3>Creator</h3> 
                    <p>Ready to have a steady flow of income as a creator? We at Livvy give you the best
                            opportunity to expand your audience reach by being REAL with them in REAL-TIME.
                            Our goal is to help you reach your goal.Creator explore the world.
                        </p>
                    </div>
                </Carousel.Item> */}
            </Carousel >
        </>

    )
}

export default FeatureCard