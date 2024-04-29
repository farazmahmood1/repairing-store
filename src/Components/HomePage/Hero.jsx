import React from 'react'

const Hero = () => {
  return (
    <div>
         <div className="slider">
    {/* Set up your HTML */}
    <div className="owl-carousel ">
      <div className="slider-img">
        <div className="item">
          <div className="slider-img"><img src="assets/images/slider/slider-1.jpg" alt /></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                <div className="slider-captions">
                  <h1 className="slider-title">Stylish Service Website Template</h1>
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
      </div>
    </div>
  </div>
    </div>
  )
}

export default Hero