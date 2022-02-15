import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const GitRight = () => {
    return (
        <section className='new-section'>
            <Container >
                <div>
                    {/* <div>
                        <Row>
                            <Col> */}
                                <div className='d-flex align-items-center mb-4'>
                                    <span className='heading-icon'><img src="/assets/icons/Helix.png" alt='' /></span>
                                    <h2 className='sub-heading'>Get It Right</h2>
                                </div>
                            {/* </Col>
                            <Col> */}
                                <p className='primary-text heading-description px-lg-5'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                </p>
                            {/* </Col>
                        </Row>

                    </div> */}
                    <Row className='desktop-row'>
                        <Col lg={6} md={6} sm={6}>
                            <div className='bg-dark-grey p-4'>
                                <h3 className='small-heading gradient-text'>01. Face detaction & recognition</h3>
                                <p className='primary-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                </p>
                                <img src={'/assets/images/image-from.png'} className='w-100' alt="localization" />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <div className='bg-dark-grey p-4'>
                                <h3 className='small-heading gradient-text'>02. object tracking</h3>
                                <p className='primary-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                </p>
                                <img src={'/assets/images/image-from-rawpixel-id-70730-jpeg 1 (1).png'} className='w-100' alt="localization" />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12} className='mt-4'>
                            <div className='bg-dark-grey p-4'>
                                <h3 className='small-heading gradient-text'>03. object Recognition</h3>
                                <p className='primary-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod <br />lectus interdum in varius amet.
                                </p>
                                <div className='img-classification-1'>
                                    <div className='img-box-1'>
                                        <img src={'/assets/images/backgroung-img.png'} className="w-100" alt="" />
                                        {/* <span>Dog</span> */}
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className='mobile-row'>
                        <Carousel className='features-carousel' interval={null}>
                            <Carousel.Item>
                            <Col>
                            <div className='bg-dark-grey p-4'>
                                <h3 className='small-heading gradient-text'>01. Face detaction & recognition</h3>
                                <p className='primary-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                </p>
                                <img src={'/assets/images/image-from.png'} className='w-100' alt="localization" />
                            </div>
                        </Col>
                            </Carousel.Item>
                            <Carousel.Item>
                            <Col>
                            <div className='bg-dark-grey p-4'>
                                <h3 className='small-heading gradient-text'>02. object tracking</h3>
                                <p className='primary-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                </p>
                                <img src={'/assets/images/image-from-rawpixel-id-70730-jpeg 1 (1).png'} className='w-100' alt="localization" />
                            </div>
                        </Col>
                            </Carousel.Item>
                        </Carousel>
                    </Row>
                </div>
            </Container>
        </section>
    )
}

export default GitRight