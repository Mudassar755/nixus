import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const HeroSection = () => {
    return (
        <section className='hero-section'>
            <Container>
                <Row className='hero-section-row'>
                    <Col>
                        <div className='hero-heading-box'>
                            <h1 className='hero-heading main-heading'>The new standard in <br />
                                <span>Artifical intelligent.</span>
                            </h1>

                        </div>
                    </Col>
                    <Col>
                        <div className='hero-text primary-text'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in
                                varius amet interdum. Nullam tellus enim. dolor sit amet, consecte.</p>
                            <Button variant='light' className='btn-rounded hero-btn px-4'>Get Started</Button>
                        </div>
                    </Col>
                </Row>

                <Row className='ai-fields'>
                    <h3 className='x-small-heading'>Our fields of AI</h3>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field1.png" />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                    <div className='ai-field'>
                            <img src="/assets/icons/field2.png" />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field3.png" />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field4.png" />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field5.png" />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field-shape.png" />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ai-field'>
                            <img src="/assets/icons/field7.png" />
                            <span className='small-text'>Get It Right</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HeroSection