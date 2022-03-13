import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'

const NoMoreTyping = () => {
  return (
    <section className='new-section' id="no-more-typing">
      <Container>
        <div className='d-flex align-items-center mb-4'>
          <span className="heading-icon">
            <img src="/assets/icons/Spheres 2.png" alt="" />
          </span>
          <h2 className="sub-heading">No More Typing</h2>
        </div>
        <p className='primary-text heading-description w-75'>
          Automate your daily typing tasks. Automatically get your text paraphrased,
          summarised or written from the base without worrying about taking out time to type long texts.
        </p>
        <Row className='desktop-row'>
          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey box-size p-4 h-100">
              <div>
                <h3 className="small-heading gradient-text">
                  01. Machine Translation
                </h3>
                <p className="primary-text">
                  NIXUS provides machine translation services with its Machine Learning techniques.
                  You can simply switch from one language to another without hiring any professional translators
                </p>
              </div>
              <img
                className="w-100"
                src={"/assets/images/machine-translation.png"}
                alt="object-detection"
              />
            </div>
          </Col>

          <Col lg={4} md={4} sm={4}>
            <div className="bg-dark-grey box-size p-4 h-100">
              <div>
                <h3 className="small-heading gradient-text">
                  02. Natural language generation
                </h3>
                <p className="primary-text">
                  Generating blogs, marketing headlines or any other content without hiring a professional writer or
                  typing content. NIXUS provides AI programmed codes so you can generate your desired content
                  without worrying about the hassle of typing.
                </p>
              </div>
              <img
                className="w-100"
                src={"/assets/images/natural-language.png"}
                alt="object-detection"
              />
            </div>
          </Col>
          <Col lg={4} md={4} sm={4}>

            <div className="bg-dark-grey box-size p-4 h-100">
              <div>
                <h3 className="small-heading gradient-text">
                  03. Text Summeration
                </h3>
                <p className="primary-text">
                  Summarise books and lengthy research articles to extract precise and useful information,
                  eliminating irrelevant and undesired information. Generate summary of multiple types and
                  length according to your business use case.
                </p>
              </div>
              <img
                className="w-100"
                src={"/assets/images/text-summarization.png"}
                alt="object-detection"
              />
            </div>
          </Col>
        </Row>

        <Row className='mobile-row'>
          <Carousel className='features-carousel' interval={null}>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey box-size p-4 pt-5">
                  <div>
                    <h3 className="small-heading gradient-text">
                      01. Machine Translation
                    </h3>
                    <p className="primary-text">
                      NIXUS provides machine translation services with its Machine Learning techniques.
                      You can simply switch from one language to another without hiring any professional translators
                    </p>
                  </div>
                  <img
                    className="w-100"
                    src={"/assets/images/machine-translation.png"}
                    alt="object-detection"
                  />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey box-size p-4 pt-5">
                  <div>
                    <h3 className="small-heading gradient-text">
                      02. Natural language generation
                    </h3>
                    <p className="primary-text">
                      Generating blogs, marketing headlines or any other content without hiring a professional writer or
                      typing content. NIXUS provides AI programmed codes so you can generate your desired content
                      without worrying about the hassle of typing.
                    </p>
                  </div>
                  <img
                    className="w-100"
                    src={"/assets/images/natural-language.png"}
                    alt="object-detection"
                  />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey box-size p-4 pt-5">
                  <div>
                    <h3 className="small-heading gradient-text">
                      03. Text Summeration
                    </h3>
                    <p className="primary-text">
                      Summarise books and lengthy research articles to extract precise and useful information,
                      eliminating irrelevant and undesired information. Generate summary of multiple types and
                      length according to your business use case.
                    </p>

                  </div>
                  <img
                    className="w-100"
                    src={"/assets/images/text-summarization.png"}
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