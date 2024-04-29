import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="container-fluid">
                    <div className="header-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="cont-det">
                                        <li>+87 676 654 44</li>
                                        <li>sales@smarteyeapps.com</li>
                                    </ul>
                                </div>
                                <div className="col-md-6 d-none d-lg-block">
                                    <ul className="social-link">
                                        <li><a href><i className="fab fa-github" /></a></li>
                                        <li><a href="https://www.linkedin.com/groups/10411920/"><i className="fab fa-linkedin-in" /></a></li>
                                        <li> <a href="https://in.pinterest.com/prabnr/pins/"><i className="fab fa-pinterest-p" /></a></li>
                                        <li><a href="https://twitter.com/prabinraja89"><i className="fab fa-twitter" /></a></li>
                                        <li> <a href="https://www.facebook.com/freewebtemplatesbysmarteye"><i className="fab fa-facebook-f" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 logo">
                                    <a href="index.html">
                                        <img src="assets/images/logo.png" alt />
                                    </a>
                                    <a data-toggle="collapse" data-target="#nav-head" href="#nav-head"><i className="fas d-block d-md-none small-menu fa-bars" /></a>
                                </div>
                                <div className="col-md-9 ">
                                    <div className="contact d-none d-md-block">
                                        <ul>
                                            <li>
                                                <div className="cont-ro">
                                                    <div className="ico">
                                                        <i className="fas fa-phone-volume" />
                                                    </div>
                                                    <div className="det">
                                                        <p>Contact Us</p>
                                                        <b>+976 55 44 33</b>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cont-ro">
                                                    <div className="ico">
                                                        <i className="far fa-clock" />
                                                    </div>
                                                    <div className="det">
                                                        <p>Contact Us</p>
                                                        <b>+976 55 44 33</b>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="cont-ro">
                                                    <button className="btn btn-danger">Get A Free Quote</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div id="nav-head" className="nav-part d-none d-md-block">
                                        <ul>
                                            <li><a href="index.html">Home</a></li>
                                            <li><a href="about_us.html">About Us</a></li>
                                            <li><a href="services.html">Services</a></li>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href>Pages</a></li>
                                            <li><a href="contact_us.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
    </div>
  )
}

export default Header