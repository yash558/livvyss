import React from 'react'
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="section-title">
                            <h2>get in <span>touch</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 justify-content-between">
                    <div className="col-lg-4 col-md-5">
                        <div className="contact-info">
                            <h3>For Any Queries and support</h3>
                            {/* <div className="contact-info-item mt-5">
                                <i className="fas fa-location-arrow"></i>
                                <h3>Company Location</h3>
                                <p>199 xyz gali, New Delhi</p>
                            </div> */}
                            <div className="contact-info-item mt-5">
                                <i className="fas fa-envelope"></i>
                                <h3>Write to us at</h3>
                                <p>admin@livvy.in</p>
                            </div>
                            {/* <div className="contact-info-item">
                                <i className="fas fa-phone"></i>
                                <h3>Call us on</h3>
                                <p>+91 9679 2913 ** </p>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="contact-form">
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" placeholder='Your Name' className='form-control' />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" placeholder='Your Email' className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" placeholder='Your Phone' className="form-control" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea type="Your Message" placeholder='Subject' class="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="Submit" class="btn btn-2">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default Contact