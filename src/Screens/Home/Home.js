import React from 'react'
import Hero from './../../components/Hero/Hero';
import Videopop from './../../components/Videopop/Videopop';
import Feature from './../../components/Feature/Feature';
import JoinFeature from './../../components/Joinfeature/Joinfeature';
import VideoScreen from './../../components/VideoScreen/VideoScreen';
import About from './../../components/About/About';
import Download from './../../components/Download/Download';
import Testimonials from './../../components/Testimonials/Testimonials';
import Contact from './../../components/Contact/Contact';
import Footer from './../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Videopop />
            <Feature />
            <JoinFeature />
            <VideoScreen />
            <About />
            {/* <Screenshot/> */}
            <Download />
            <Testimonials />
            <Contact />
            <Footer />

        </div>
    )
}

export default Home