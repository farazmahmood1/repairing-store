import React, { useState, useEffect } from 'react'
import './HeroSection/HeroStyles.scss'
import RepairDeviceModal from '../Modals/RepairDeviceModal';
const Hero = () => {
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal((prev) => !prev)
    }

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div>
            <div className="slider">
                <div className="owl-carousel ">
                    {/* <div className="slider-img"> */}
                    <div className="item">
                        <div className="slider-img"><img src="assets/images/slider/slider-1.jpg" alt /></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                    <div className="slider-captions">
                                        <div className='card' style={{ borderRadius: "18px" }}>
                                            <div className='card-body'>
                                                <div className=''>
                                                    <div>
                                                        <h1 style={{ fontWeight: 600 }}>I WANT TO</h1>
                                                        <div>
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-screwdriver-wrench' />&nbsp; Repair My Product &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                            </div><hr />
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-sack-dollar' />&nbsp; Sell My Device &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                            </div><hr />
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-plug' />&nbsp;&nbsp; install My Product &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                            </div><hr />
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-microchip' />&nbsp; Recover My Data &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
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
                    <div className="item">
                        <div className="slider-img"><img src="assets/images/slider/slider-2.jpg" alt /></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                    <div className="slider-captions">
                                        <div className='card' style={{ borderRadius: "18px" }}>
                                            <div className='card-body'>
                                                <div className=''>
                                                    <div>
                                                        <h1 style={{ fontWeight: 600 }}>I WANT TO</h1>
                                                        <div>
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-screwdriver-wrench' />&nbsp; Repair My Product &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                            </div><hr />
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-sack-dollar' />&nbsp; Sell My Device &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                            </div><hr />
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-plug' />&nbsp;&nbsp; install My Product &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                            </div><hr />
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-microchip' />&nbsp; Recover My Data &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
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
                    <div className="item">
                        <div className="slider-img"><img src="assets/images/slider/slider-3.jpg" alt /></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8 col-sm-12 col-xs-12">
                                    <div className="slider-captions">
                                        <div className='card' style={{ borderRadius: "18px" }}>
                                            <div className='card-body'>
                                                <div className=''>
                                                    <div>
                                                        <h1 style={{ fontWeight: 600 }}>I WANT TO</h1>
                                                        <div>
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-screwdriver-wrench' />&nbsp; Repair My Product &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                            </div><hr />
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-sack-dollar' />&nbsp; Sell My Device &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                            </div><hr />
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-plug' />&nbsp;&nbsp; install My Product &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                            </div><hr />
                                                            <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                                <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-microchip' />&nbsp; Recover My Data &nbsp;</p><hr />
                                                                <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
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

                    {/* </div> */}
                    {
                        screenWidth < 768 ? (
                            <>
                                <div className='mx-auto card-services'>
                                    <div className='col-lg-10'>
                                        <div>
                                            <h1 style={{ fontWeight: 600 }}>I WANT TO</h1>
                                            <div>
                                                <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                    <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-screwdriver-wrench' />&nbsp; Repair My Product &nbsp;</p><hr />
                                                    <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                </div><hr />
                                                <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                    <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-sack-dollar' />&nbsp; Sell My Device &nbsp;</p><hr />
                                                    <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                </div><hr />
                                                <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                    <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-plug' />&nbsp;&nbsp; install My Product &nbsp;</p><hr />
                                                    <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                </div><hr />
                                                <div className='mt-3 d-flex align-items-center' onClick={closeModal} style={{ cursor: "pointer" }}>
                                                    <p className=''><i style={{ fontSize: "23px" }} className='fa-solid fa-microchip' />&nbsp; Recover My Data &nbsp;</p><hr />
                                                    <i className='fa-solid fa-arrow-right' style={{ color: "#f26522" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </>
                        ) : null
                    }




                </div>

                {
                    showModal === true ? <RepairDeviceModal showModal={showModal} closeModal={closeModal} /> : null
                }
            </div>
        </div>
    )
}

export default Hero