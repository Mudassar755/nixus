import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UseCasesGrid = () => {
    return (
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
            <hr className='my-5 usecase-hr' />
            <Col lg={6} md={6} sm={12} className='border-end'>
            <Link to="/usecases/electric-generation">
                <div className='p-4'>
                    <h3 className='small-heading mb-4'><span className='gradient-text'>“Electric Generation”:</span> a podcast about the transformative power of electrification</h3>
                    <img src={'/assets/images/usecase5.png'} className='w-100' alt="localization" />
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
                    <img src={'/assets/images/usecase6.png'} className='w-100' alt="localization" />
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
    )
}

export default UseCasesGrid