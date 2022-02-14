import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Reading = () => {
  return (
    <section className="new-section">
      <Container>
        <div>
          <div className="d-flex mb-4">
            <span className="heading-icon">
              <img src="/assets/icons/Mask Group.png" alt="" />
            </span>
            <h2 className="sub-heading">No More Reading</h2>
          </div>
          <Row className="desktop-row">
            <Col xl={8} md={8} sm={8}>
              <div className="bg-dark-grey p-4 h-100">
                <h3 className="small-heading gradient-text">
                  01. text mining
                </h3>
                <p className="primary-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra euismod lectus interdum in varius amet.
                </p>
                <img className='w-100' src={'/assets/images/text-mining.png'} alt="object-detection" />
              </div>
            </Col>

            <Col xl={4} md={4} sm={4}>
              <div className="bg-dark-grey p-4">
                <h3 className="small-heading gradient-text">
                  02. optical character recognition
                </h3>
                <p className="primary-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra euismod lectus interdum in varius amet.
                </p>
                <img
                  className="w-100"
                  src={"/assets/images/optical-character.png"}
                  alt="object-detection"
                />
              </div>
            </Col>
          </Row>
          <Row className="mobile-row">
            <Carousel className='features-carousel'>
              <Carousel.Item>
                <Col>
                  <div className="bg-dark-grey p-4 h-100">
                    <h3 className="small-heading gradient-text">
                      01. text mining
                    </h3>
                    <p className="primary-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Viverra euismod lectus interdum in varius amet.
                    </p>
                    <img className='w-100' src={'/assets/images/text-mining.png'} alt="object-detection" />
                  </div>
                </Col>
              </Carousel.Item>
              <Carousel.Item>
                <Col>
                  <div className="bg-dark-grey p-4">
                    <h3 className="small-heading gradient-text">
                      02. optical character recognition
                    </h3>
                    <p className="primary-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Viverra euismod lectus interdum in varius amet.
                    </p>
                    <img
                      className="w-100"
                      src={"/assets/images/opt-character-mob.png"}
                      alt="object-detection"
                    />
                  </div>
                </Col>
              </Carousel.Item>

            </Carousel>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Reading;
