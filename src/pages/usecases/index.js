import React, { useState, useEffect } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-scroll';
import UseCasesGrid from '../../components/UseCases';

const UseCases = () => {
    let [isMobile, setIsMobile] = useState(false);
    const setImageSize = () => {
        if (window.innerWidth < 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        setImageSize();
        window.addEventListener('resize', setImageSize);
    }, [isMobile]);
    return (
        <>
            <section className='hero-section'>
                <Container>
                    <Row className='hero-section-row'>
                        <Col lg={6} md={6} sm={12}>
                            <div className='hero-heading-box'>
                                <h1 className='main-heading gradient-text'>Use Cases</h1>
                            </div>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <div className='hero-text primary-text'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet interdum. Nullam tellus enim. dolor sit amet, consecte.</p>
                            </div>
                        </Col>
                    </Row>

                    <Row className='my-5 desktop-row'>
                        <Col>
                            <div className='brand-icon-box'>
                                <img src="/assets/icons/vodafone.png" alt='vodafone' className='brand-icon' />
                            </div>

                        </Col>
                        <Col>
                            <div className='brand-icon-box'>
                                <img src="/assets/icons/hp-logo.png" alt='' className='brand-icon' />
                            </div>
                        </Col>
                        <Col>
                            <div className='brand-icon-box'>
                                <img src="/assets/icons/canon.png" alt='' className='brand-icon' />
                            </div>
                        </Col>
                        <Col>
                            <div className='brand-icon-box'>
                                <img src="/assets/icons/vodafone.png" alt='' className='brand-icon' />
                            </div>
                        </Col>
                        <Col>
                            <div className=''>
                                <img src="/assets/icons/qiwi.png" alt='' className='brand-icon' />
                            </div>
                        </Col>
                        <Col>
                            <div className='brand-icon-box'>
                                <img src="/assets/icons/vodafone.png" alt='' className='brand-icon' />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            <Container>
                <Row className='mobile-row'>

                <div className='d-flex mob-usecase-brands'>
                        <div className='brand-icon-box'>
                            <img src="/assets/icons/vodafone.png" alt='' className='brand-icon' />
                        </div>
                        <div className='brand-icon-box'>
                            <img src="/assets/icons/hp-logo.png" alt='' className='brand-icon' />
                        </div>
                        <div className='brand-icon-box'>
                            <img src="/assets/icons/canon.png" alt='' className='brand-icon' />
                        </div>
                        <div className='brand-icon-box'>
                            <img src="/assets/icons/vodafone.png" alt='' className='brand-icon' />
                        </div>
                        <div className='brand-icon-box'>
                            <img src="/assets/icons/qiwi.png" alt='' className='brand-icon' />
                        </div>
                        <div className='brand-icon-box'>
                            <img src="/assets/icons/vodafone.png" alt='' className='brand-icon' />
                        </div>

                    </div>
                </Row>
                <UseCasesGrid />
            </Container>
            <section className="work-section" id="why-choose-us">
                <Container className="px-5">
                    <Row className="mask-layer">
                        <Col lg={8} md={12} sm={12} className="mt-4">
                            <div className="p-4">
                                <h3 className="sub-heading gradient-text">
                                    Why Choose Us
                                </h3>
                                <p className="primary-text">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel mauris gravida tortor, ac eget eget non.
                                    Nibh vulputate aliquam non vel nec. Nulla enim id pellentesque hendrerit. Faucibus arcu blandit habitasse nunc.
                                </p>
                                <button className="btn-rounded-2 px-5 py-2">Get Started</button>
                            </div>
                        </Col>
                        <Col lg={4} md={12} sm={12} className="p-0">
                            <img
                                className="w-100 h-100"
                                src={isMobile ? "/assets/images/choose-us.png" : "/assets/images/choose-us-desktop.png"}
                                alt=""
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default UseCases