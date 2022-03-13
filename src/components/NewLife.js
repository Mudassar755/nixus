import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const NewLife = () => {
    return (
        <section className='new-section' id="new-life">
            <Container>
                <div>
                    <div className='d-flex align-items-center mb-4'>
                        <span className='heading-icon'><img src="/assets/icons/FlatCylinder3.png" alt='' /></span>
                        <h2 className='sub-heading'>Giving a New Life</h2>
                    </div>

                    <p className='primary-text heading-description w-75'>
                        Ever wondered of transforming pictures from your grandfather's generation! NIXUS offers
                        image colourisation and reconstruction services to transform old worn out images to more
                        aesthetically appealing and perceptually meaningful ones.
                    </p>

                    <Row className='desktop-row'>

                        <Col xl={8}>
                            <div className='bg-dark-grey p-4'>
                                <div>
                                    <h3 className='small-heading gradient-text'>
                                        01. Colourization
                                    </h3>
                                    <p className='primary-text'>
                                        Add colours to your black n white pictures from the 90's. Save your time from using
                                        Photoshop to add colours instead use our AI algorithms and add a glance of beauty
                                        to grayscale images.
                                    </p>

                                </div>
                                <img className='w-100' src={'/assets/images/Frame201.png'} alt="object-detection" />
                            </div>
                        </Col>


                        <Col xl={4}>
                            <div className='bg-dark-grey p-4'>
                                <div>
                                    <h3 className='small-heading gradient-text'>02. Scene Reconstruction</h3>
                                    <p className='primary-text'>
                                        Images are torn out with time and it's difficult to recognize them.
                                        Our AI professionals will reconstruct the digital version of an image
                                        and bring back the original aesthetics of the image.
                                    </p>

                                </div>
                                <img className='w-100' src={'/assets/images/image-from-rawpixel-id-70730-jpeg 1.png'} alt="object-detection" />
                            </div>
                        </Col>

                    </Row>

                    <Row className='mobile-row'>
                        <Carousel className='features-carousel' interval={null}>
                            <Carousel.Item>
                                <Col>
                                    <div className='bg-dark-grey p-4 pt-5'>
                                        <div>
                                            <h3 className='small-heading gradient-text'>
                                                01. Colourization
                                            </h3>
                                            <p className='primary-text'>
                                                Add colours to your black n white pictures from the 90's. Save your time from using
                                                Photoshop to add colours instead use our AI algorithms and add a glance of beauty
                                                to grayscale images.
                                            </p>

                                        </div>
                                        <img className='newlife-image w-100' src={'/assets/images/Frame201.png'} alt="object-detection" />
                                    </div>
                                </Col>
                            </Carousel.Item>
                            <Carousel.Item>
                                <Col>
                                    <div className='bg-dark-grey p-4 pt-5'>
                                        <div>
                                            <h3 className='small-heading gradient-text'>02. Scene Reconstruction</h3>
                                            <p className='primary-text'>
                                                Images are torn out with time and it's difficult to recognize them.
                                                Our AI professionals will reconstruct the digital version of an image
                                                and bring back the original aesthetics of the image.
                                            </p>
                                        </div>
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