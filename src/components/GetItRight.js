import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const GetItRight = () => {
    return (
        <section className='new-section' id="get-it-right">
            <Container >
                <div>
                    {/* <div> */}
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <div className='d-flex align-items-center mb-4'>
                                <span className='heading-icon'><img src="/assets/icons/Helix.png" alt='' /></span>
                                <h2 className='sub-heading'>Get It Right</h2>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <p className='primary-text heading-description px-lg-5'>
                                Nixus commits itself to provide users with elevated AI experience. We achieve our goal
                                by providing futuristic object recognition and tracking services with the most efficient
                                and accurate AI techniques.
                            </p>
                        </Col>
                    </Row>

                    {/* </div> */}
                    <Row className='desktop-row'>
                        <Col lg={6} md={6} sm={6}>
                            <div className='bg-dark-grey p-4'>
                                <div>
                                    <h3 className='small-heading gradient-text'>01. Face detaction & recognition</h3>
                                    <p className='primary-text'>
                                        Detects and recognizes faces from videos and pictures to match the identity for security and privacy purposes.
                                        Our professionals will develop systems to detect and then compare the facial features with the database
                                        to find a match.
                                    </p>
                                </div>
                                <img src={'/assets/images/face-detection.png'} className='w-100' alt="localization" />
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={6}>
                            <div className='bg-dark-grey p-4'>
                                <div>
                                    <h3 className='small-heading gradient-text'>02. object tracking</h3>
                                    <p className='primary-text'>
                                        Track Recognized Objects in a real-time or pre-recorded video to determine the precise
                                        location and movements of the Object. Our AI based tracking system will help to
                                        efficiently track objects to serve for security and a lot other purposes.
                                    </p>
                                </div>
                                <img src={'/assets/images/obj-tracking.png'} className='w-100' alt="localization" />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12} className='mt-4'>
                            <div className='bg-dark-grey p-4'>
                                <div>
                                    <h3 className='small-heading gradient-text'>03. object Recognition</h3>
                                    <p className='primary-text w-75'>
                                        Identify targeted objects in videos and images within the blink of an eye. We will implement
                                        Deep Learning and Machine Learning techniques to minutely spot peoples, objects and visuals in a photograph or a video.
                                    </p>
                                </div>
                                <div className='img-classification-1'>
                                    <div className='img-box-1'>
                                        <img src={'/assets/images/obj-recognition.png'} className="w-100" alt="" />
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
                                    <div className='bg-dark-grey p-4 pt-5'>
                                        <div>
                                            <h3 className='small-heading gradient-text'>01. Face detaction & recognition</h3>
                                            <p className='primary-text'>
                                                Detects and recognizes faces from videos and pictures to match the identity for security and privacy purposes.
                                                Our professionals will develop systems to detect and then compare the facial features with the database
                                                to find a match.
                                            </p>
                                        </div>
                                        <img src={'/assets/images/face-detection-mob.png'} className='w-100' alt="localization" />
                                    </div>
                                </Col>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Col>
                                    <div className='bg-dark-grey p-4 pt-5'>
                                        <div>
                                            <h3 className='small-heading gradient-text'>02. object tracking</h3>
                                            <p className='primary-text'>
                                                Track Recognized Objects in a real-time or pre-recorded video to determine the precise
                                                location and movements of the Object. Our AI based tracking system will help to
                                                efficiently track objects to serve for security and a lot other purposes.
                                            </p>
                                        </div>
                                        <img src={'/assets/images/obj-tracking-mob.png'} className='w-100' alt="localization" />
                                    </div>
                                </Col>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Col lg={12} md={12} sm={12} className='mt-4'>
                                    <div className='bg-dark-grey p-4'>
                                        <div>
                                            <h3 className='small-heading gradient-text'>03. object Recognition</h3>
                                            <p className='primary-text'>
                                                Identify targeted objects in videos and images within the blink of an eye. We will implement
                                                Deep Learning and Machine Learning techniques to minutely spot peoples, objects and visuals in a photograph or a video.
                                            </p>
                                        </div>
                                        <div className='img-classification-1'>
                                            <div className='img-box-1'>
                                                <img src={'/assets/images/obj-recognition-mob.png'} className="w-100" alt="" />
                                                {/* <span>Dog</span> */}
                                            </div>

                                        </div>
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

export default GetItRight