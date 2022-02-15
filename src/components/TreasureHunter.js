import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const TreasureHunter = () => {
    return (
        <section className='my-5'>
            <Container>
                <div className='d-flex mb-4 align-items-center'>
                    <span className='heading-icon'><img src="/assets/icons/Icosahedron.png" alt='' /></span>
                    <h2 className='sub-heading'>Treasure Hunter</h2>
                </div>
                <Row className='desktop-row'>
                    <Col lg={4} md={4} sm={12}>
                        <div className='bg-dark-grey p-4'>
                            <h3 className='small-heading gradient-text'>01. Object detection</h3>
                            <p className='primary-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                            </p>
                            <img className='w-100' src={'/assets/images/object-detection.png'} alt="object-detection" />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className='bg-dark-grey p-4'>
                            <h3 className='small-heading gradient-text'>02. Localization</h3>
                            <p className='primary-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                            </p>
                            <img className='w-100' src={'/assets/images/localization.png'} alt="localization" />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className='bg-dark-grey p-4'>
                            <h3 className='small-heading gradient-text'>03. Instance Segmentation</h3>
                            <p className='primary-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                            </p>
                            <img className='w-100' src={'/assets/images/instance-segment.png'} alt="instance-segment" />
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} className='mt-4'>
                        <div className='bg-dark-grey p-4'>
                            <h3 className='small-heading gradient-text'>04. Instance Segmentation</h3>
                            <p className='primary-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod <br />lectus interdum in varius amet.
                            </p>
                            <div className='img-classification'>
                                <div className='img-box me-md-3 me-5'>
                                    <img className='w-100' src={'/assets/images/dog.png'} alt="" />
                                    <span>Dog</span>
                                </div>
                                <div className='img-box ms-md-3 ms-5'>
                                    <img className='w-100' src={'/assets/images/dog.png'} alt="" />
                                    <span>Dog</span>
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
                                    <h3 className='small-heading gradient-text'>01. Object detection</h3>
                                    <p className='primary-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                    </p>
                                    <img src={'/assets/images/object-detection.png'} alt="object-detection" />
                                </div>
                            </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Col>
                                <div className='bg-dark-grey p-4'>
                                    <h3 className='small-heading gradient-text'>01. Object detection</h3>
                                    <p className='primary-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                    </p>
                                    <img src={'/assets/images/object-detection.png'} alt="object-detection" />
                                </div>
                            </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Col>
                                <div className='bg-dark-grey p-4'>
                                    <h3 className='small-heading gradient-text'>01. Object detection</h3>
                                    <p className='primary-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                    </p>
                                    <img src={'/assets/images/object-detection.png'} alt="object-detection" />
                                </div>
                            </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Col>
                                <div className='bg-dark-grey p-4'>
                                    <h3 className='small-heading gradient-text'>01. Object detection</h3>
                                    <p className='primary-text'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                    </p>
                                    <img src={'/assets/images/object-detection.png'} alt="object-detection" />
                                </div>
                            </Col>
                        </Carousel.Item>
                    </Carousel>
                </Row>

            </Container>
        </section>
    )
}

export default TreasureHunter