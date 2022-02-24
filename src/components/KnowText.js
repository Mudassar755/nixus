import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const KnowText = () => {
  return (
    <section className='new-section text-section' id="know-your-text">
      <Container>
        <div className='d-flex align-items-center mb-4'>
          <span className="heading-icon">
            <img src="/assets/icons/MaskGroup_2.png" alt="" />
          </span>
          <h2 className="sub-heading">Know Your Text</h2>
        </div>
        <Row className='desktop-row'>
          <Col xl={4} md={4} sm={4} className='mt-4'>
            <div className="bg-dark-grey p-4">
              <h3 className="small-heading gradient-text">
                01. Name Entity Recognition
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img className='w-100' src={'/assets/images/Frame 2894.png'} alt="object-detection" />
            </div>
          </Col>

          <Col xl={8} md={8} sm={8} className='mt-4'>
            <div className="bg-dark-grey p-4 h-100">
              <h3 className="small-heading gradient-text">
                02. Semantic Search
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              {/* <img
                  className=""
                  src={"/assets/images/semantic-search.png"}
                  alt="object-detection"
                /> */}
            </div>
          </Col>
          <Col lg={4} md={4} sm={4} className='mt-4'>
            <div className="bg-dark-grey box-size p-4">
              <h3 className="small-heading gradient-text">
                03. Semantic Analysis
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="w-100"
                src={"/assets/images/Frame 2958.png"}
                alt="object-detection"
              />
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} className='mt-4'>
            <div className="bg-dark-grey box-size p-4">
              <h3 className="small-heading gradient-text">
                04. Text classification
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="w-100"
                src={"/assets/images/Frame 2959.png"}
                alt="object-detection"
              />
            </div>
          </Col>
          <Col lg={4} md={4} sm={4} className='mt-4'>
            <div className="bg-dark-grey box-size p-4">
              <h3 className="small-heading gradient-text">
                05. Text Extraction
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="w-100"
                src={"/assets/images/Frame 2960.png"}
                alt="object-detection"
              />
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} className='mt-4'>
            <div className='bg-dark-grey p-4'>
              <h3 className='small-heading gradient-text'>06. Aspect Mining</h3>
              <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
              </p>
              <img src={'/assets/images/image-from-rawpixel-id-70730-jpeg-1.png'} className='w-100' alt="localization" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} className='mt-4'>
            <div className='bg-dark-grey p-4'>
              <h3 className='small-heading gradient-text'>07. Topic Modeling</h3>
              <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
              </p>
              <img src={'/assets/images/image-from-rawpixel-id-70730-jpeg 1 (2).png'} className='w-100' alt="localization" />
            </div>
          </Col>
        </Row>
        <Row className='mobile-row'>
          <Carousel className='features-carousel' interval={null}>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey p-4 pt-5">
                  <h3 className="small-heading gradient-text">
                    01. Name Entity Recognition
                  </h3>
                  <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra euismod lectus interdum in varius amet.
                  </p>
                  <img className='w-100' src={'/assets/images/Frame 2894.png'} alt="object-detection" />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey p-4 pt-5 h-100">
                  <h3 className="small-heading gradient-text">
                    02. Semantic Search
                  </h3>
                  <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra euismod lectus interdum in varius amet.
                  </p>
                  <img
                    className="w-100"
                    src={"/assets/images/semantic-search.png"}
                    alt="object-detection"
                  />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey box-size p-4 pt-5">
                  <h3 className="small-heading gradient-text">
                    03. Semantic Analysis
                  </h3>
                  <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra euismod lectus interdum in varius amet.
                  </p>
                  <img
                    className="w-100"
                    src={"/assets/images/Frame 2958.png"}
                    alt="object-detection"
                  />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey box-size p-4 pt-5">
                  <h3 className="small-heading gradient-text">
                    04. Text classification
                  </h3>
                  <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra euismod lectus interdum in varius amet.
                  </p>
                  <img
                    className="w-100"
                    src={"/assets/images/Frame 2959.png"}
                    alt="object-detection"
                  />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey box-size p-4 pt-5">
                  <h3 className="small-heading gradient-text">
                    05. Text Extraction
                  </h3>
                  <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra euismod lectus interdum in varius amet.
                  </p>
                  <img
                    className="w-100"
                    src={"/assets/images/Frame 2960.png"}
                    alt="object-detection"
                  />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className='bg-dark-grey p-4 pt-5'>
                  <h3 className='small-heading gradient-text'>06. Aspect Mining</h3>
                  <p className='primary-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                  </p>
                  <img src={'/assets/images/image-from-rawpixel-id-70730-jpeg-1.png'} className='w-100' alt="localization" />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className='bg-dark-grey p-4 pt-5'>
                  <h3 className='small-heading gradient-text'>07. Topic Modeling</h3>
                  <p className='primary-text'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                  </p>
                  <img src={'/assets/images/image-from-rawpixel-id-70730-jpeg 1 (2).png'} className='w-100' alt="localization" />
                </div>
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>
        {/* <Row style={{ paddingTop: '20px' }}>
          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey box-size p-4">
              <h3 className="small-heading gradient-text">
                03. Semantic Analysis
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="text-image"
                src={"/assets/images/Frame 2958.png"}
                alt="object-detection"
              />
            </div>
          </Col>

          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey box-size p-4">
              <h3 className="small-heading gradient-text">
                04. Text classification
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="text-image"
                src={"/assets/images/Frame 2959.png"}
                alt="object-detection"
              />
            </div>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey box-size p-4">
              <h3 className="small-heading gradient-text">
                05. Text Extraction
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="text-image"
                src={"/assets/images/Frame 2960.png"}
                alt="object-detection"
              />
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className='bg-dark-grey p-4'>
              <h3 className='small-heading gradient-text'>06. Aspect Mining</h3>
              <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
              </p>
              <img src={'/assets/images/image-from-rawpixel-id-70730-jpeg-1.png'} alt="localization" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className='bg-dark-grey p-4'>
              <h3 className='small-heading gradient-text'>07. Topic Modeling</h3>
              <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
              </p>
              <img src={'/assets/images/image-from-rawpixel-id-70730-jpeg 1 (2).png'} alt="localization" />
            </div>
          </Col>
        </Row>
        <Row style={{ paddingTop: '20px' }}>
          <Col lg={6} md={6} sm={6}>
            <div className='bg-dark-grey p-4'>
              <h3 className='small-heading gradient-text'>06. Aspect Mining</h3>
              <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
              </p>
              <img src={'/assets/images/image-from-rawpixel-id-70730-jpeg-1.png'} alt="localization" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={6}>
            <div className='bg-dark-grey p-4'>
              <h3 className='small-heading gradient-text'>07. Topic Modeling</h3>
              <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
              </p>
              <img src={'/assets/images/image-from-rawpixel-id-70730-jpeg 1 (2).png'} alt="localization" />
            </div>
          </Col>

        </Row> */}
      </Container>
    </section>
  )
}

export default KnowText