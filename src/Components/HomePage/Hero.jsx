import React from 'react'
import './HeroSection/HeroStyles.scss'
const Hero = () => {
    return (
        <div>
            <div className="slider">
                <div className="owl-carousel ">
                    {/* <div className="slider-img">
                        <div className="item">
                            <div className="slider-img"><img src="assets/images/slider/slider-1.jpg" alt /></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                        <div className="slider-captions">
                                            <h1 className="slider-title">Repair Your Devices With Professionals</h1>
                                            <p className="slider-text hidden-xs">We can help you conquer a wide range of psychological and emotional problems.</p>
                                            <a href="#" className="btn btn-primary hidden-xs">View All Therapies</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-img"><img src="assets/images/slider/slider-2.jpg" alt /></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                    <div className="slider-captions">
                                        <h1 className="slider-title">It's time for better help.</h1>
                                        <p className="slider-text hidden-xs">We can help you conquer a wide range of psychological and emotional problems.</p>
                                        <a href="#" className="btn btn-primary hidden-xs">Schedule A Visit</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="slider-img"> <img src="assets/images/slider/slider-3.jpg" alt /></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                    <div className="slider-captions">
                                        <h1 className="slider-title">Meet our Expert Team</h1>
                                        <p className="slider-text hidden-xs">Our psychiatrists are highly skilled to meet your unique needs.</p>
                                        <a href="#" className="btn btn-primary hidden-xs">Meet Psychiatrists</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}


                    <div className="item">
                        <div className="slider-img"><img src="assets/images/slider/slider-2.jpg" alt /></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                {/* <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12"> */}
                                    {/* <div className="slider-captions">
                                        <h1 className="slider-title">It's time for better help.</h1>
                                        <p className="slider-text hidden-xs">We can help you conquer a wide range of psychological and emotional problems.</p>
                                        <a href="#" className="btn btn-primary hidden-xs">Schedule A Visit</a>
                                    </div> */}
                                    <div className='card services-container'>
                                        <div className='card-body'>
                                            <div className=''>
                                                <div>
                                                    <h1>I WANT TO</h1>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero