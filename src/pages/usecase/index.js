import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UseCase = () => {
    return (
        <section className='usecase-section'>
            <Container>

                <div className='blog-content'>
                    <Row className='justify-content-center'>
                        <Col lg={7} md={10} sm={12}>
                            <span className='primary-text gradient-text text-bold'>Posted on Octorber 6th 2021</span>
                            <h1 className='sub-heading mb-5'>Pharma Company identifsy over 3,600 undiagnosed patients at risk and drive them to doctor appointments</h1>

                            <div className='d-flex my-4 flex-col-reverse'>
                                <div className='d-flex flex-column justify-content-center mt-4'>
                                    <h3 className='small-heading'>Customer:</h3>
                                    <p className='primary-text'>Customer was a retail firm that deals in different fields ranging from grocery item to electronics and DIY tools.</p>
                                </div>
                                <div className='mt-4'>
                                    <img src={'/assets/images/usecase2.png'} alt="img" className='w-100' />
                                </div>
                            </div>
                            <h3 className='blog-sub-heading'>Problem: Theft at grocery stores <span className='gradient-text'>”sweet hearting”</span></h3>
                            <p className='blog-text'>
                                Companies suffer loses of thousands of dollars every month due to this problem. In the retail industry, inventory loss is a problem with a multi-billion-dollar price tag. By one estimate, U.S. retailers lose nearly $50 billion a year in inventory loss. While this problem has many drivers, most of the financial impact of inventory loss in the retail sector occurs in stores at the point of sale (POS).
                            </p>
                            <img src={'/assets/images/usecase2.png'} alt="img" className='w-100 my-5' />
                            <p className='blog-text'>
                                Two of the big problems at the POS are fraudulent scanning activities and UPC barcode switching. The problem is that a cashier is sweet hearting which means faking the bar code scanning for the ones whom he/she knows. To minimize the costs of inventory losses, retailers need to put advanced technologies, like artificial intelligence and computer vision, to work to reduce these major sources of inventory loss.
                            </p>

                            <div className='d-flex my-4 flex-col'>
                                <div className='mt-4'>
                                    <img src={'/assets/images/usecase2.png'} alt="img" className='w-100' />
                                </div>
                                <div className='d-flex flex-column justify-content-center mt-4'>
                                    <h3 className='small-heading'>Solution:</h3>
                                    <p className='primary-text'>Customer was a retail firm that deals in different fields ranging from grocery item to electronics and DIY tools.</p>
                                </div>
                            </div>
                            <p className='blog-text'>
                                Effective supply chain operations rely heavily on how warehouses are run: their design and layout, accuracy of inventory counts and locations, and organized packing and shipping processes. Most inventory mistakes are the result of human error or manual quality control. While automating warehouse work with robots may initially be a serious disruption, computer vision solutions or sorting algorithms can eliminate most mistakes and optimize supply chain management.
                            </p>
                            <p className='blog-text position-relative quote'>
                                <span className='quote-line' />
                                Climate crisis, from a photography project examining the ways in which climate change affects indigenous populations to a series of comics aimed at demonstrating the global nature of the challenge.
                            </p>
                            <div>
                                <h3 className='small-heading mb-4'>Technologies at work:</h3>
                                <div className='d-flex justify-content-between overflow-scroll'>
                                    <img src={'/assets/images/tech1.png'} className='' alt='technology' />
                                    <img src={'/assets/images/tech2.png'} className='' alt='technolgy' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <h2 className='main-heading gradient-text text-center mb-5'>More Use Cases</h2>
                    <Row className='usecases-row'>
                        <Col lg={6} md={6} sm={12} className='border-end'>
                            <Link to="/usecases/electric-generation">
                                <div className='p-4'>
                                    <h3 className='small-heading mb-4'><span className='gradient-text'>“Electric Generation”:</span> a podcast about the transformative power of electrification</h3>
                                    <img src={'/assets/images/usecase1.png'} className='w-100' alt="localization" />
                                    <div className='d-flex justify-content-center mt-4 flex-col-reverse'>
                                        <div className='me-4'>
                                            <img src="/assets/icons/vodafone.png" alt='' className='brand-icon' />
                                        </div>
                                        <p className='primary-text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>

                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Link to="/usecases/electric-generation">
                                <div className='p-4'>
                                    <h3 className='small-heading mb-4'><span className='gradient-text'>“Electric Generation”:</span> a podcast about the transformative power of electrification</h3>
                                    <img src={'/assets/images/usecase2.png'} className='w-100' alt="localization" />
                                    <div className='d-flex justify-content-center mt-4 flex-col-reverse'>
                                        <div className='me-4'>
                                            <img src="/assets/icons/vodafone.png" alt='' className='brand-icon' />
                                        </div>
                                        <p className='primary-text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>

                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <hr className='my-5 usecase-hr' />
                        <Col lg={6} md={6} sm={12} className='border-end'>
                            <Link to="/usecases/electric-generation">
                                <div className='p-4'>
                                    <h3 className='small-heading mb-4'><span className='gradient-text'>“Electric Generation”:</span> a podcast about the transformative power of electrification</h3>
                                    <img src={'/assets/images/usecase3.png'} className='w-100' alt="localization" />
                                    <div className='d-flex justify-content-center mt-4 flex-col-reverse'>
                                        <div className='me-4'>
                                            <img src="/assets/icons/vodafone.png" alt='' className='brand-icon' />
                                        </div>
                                        <p className='primary-text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>

                                    </div>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Link to="/usecases/electric-generation">
                                <div className='p-4'>
                                    <h3 className='small-heading mb-4'><span className='gradient-text'>“Electric Generation”:</span> a podcast about the transformative power of electrification</h3>
                                    <img src={'/assets/images/usecase4.png'} className='w-100' alt="localization" />
                                    <div className='d-flex justify-content-center mt-4 flex-col-reverse'>
                                        <div className='me-4'>
                                            <img src="/assets/icons/vodafone.png" alt='' className='brand-icon' />
                                        </div>
                                        <p className='primary-text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        </p>

                                    </div>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                    <div className='text-center'>
                        <button className="btn-rounded py-2 my-5 px-5 py-2">Get Started</button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default UseCase