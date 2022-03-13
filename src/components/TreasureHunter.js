import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const TreasureHunter = () => {
    return (
        <section className='my-5' id="treasure-hunter">
            <Container>
                <div className='d-flex mb-4 align-items-center'>
                    <span className='heading-icon'><img src="/assets/icons/Icosahedron.png" alt='' /></span>
                    <h2 className='sub-heading'>Treasure Hunter</h2>
                </div>
                <p className='primary-text heading-description w-75'>
                    Locate things in videos and images with the best AI services in town. Our modern
                    AI tools combined with Computer vision techniques will let you search for specific
                    things in images and videos with just one click.
                </p>
                <Row className='desktop-row'>
                    <Col lg={4} md={4} sm={12}>
                        <div className='bg-dark-grey p-4'>
                            <div>
                                <h3 className='small-heading gradient-text'>01. Object detection</h3>
                                <p className='primary-text'>
                                    We offer Object Detection services to identify and locate instances of semantic objects in
                                    digital images and videos to serve for commercial and security purposes.
                                </p>

                            </div>
                            <img className='w-100' src={'/assets/images/object-detection.png'} alt="object-detection" />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className='bg-dark-grey p-4'>
                            <div>
                                <h3 className='small-heading gradient-text'>02. Localization</h3>
                                <p className='primary-text'>
                                    Achieving our mission, you can now locate one or more objects .
                                    NIXUS has brought out the most efficient techniques so you can locate
                                    the detected object in videos and images to track peoples, vehicles and a
                                    lot other purposes.
                                </p>

                            </div>
                            <img className='w-100' src={'/assets/images/localization.png'} alt="localization" />
                        </div>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <div className='bg-dark-grey p-4'>
                            <div>
                                <h3 className='small-heading gradient-text'>03. Instance Segmentation</h3>
                                <p className='primary-text'>
                                    Complex images & videos can be represented into more meaningful and easier to analyse ones.
                                    After having your Objects detected, we provide ALL services to make segments in the image/video
                                    so one can clearly understand.
                                </p>

                            </div>
                            <img className='w-100' src={'/assets/images/instance-segment.png'} alt="instance-segment" />
                        </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} className='mt-4'>
                        <div className='bg-dark-grey p-4'>
                            <div>
                                <h3 className='small-heading gradient-text'>04. Image classification</h3>
                                <p className='primary-text'>
                                    Classify different land covers  and objects in images. Using techniques from AI, <br />we build algorithms that will classify objects in images to make image processing a breeze.
                                </p>

                            </div>
                            <div className='img-classification'>
                                <div className='img-box me-md-3 me-lg-5'>
                                    <img className='w-100' src={'/assets/images/dog.png'} alt="" />
                                    <span>Dog</span>
                                </div>
                                <div className='img-box ms-md-3 ms-lg-5'>
                                    <img className='w-100' src={'/assets/images/cat.png'} alt="" />
                                    <span>Cat</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                </Row>
                <Row className='mobile-row'>
                    <Carousel className='features-carousel' interval={null}>
                        <Carousel.Item>
                            <Col>
                                <div className='bg-dark-grey p-4 pt-5'>
                                    <div>
                                        <h3 className='small-heading gradient-text'>01. Object detection</h3>
                                        <p className='primary-text'>
                                            We offer Object Detection services to identify and locate instances of semantic
                                            objects in digital images and videos to serve for commercial and security purposes.
                                        </p>

                                    </div>
                                    <img src={'/assets/images/object-detection.png'} alt="object-detection" />
                                </div>
                            </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Col>
                                <div className='bg-dark-grey p-4 pt-5'>
                                    <div>
                                        <h3 className='small-heading gradient-text'>02. Localization</h3>
                                        <p className='primary-text'>
                                            Achieving our mission, you can now locate one or more objects .
                                            NIXUS has brought out the most efficient techniques so you can locate
                                            the detected object in videos and images to track peoples, vehicles and a
                                            lot other purposes.
                                        </p>

                                    </div>
                                    <img src={'/assets/images/object-detection.png'} alt="object-detection" />
                                </div>
                            </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Col>
                                <div className='bg-dark-grey p-4 pt-5'>
                                    <div>
                                        <h3 className='small-heading gradient-text'>03. Instance Segmentation</h3>
                                        <p className='primary-text'>
                                            Complex images & videos can be represented into more meaningful and easier to analyse ones.
                                            After having your Objects detected, we provide ALL services to make segments in the image/video
                                            so one can clearly understand.
                                        </p>

                                    </div>
                                    <img src={'/assets/images/object-detection.png'} alt="object-detection" />
                                </div>
                            </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Col>
                                <div className='bg-dark-grey p-4 pt-5'>
                                    <div>
                                        <h3 className='small-heading gradient-text'>04. Image classification</h3>
                                        <p className='primary-text'>
                                            Classify different land covers  and objects in images. Using techniques from AI, <br />we build algorithms that will classify objects in images to make image processing a breeze.
                                        </p>

                                    </div>
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