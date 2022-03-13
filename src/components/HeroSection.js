import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import FormModal from './FormModal';
import { Link } from 'react-scroll';

const HeroSection = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <section className='hero-section'>
            <Container>
                <Row className='hero-section-row'>
                    <Col lg={7} md={6} sm={12}>
                        <div className='hero-heading-box'>
                            <h1 className='hero-heading main-heading'>The new standard in <br />
                                <span className='gradient-text'>Artifical intelligent.</span>
                            </h1>

                        </div>
                    </Col>
                    <Col lg={5} md={6} sm={12}>
                        <div className='hero-text primary-text'>
                            <p>Our company is dedicated to providing AI-based solutions to our clients. 
                                We believe that artificial intelligence is the future of the world, 
                                and we are committed to helping our clients take advantage of this revolutionary technology.</p>
                            <Button variant='light' className='btn-rounded hero-btn simple-btn px-5 py-2' onClick={() => setShowModal(true)}>Get Started</Button>
                        </div>
                    </Col>
                </Row>

                <Row className='ai-fields-row desktop-row' id="ai-fields">
                    <h3 className='x-small-heading'>Our Fields of AI</h3>
                    <Col className='ai-field-col'>
                        <Link
                            activeClass="active"
                            to={'get-it-right'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <div className='ai-field'>
                                <img src="/assets/icons/field1.png" alt='' />
                                <span className='small-text'>Get It Right</span>
                            </div>
                        </Link>
                    </Col>
                    <Col>
                    <Link
                            activeClass="active"
                            to={'no-more-reading'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                            <img src="/assets/icons/field2.png" alt='' />
                            <span className='small-text'>No More Reading</span>
                        </div>
                        </Link>
                    </Col>
                    <Col>
                    <Link
                            activeClass="active"
                            to={'treasure-hunter'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                            <img src="/assets/icons/field3.png" alt='' />
                            <span className='small-text'>Treasure Hunter</span>
                        </div>
                        </Link>
                    </Col>
                    <Col>
                    <Link
                            activeClass="active"
                            to={'catch-ya'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                            <img src="/assets/icons/field4.png" alt='' />
                            <span className='small-text'>Catch Ya</span>
                        </div>
                        </Link>
                    </Col>
                    <Col>
                    <Link
                            activeClass="active"
                            to={'new-life'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                            <img src="/assets/icons/field5.png" alt='' />
                            <span className='small-text'>Giving A New Life</span>
                        </div>
                        </Link>
                    </Col>
                    <Col>
                    <Link
                            activeClass="active"
                            to={'no-more-typing'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                            <img src="/assets/icons/field-shape.png" alt='' />
                            <span className='small-text'>No More Typing</span>
                        </div>
                        </Link>
                    </Col>
                    <Col>
                    <Link
                            activeClass="active"
                            to={'know-your-text'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                            <img src="/assets/icons/field7.png" alt='' />
                            <span className='small-text'>Know Your Text</span>
                        </div>
                        </Link>
                    </Col>
                </Row>
                <Row className='mobile-row'>

                    <div className='d-flex mob-ai-fields'>
                        <Link
                            activeClass="active"
                            to={'get-it-right'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                                <img src="/assets/icons/field1.png" alt='' />
                                <span className='small-text'>Get It Right</span>
                            </div>
                        </Link>
                    <Link
                            activeClass="active"
                            to={'no-more-reading'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <div className='ai-field'>
                            <img src="/assets/icons/field2.png" alt='' />
                            <span className='small-text'>No More Reading</span>
                        </div>
                        </Link>
                    <Link
                            activeClass="active"
                            to={'treasure-hunter'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                            <img src="/assets/icons/field3.png" alt='' />
                            <span className='small-text'>Treasure Hunter</span>
                        </div>
                        </Link>
                    <Link
                            activeClass="active"
                            to={'catch-ya'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                            <img src="/assets/icons/field4.png" alt='' />
                            <span className='small-text'>Catch Ya</span>
                        </div>
                        </Link>
                    <Link
                            activeClass="active"
                            to={'new-life'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                            <img src="/assets/icons/field5.png" alt='' />
                            <span className='small-text'>Giving A New Life</span>
                        </div>
                        </Link>
                    <Link
                            activeClass="active"
                            to={'no-more-typing'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                            <img src="/assets/icons/field-shape.png" alt='' />
                            <span className='small-text'>No More Typing</span>
                        </div>
                        </Link>
                    <Link
                            activeClass="active"
                            to={'know-your-text'}
                            // href={'get-it-right'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                        <div className='ai-field'>
                            <img src="/assets/icons/field7.png" alt='' />
                            <span className='small-text'>Know Your Text</span>
                        </div>
                        </Link>
                        {/* <div className='ai-field'>
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
                        </div> */}
                    </div>
                </Row>
            </Container>

            <FormModal show={showModal} setShow={setShowModal} />
        </section>
    )
}

export default HeroSection