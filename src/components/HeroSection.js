import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import FormModal from './FormModal';

const HeroSection = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <section className='hero-section'>
            <Container>
                <Row className='hero-section-row'>
                    <Col lg={6} md={6} sm={12}>
                        <div className='hero-heading-box'>
                            <h1 className='hero-heading main-heading'>The new standard in <br />
                                <span className='gradient-text'>Artifical intelligent.</span>
                            </h1>

                        </div>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <div className='hero-text primary-text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in
                                varius amet interdum. Nullam tellus enim. dolor sit amet, consecte.</p>
                            <Button variant='light' className='btn-rounded hero-btn px-5 py-2' onClick={() => setShowModal(true)}>Get Started</Button>
                        </div>
                    </Col>
                </Row>

                <Row className='ai-fields-row desktop-row' id="ai-fields">
                    <h3 className='x-small-heading'>Our Fields of AI</h3>
                    <Col className='ai-field-col'>
                        <div className='ai-field'>
                            <img src="/assets/icons/field1.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field2.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field3.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field4.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field5.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field-shape.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field7.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                </Row>
                <Row className='mobile-row'>

                    <div className='d-flex mob-ai-fields'>
                        <div className='ai-field'>
                            <img src="/assets/icons/field7.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                        <div className='ai-field'>
                            <img src="/assets/icons/field7.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                        <div className='ai-field'>
                            <img src="/assets/icons/field7.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                        <div className='ai-field'>
                            <img src="/assets/icons/field7.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                        <div className='ai-field'>
                            <img src="/assets/icons/field7.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                        <div className='ai-field'>
                            <img src="/assets/icons/field7.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                        <div className='ai-field'>
                            <img src="/assets/icons/field7.png" alt='' />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </div>
                </Row>
            </Container>

            <FormModal show={showModal} setShow={setShowModal} />
        </section>
    )
}

export default HeroSection