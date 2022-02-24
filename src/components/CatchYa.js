import React from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";

const CatchYa = () => {
  return (
    <section className="new-section" id="catch-ya">
      <Container>

        {/* <Row>
            <Col> */}
        <div className="d-flex align-items-center mb-4">
          <span className="heading-icon">
            <img src="/assets/icons/MaskGroup_1.png" alt="" />
          </span>
          <h2 className="sub-heading">Catch Ya</h2>
        </div>
        {/* </Col>
            <Col> */}
        <p className="primary-text heading-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
          euismod lectus interdum in varius amet.
        </p>
        {/* </Col>
          </Row> */}
        <Row className="desktop-row">
          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey p-4">
              <h3 className="small-heading gradient-text">
                01. Action Recognition
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="w-100"
                src={"/assets/images/Frame 203.png"}
                alt="object-detection"
              />
            </div>
          </Col>

          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey p-4">
              <h3 className="small-heading gradient-text">
                02. 3D/2D pose Estimation
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="w-100"
                src={"/assets/images/Frame 93.png"}
                alt="object-detection"
              />
            </div>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey p-4">
              <h3 className="small-heading gradient-text">
                03. Hand Guesture
              </h3>
              <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Viverra euismod lectus interdum in varius amet.
              </p>
              <img
                className="w-100"
                src={"/assets/images/Frame 77.png"}
                alt="object-detection"
              />
            </div>
          </Col>
        </Row>
        <Row className="mobile-row">
          <Carousel className='features-carousel' interval={null}>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey p-4 pt-5">
                  <h3 className="small-heading gradient-text">
                    01. Action Recognition
                  </h3>
                  <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra euismod lectus interdum in varius amet.
                  </p>
                  <img
                    className="animated-image"
                    src={"/assets/images/Frame 203.png"}
                    alt="object-detection"
                  />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey p-4 pt-5">
                  <h3 className="small-heading gradient-text">
                    02. 3D/2D pose Estimation
                  </h3>
                  <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra euismod lectus interdum in varius amet.
                  </p>
                  <img
                    className="animated-image"
                    src={"/assets/images/Frame 93.png"}
                    alt="object-detection"
                  />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey p-4 pt-5">
                  <h3 className="small-heading gradient-text">
                    03. Hand Guesture
                  </h3>
                  <p className="primary-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra euismod lectus interdum in varius amet.
                  </p>
                  <img
                    className="animated-image"
                    src={"/assets/images/Frame 77.png"}
                    alt="object-detection"
                  />
                </div>
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>

      </Container>
    </section>
  );
};

export default CatchYa;
