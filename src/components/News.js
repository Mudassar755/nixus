import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const News = () => {
    return (
        <section className='my-5' id="news">
            <Container>
                <div className='d-flex mb-4'>
                    {/* <span className='heading-icon'><img src="/assets/icons/Icosahedron.png" alt='' /></span> */}
                    <h2 className='sub-heading'>News</h2>
                </div>
                <Row className='border-top desktop-row'>
                    <Col lg={4} md={6} sm={12} className='border-end'>
                        <div className='p-4'>
                            <h3 className='medium-heading'>Worried about AI ethics? Worry about developers’ ethics first</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet, at molestie quam sed diam. Pulvinar egestas sed.
                            </p>
                            <img src={'/assets/images/ai-ethics.png'} className='w-100' alt="ai-ethics" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='border-end'>
                        <div className='p-4'>
                            <h3 className='medium-heading'>EU lawmakers agree data reuse rules fosterAI</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.
                            </p>
                            <img src={'/assets/images/foster-ai.png'} className='w-100' alt="foster-ai" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12}>
                        <div className='p-4'>
                            <h3 className='medium-heading'>“Electric Generation”: a podcast about the transformative power of electrification</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.
                            </p>
                            <img src={'/assets/images/electric-generation.png'} className='w-100' alt="instance-segment" />
                        </div>
                    </Col>
                </Row>
                <Row className='border-top mobile-row'>
                    <Carousel className='features-carousel'>
                        <Carousel.Item>
                            <Col lg={4} md={6} sm={12} className='border-end'>
                                <div className='p-4'>
                                    <h3 className='medium-heading'>Worried about AI ethics? Worry about developers’ ethics first</h3>
                                    <p className='primary-text mb-5'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet, at molestie quam sed diam. Pulvinar egestas sed.
                                    </p>
                                    <img src={'/assets/images/ai-ethics.png'} className='w-100' alt="ai-ethics" />
                                </div>
                            </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Col lg={4} md={6} sm={12} className='border-end'>
                                <div className='p-4'>
                                    <h3 className='medium-heading'>EU lawmakers agree data reuse rules fosterAI</h3>
                                    <p className='primary-text mb-5'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.
                                    </p>
                                    <img src={'/assets/images/foster-ai.png'} className='w-100' alt="foster-ai" />
                                </div>
                            </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Col lg={4} md={6} sm={12} className=''>
                                <div className='p-4'>
                                    <h3 className='medium-heading'>“Electric Generation”: a podcast about the transformative power of electrification</h3>
                                    <p className='primary-text mb-5'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.
                                    </p>
                                    <img src={'/assets/images/electric-generation.png'} className='w-100' alt="instance-segment" />
                                </div>
                            </Col>
                        </Carousel.Item>
                    </Carousel>
                </Row>

            </Container>
        </section>
    )
}

export default News;