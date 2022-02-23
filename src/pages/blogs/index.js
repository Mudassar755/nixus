import React, {useEffect, useState} from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const Blogs = () => {
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
        <section className='my-5' id="news">
            <Container>
                <div className='d-flex mb-4'>
                    {/* <span className='heading-icon'><img src="/assets/icons/Icosahedron.png" alt='' /></span> */}
                    <h2 className='sub-heading gradient-text'>News</h2>
                </div>
                <Row>
                    <Col lg={12} md={12} sm={12} className='mt-4'>
                        <div className='bg-dark-grey p-4'>
                            <h3 className='small-heading gradient-text'>03. object Recognition</h3>
                            <p className='primary-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod <br />lectus interdum in varius amet.
                            </p>
                            <div className='img-classification-1'>
                                <div className='img-box-1'>
                                    <img src={'/assets/images/backgroung-img.png'} className="w-100" alt="" />
                                    {/* <span>Dog</span> */}
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className='desktop-row'>
                    <Col lg={4} md={6} sm={12} className='border-end border-top mt-5'>
                        <div className='p-4'>
                            <h3 className='medium-heading'>Worried about AI ethics? Worry about developers’ ethics first</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet, at molestie quam sed diam. Pulvinar egestas sed.
                            </p>
                            <img src={'/assets/images/ai-ethics.png'} className='w-100' alt="ai-ethics" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='border-end border-top mt-5'>
                        <div className='p-4'>
                            <h3 className='medium-heading'>EU lawmakers agree data reuse rules fosterAI</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.
                            </p>
                            <img src={'/assets/images/foster-ai.png'} className='w-100' alt="foster-ai" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='border-top mt-5'>
                        <div className='p-4'>
                            <h3 className='medium-heading'>“Electric Generation”: a podcast about the transformative power of electrification</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.
                            </p>
                            <img src={'/assets/images/electric-generation.png'} className='w-100' alt="instance-segment" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='border-end border-top mt-5'>
                        <div className='p-4'>
                            <h3 className='medium-heading'>Worried about AI ethics? Worry about developers’ ethics first</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet, at molestie quam sed diam. Pulvinar egestas sed.
                            </p>
                            <img src={'/assets/images/ai-ethics.png'} className='w-100' alt="ai-ethics" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='border-end border-top mt-5'>
                        <div className='p-4'>
                            <h3 className='medium-heading'>EU lawmakers agree data reuse rules fosterAI</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.
                            </p>
                            <img src={'/assets/images/foster-ai.png'} className='w-100' alt="foster-ai" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='border-top mt-5'>
                        <div className='p-4'>
                            <h3 className='medium-heading'>“Electric Generation”: a podcast about the transformative power of electrification</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.
                            </p>
                            <img src={'/assets/images/electric-generation.png'} className='w-100' alt="instance-segment" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='border-end border-top mt-5'>
                        <div className='p-4'>
                            <h3 className='medium-heading'>Worried about AI ethics? Worry about developers’ ethics first</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet, at molestie quam sed diam. Pulvinar egestas sed.
                            </p>
                            <img src={'/assets/images/ai-ethics.png'} className='w-100' alt="ai-ethics" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='border-end border-top mt-5'>
                        <div className='p-4'>
                            <h3 className='medium-heading'>EU lawmakers agree data reuse rules fosterAI</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.
                            </p>
                            <img src={'/assets/images/foster-ai.png'} className='w-100' alt="foster-ai" />
                        </div>
                    </Col>
                    <Col lg={4} md={6} sm={12} className='border-top mt-5'>
                        <div className='p-4'>
                            <h3 className='medium-heading'>“Electric Generation”: a podcast about the transformative power of electrification</h3>
                            <p className='primary-text mb-5'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et vitae amet.
                            </p>
                            <img src={'/assets/images/electric-generation.png'} className='w-100' alt="instance-segment" />
                        </div>
                    </Col>
                </Row>
                <Row className='mobile-row mt-5'>
                    <Carousel className='features-carousel' interval={null}>
                        <Carousel.Item>
                            <Col lg={4} md={6} sm={12} className='pt-5 border-end border-top'>
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
                            <Col lg={4} md={6} sm={12} className=' pt-5 border-end border-top'>
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
                            <Col lg={4} md={6} sm={12} className='pt-5 border-top'>
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
              className="w-100"
              src={ isMobile ? "/assets/images/choose-us.png" : "/assets/images/choose-us-desktop.png"}
              alt=""
            />
          </Col>
        </Row>
        </Container>
      </section>
        </section>
    )
}

export default Blogs