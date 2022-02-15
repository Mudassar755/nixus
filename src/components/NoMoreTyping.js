import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const NoMoreTyping = () => {
  return (
    <section className='new-section'>
      <Container>
        <div className='d-flex align-items-center mb-4'>
          <span className="heading-icon">
            <img src="/assets/icons/Spheres 2.png" alt="" />
          </span>
          <h2 className="sub-heading">No More Typing</h2>
        </div>
        <Row className='desktop-row'>
          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey box-size p-4">
              <h3 className="small-heading gradient-text">
                01. Machine Translation
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="w-100"
                src={"/assets/images/Group 32.png"}
                alt="object-detection"
              />
            </div>
          </Col>

          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey box-size p-4">
              <h3 className="small-heading gradient-text">
                02. Natural language generation
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="w-100"
                src={"/assets/images/Frame 2889.png"}
                alt="object-detection"
              />
            </div>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey box-size p-4">
              <h3 className="small-heading gradient-text">
                03. Text Summeration
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="w-100"
                src={"/assets/images/Group 23.png"}
                alt="object-detection"
              />
            </div>
          </Col>
        </Row>

        <Row className='mobile-row'>
          <Carousel className='features-carousel' interval={null}>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey box-size p-4">
                  <h3 className="small-heading gradient-text">
                    01. Machine Translation
                  </h3>
                  <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra euismod lectus interdum in varius amet.
                  </p>
                  <img
                    className="w-100"
                    src={"/assets/images/Group 32.png"}
                    alt="object-detection"
                  />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
              <div className="bg-dark-grey box-size p-4">
              <h3 className="small-heading gradient-text">
                02. Natural language generation
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="w-100"
                src={"/assets/images/Frame 2889.png"}
                alt="object-detection"
              />
            </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
              <div className="bg-dark-grey box-size p-4">
              <h3 className="small-heading gradient-text">
                03. Text Summeration
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="w-100"
                src={"/assets/images/Group 23.png"}
                alt="object-detection"
              />
            </div>
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
    </section>
  )
}

export default NoMoreTyping