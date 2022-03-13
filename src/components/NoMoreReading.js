import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const NoMoreReading = () => {
  return (
    <section className="new-section" id="no-more-reading">
      <Container>
        <div>
          <div className="d-flex align-items-center mb-4">
            <span className="heading-icon">
              <img src="/assets/icons/Mask Group.png" alt="" />
            </span>
            <h2 className="sub-heading">No More Reading</h2>
          </div>

          <p className='primary-text heading-description w-75'>
            Save your time and get directly your desired insights without going through length blogs and boring research articles. NIXUS's highly trained professionals code AI algorithms so to dig out targeted text from handwritten and scanned texts.
          </p>
          <Row className="desktop-row">
            <Col xl={8} md={8} sm={8}>
              <div className="bg-dark-grey p-4 h-100">
                <div>
                  <h3 className="small-heading gradient-text">
                    01. text mining
                  </h3>
                  <p className="primary-text">
                    Identify facts, relationships and other crucial buried data in long dissertations and
                    blogs with the use of NLP techniques from NIXUS and discover information & find solutions
                    to unanswered questions.
                  </p>
                </div>
                <img className='w-100' src={'/assets/images/text-mining.png'} alt="object-detection" />
              </div>
            </Col>

            <Col xl={4} md={4} sm={4}>
              <div className="bg-dark-grey p-4">
                <div>
                  <h3 className="small-heading gradient-text">
                    02. optical character recognition
                  </h3>
                  <p className="primary-text">
                    Convert scanned and handwritten texts into a digital format. NIXUS has made editing and searching
                    handwritten and scanned documents by implementing modern machine learning techniques to convert
                    scanned documents into editable ones.
                  </p>
                </div>
                <img
                  className="w-100"
                  src={"/assets/images/optical-character.png"}
                  alt="object-detection"
                />
              </div>
            </Col>
          </Row>
          <Row className="mobile-row">
            <Carousel className='features-carousel' interval={null}>
              <Carousel.Item>
                <Col>
                  <div className="bg-dark-grey p-4 pt-5 h-100">
                    <div>
                      <h3 className="small-heading gradient-text">
                        01. text mining
                      </h3>
                      <p className="primary-text">
                        Identify facts, relationships and other crucial buried data in long dissertations and
                        blogs with the use of NLP techniques from NIXUS and discover information & find solutions
                        to unanswered questions.
                      </p>
                    </div>
                    <img className='w-100' src={'/assets/images/text-mining-mob.png'} alt="object-detection" />
                  </div>
                </Col>
              </Carousel.Item>
              <Carousel.Item>
                <Col>
                  <div className="bg-dark-grey p-4 pt-5">
                    <div>
                      <h3 className="small-heading gradient-text">
                        02. optical character recognition
                      </h3>
                      <p className="primary-text">
                        Convert scanned and handwritten texts into a digital format. NIXUS has made editing and searching
                        handwritten and scanned documents by implementing modern machine learning techniques to convert
                        scanned documents into editable ones.
                      </p>
                    </div>
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

export default NoMoreReading;
