import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 foot-about">
                                <h4>About US</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit libero pellentesque libero interdum, id mattis felis dictum. Praesent eget lacus tempor justo efficitur malesuada. Cras ut suscipit nisi.</p>
                                <ul>
                                    <li>23 Rose Stren Melbourn</li>
                                    <li>sales@smarteyeapps.com</li>
                                    <li>+91 876 766 554</li>
                                </ul>
                            </div>
                            <div className="col-md-3 foot-post">
                                <h4>Latest Posts</h4>
                                <div className="post-row">
                                    <div className="image">
                                        <img src="assets/images/blog/blog_01.jpg" alt />
                                    </div>
                                    <div className="detail">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit </p>
                                    </div>
                                </div>
                                <div className="post-row">
                                    <div className="image">
                                        <img src="assets/images/blog/blog_02.jpg" alt />
                                    </div>
                                    <div className="detail">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit </p>
                                    </div>
                                </div>
                                <div className="post-row">
                                    <div className="image">
                                        <img src="assets/images/blog/blog_03.jpg" alt />
                                    </div>
                                    <div className="detail">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras hendrerit </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 foot-services">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><a href>Target Statergy</a></li>
                                    <li><a href>Web Analytics</a></li>
                                    <li><a href>Page Monitering</a></li>
                                    <li><a href>Page Optimization</a></li>
                                    <li><a href>Target Statergy</a></li>
                                    <li><a href>Email Marketing</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 foot-news">
                                <h4>News Letter</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, vehicula eget eros. </p>
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon2"><i className="fas fa-long-arrow-alt-right" /></span>
                                    </div>
                                </div>
                                <ul>
                                    <li><i className="fab fa-facebook-square" /></li>
                                    <li><i className="fab fa-twitter-square" /></li>
                                    <li><i className="fab fa-linkedin" /></li>
                                    <li><i className="fab fa-tumblr-square" /></li>
                                    <li><i className="fab fa-github-square" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy">
                <div className="container">
                    <a href="https://www.smarteyeapps.com/">2015 © All Rights Reserved | Designed and Developed by Smarteyeapps.com</a>
                    <span>
                        <a href><i className="fab fa-github" /></a>
                        <a href><i className="fab fa-google-plus-g" /></a>
                        <a href="https://in.pinterest.com/prabnr/pins/"><i className="fab fa-pinterest-p" /></a>
                        <a href="https://twitter.com/prabinraja89"><i className="fab fa-twitter" /></a>
                        <a href="https://www.facebook.com/freewebtemplatesbysmarteye"><i className="fab fa-facebook-f" /></a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Footer