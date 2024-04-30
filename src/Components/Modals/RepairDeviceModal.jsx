import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './DeviceRepiarStyles.scss'
import { modelName, pickupService, productName, repairingItems, services } from '../SoruceFiles/ServicesList';

const RepairDeviceModal = ({ showModal, closeModal }) => {

    const [index, setIndex] = useState(1);
    const [product, setProduct] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');

    const navigateNextPage = () => {
        setIndex(index + 1)
    };

    const navigatePreviousPage = () => {
        setIndex(index - 1)
    };

    return (
        <div>
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop="static"
                show={showModal} onHide={closeModal}
            >
                <Modal.Header  closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Repair My Product
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {
                        index === 1 ? (
                            <>
                                <div>
                                    <input type="text" className='form-control' placeholder='Search for your products...' />
                                    <div className='row'>
                                        {
                                            services.map((items, index) => {
                                                return (
                                                    <>
                                                        <div className='col-lg-4' key={index}>
                                                            <div onClick={() => setProduct(items.service)} className={`${items.service === product ? 'active-border' : ""} border-styles rounded m-2 p-2 position-relative`}>
                                                                <div className='text-center'>
                                                                    <img src={items.img} className='mt-3 text-center' alt="Mobile Repair" />
                                                                    <p className='text-center mt-2 mb-3'>{items.service}</p>
                                                                </div>
                                                                {
                                                                    product === items.service ? (
                                                                        <>
                                                                            <div className='tick-icon'>
                                                                                <i className="fa fa-check"></i>
                                                                            </div>
                                                                        </>
                                                                    ) : null
                                                                }

                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                        ) : null
                    }

                    {
                        index === 2 ? (
                            <>
                                <div>
                                    <div className='row'>
                                        {productName.map((items) => {
                                            return (
                                                <div className='col-lg-4' key={items.id}>
                                                    <div onClick={() => setBrand(items.product_name)} style={{ height: "100px" }} className={`${items.service === product ? 'active-border' : ""} border-styles rounded m-2 p-2 position-relative d-flex justify-content-center align-items-center`}>
                                                        <p className='text-center'>{items.product_name}</p>
                                                        {brand === items.product_name && (
                                                            <div className='tick-icon'>
                                                                <i className="fa fa-check"></i>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </>
                        ) : null
                    }

                    {
                        index === 3 ? (
                            <>
                                <div>
                                    <div className='row'>
                                        {modelName.map((items) => {
                                            return (
                                                <div className='col-lg-4' key={items.id}>
                                                    <div onClick={() => setBrand(items.model_name)} style={{ height: "100px" }} className={`${items.service === product ? 'active-border' : ""} border-styles rounded m-2 p-2 position-relative d-flex justify-content-center align-items-center`}>
                                                        <p className='text-center'>{items.model_name}</p>
                                                        {brand === items.model_name && (
                                                            <div className='tick-icon'>
                                                                <i className="fa fa-check"></i>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </>
                        ) : null
                    }

                    {
                        index === 4 ? (
                            <>
                                <div>
                                    <h3 className='text-center'>Samsung Galaxy Z Flip Repair</h3>
                                    <p className='mt-5'>Please select the service you need</p>
                                    <select className="form-select mt-2 w-100" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        {
                                            repairingItems.map((items) => {
                                                return (
                                                    <>
                                                        <option value={items.repair}>{items.repair}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                    <p className='mt-4'>I would like to get this service at :</p>
                                    <div className='row mt-2'>
                                        {
                                            pickupService.map((items, index) => {
                                                return (
                                                    <>
                                                        <div className='col-lg-4' key={index}>
                                                            <div onClick={() => setProduct(items.service)} style={{ height: "170px" }} className={`${items.service === product ? 'active-border' : ""} border-styles rounded m-2 p-2 position-relative`}>
                                                                <div className='text-center'>
                                                                    <img src={items.img} className='mt-3 img-fluid text-center' style={{ height: "50px" }} alt="Mobile Repair" />
                                                                    <p className='text-center mt-2 mb-3'>{items.service}</p>
                                                                    <span className='text-center mb-3'>{items.extra_price}</span>
                                                                </div>
                                                                {
                                                                    product === items.service ? (
                                                                        <>
                                                                            <div className='tick-icon'>
                                                                                <i className="fa fa-check"></i>
                                                                            </div>
                                                                        </>
                                                                    ) : null
                                                                }
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                        ) : null
                    }

                    {
                        index === 5 ? (
                            <>
                                <div>
                                    <h3 className='text-center'>Samsung Galaxy Z Flip Repair</h3>
                                    <p className='mt-5'>Please select the service you need</p>
                                    <select className="form-select mt-2 w-100" aria-label="Default select example">
                                        <option selected>Open this select menu</option>
                                        {
                                            repairingItems.map((items) => {
                                                return (
                                                    <>
                                                        <option value={items.repair}>{items.repair}</option>
                                                    </>
                                                )
                                            })
                                        }
                                    </select>
                                    <p className='mt-4'>I would like to get this service at :</p>
                                    <div className='row mt-2'>
                                        {
                                            pickupService.map((items, index) => {
                                                return (
                                                    <>
                                                        <div className='col-lg-4' key={index}>
                                                            <div onClick={() => setProduct(items.service)} style={{ height: "170px" }} className={`${items.service === product ? 'active-border' : ""} border-styles rounded m-2 p-2 position-relative`}>
                                                                <div className='text-center'>
                                                                    <img src={items.img} className='mt-3 img-fluid text-center' style={{ height: "50px" }} alt="Mobile Repair" />
                                                                    <p className='text-center mt-2 mb-3'>{items.service}</p>
                                                                    <span className='text-center mb-3'>{items.extra_price}</span>
                                                                </div>
                                                                {
                                                                    product === items.service ? (
                                                                        <>
                                                                            <div className='tick-icon'>
                                                                                <i className="fa fa-check"></i>
                                                                            </div>
                                                                        </>
                                                                    ) : null
                                                                }
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            })
                                        }

                                        {

                                        }
                                    </div>
                                </div>
                            </>
                        ) : null
                    }

                    {
                        index === 6 ? (
                            <>
                                <div className='row'>
                                    <div className='col-lg-6 mx-auto'>
                                        <input type="text" placeholder='Your full name' className='form-control' />
                                        <input type="text" placeholder='Your Complete Adress' className='form-control' />
                                        <input type="text" placeholder='Phone Number' className='form-control' />
                                    </div>
                                </div>
                            </>
                        ) : null
                    }

                </Modal.Body>
                <Modal.Footer>
                    {
                        index >= 2 ? (
                            <Button onClick={navigatePreviousPage}> <i className='fa-solid fa-arrow-left' /> Back </Button>
                        ) : null
                    }
                    {
                        index <= 5 ? (
                            <Button onClick={navigateNextPage}>Next <i className='fa-solid fa-arrow-right' /></Button>
                        ) : null
                    }
                    {
                        index === 6 ? (
                            <Button onClick={navigateNextPage}>Submit <i className='fa-solid fa-check' /></Button>
                        ) : null
                    }
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default RepairDeviceModal