import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const NewLife = () => {
    return (
        <section className='new-section'>
            <Container>
                <div>
                    <div className='d-flex align-items-center mb-4'>
                        <span className='heading-icon'><img src="/assets/icons/FlatCylinder3.png" alt='' /></span>
                        <h2 className='sub-heading'>Giving a New Life</h2>
                    </div>

                    <p className='primary-text heading-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum<br /> in varius amet interdum. Nullam tellus enim. dolor sit
                    </p>

                    <Row className='desktop-row'>

                        <Col xl={8}>
                            <div className='bg-dark-grey p-4'>
                                <h3 className='small-heading gradient-text'>
                                    01. Colourization
                                </h3>
                                <p className='primary-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                </p>
                                <img className='w-100' src={'/assets/images/Frame201.png'} alt="object-detection" />
                            </div>
                        </Col>


                        <Col xl={4}>
                            <div className='bg-dark-grey p-4'>
                                <h3 className='small-heading gradient-text'>02. Scene Reconstruction</h3>
                                <p className='primary-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                </p>
                                <img className='w-100' src={'/assets/images/image-from-rawpixel-id-70730-jpeg 1.png'} alt="object-detection" />
                            </div>
                        </Col>

                    </Row>

                    <Row className='mobile-row'>
                        <Carousel className='features-carousel' interval={null}>
                            <Carousel.Item>
                                <Col>
                                    <div className='bg-dark-grey p-4'>
                                        <h3 className='small-heading gradient-text'>
                                            01. Colourization
                                        </h3>
                                        <p className='primary-text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                        </p>
                                        <img className='newlife-image w-100' src={'/assets/images/Frame201.png'} alt="object-detection" />
                                    </div>
                                </Col>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Col>
                                    <div className='bg-dark-grey p-4'>
                                        <h3 className='small-heading gradient-text'>02. Scene Reconstruction</h3>
                                        <p className='primary-text'>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                                        </p>
                                        <img className='newlife-image w-100' src={'/assets/images/image-from-rawpixel-id-70730-jpeg 1.png'} alt="object-detection" />
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

export default NewLife