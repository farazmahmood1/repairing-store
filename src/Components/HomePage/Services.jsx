import React, { useState } from 'react'
import RepairDeviceModal from '../Modals/RepairDeviceModal';


const Services = () => {

    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal((prev) => !prev)
    }

    return (
        <div>
            <div className="service-container container-fluid">
                <div className="container">
                    <div className="row inner-title">
                        <h2>Our Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum dolor sit amet</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="serv-cover">
                                <div className="icon">
                                    <i className="fas fa-screwdriver-wrench" />
                                </div>
                                <div className="detail">
                                    <h6>Repair My Product</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum dolor sit amet, consectetur ut erat nec leo lobortis blandit.</p>
                                    <button onClick={closeModal} className='btn btn-outline-primary mt-2'>Schedule visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="serv-cover">
                                <div className="icon">
                                    <i className="fas fa-laptop" />
                                </div>
                                <div className="detail">
                                    <h6>Sell My Device</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum dolor sit amet, consectetur ut erat nec leo lobortis blandit.</p>
                                    <button onClick={closeModal} className='btn btn-outline-primary mt-2'>Schedule visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="serv-cover">
                                <div className="icon">
                                    <i className="fas fa-gears" />
                                </div>
                                <div className="detail">
                                    <h6>Install My Product</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum dolor sit amet, consectetur ut erat nec leo lobortis blandit.</p>
                                    <button onClick={closeModal} className='btn btn-outline-primary mt-2'>Schedule visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="serv-cover">
                                <div className="icon">
                                    <i className="fa-solid fa-microchip" />
                                </div>
                                <div className="detail">
                                    <h6>Buy Accessories</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum dolor sit amet, consectetur ut erat nec leo lobortis blandit.</p>
                                    <button onClick={closeModal} className='btn btn-outline-primary mt-2'>Schedule visit</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="serv-cover">
                                <div className="icon">
                                    <i className="fab fa-gg-circle" />
                                </div>
                                <div className="detail">
                                    <h6>Recover My Data</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum dolor sit amet, consectetur ut erat nec leo lobortis blandit.</p>
                                    <button onClick={closeModal} className='btn btn-outline-primary mt-2'>Schedule visit</button>

                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="serv-cover">
                                <div className="icon">
                                    <i className="fas fa-project-diagram" />
                                </div>
                                <div className="detail">
                                    <h6>Computer Networking</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum dolor sit amet, consectetur ut erat nec leo lobortis blandit.</p>
                                    <button onClick={closeModal} className='btn btn-outline-primary mt-2'>Schedule visit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                showModal === true ? <RepairDeviceModal showModal={showModal} closeModal={closeModal} /> : null
            }
        </div>
    )
}

export default Services