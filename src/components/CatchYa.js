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
        <p className="primary-text heading-description w-75">
          Gesture Recognition is now a fashion for tech persons. Recognize and track hand gestures and
          actions of a body. With our developed AI, get gesture controlled machines, enhance security
          systems and assist sign language persons.
        </p>
        {/* </Col>
          </Row> */}
        <Row className="desktop-row">
          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey p-4">
              <div>
                <h3 className="small-heading gradient-text">
                  01. Action Recognition
                </h3>
                <p className="primary-text">
                  Know about a person's intentions, personality and physiological state. Recognize Individual's
                  actions with our developed AI algorithms and predict what one is upto.
                </p>
              </div>
              <img
                className="w-100"
                src={"/assets/images/Frame 203.png"}
                alt="object-detection"
              />
            </div>
          </Col>

          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey p-4">
              <div>
                <h3 className="small-heading gradient-text">
                  02. 3D/2D pose Estimation
                </h3>
                <p className="primary-text">
                  You can develop an understanding of human body language. NIXUS offers to transform traditional
                  object tracking to innovative pose estimation to predict the transformation of an object and
                  deliver 2D or 3D images.
                </p>
              </div>
              <img
                className="w-100"
                src={"/assets/images/Frame 93.png"}
                alt="object-detection"
              />
            </div>
          </Col>
          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey p-4">
              <div>
                <h3 className="small-heading gradient-text">
                  03. Hand Guesture
                </h3>
                <p className="primary-text">
                  NIXUS provide professionally built algorithms that will recognize hand gestures so you
                  can now control machines or to create an efficient way of Non verbal communication for
                  persons with disabilities.
                </p>
              </div>
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
                  <div>
                    <h3 className="small-heading gradient-text">
                      01. Action Recognition
                    </h3>
                    <p className="primary-text">
                      Know about a person's intentions, personality and physiological state. Recognize Individual's
                      actions with our developed AI algorithms and predict what one is upto.
                    </p>
                  </div>
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
                  <div>
                    <h3 className="small-heading gradient-text">
                      02. 3D/2D pose Estimation
                    </h3>
                    <p className="primary-text">
                      You can develop an understanding of human body language. NIXUS offers to transform traditional
                      object tracking to innovative pose estimation to predict the transformation of an object and
                      deliver 2D or 3D images.
                    </p>

                  </div>
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
                  <div>
                    <h3 className="small-heading gradient-text">
                      03. Hand Guesture
                    </h3>
                    <p className="primary-text">
                      NIXUS provide professionally built algorithms that will recognize hand gestures so you
                      can now control machines or to create an efficient way of Non verbal communication for
                      persons with disabilities.
                    </p>

                  </div>
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
