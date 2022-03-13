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
        <p className='primary-text heading-description w-75'>
          Decision has become a lot easier when you have NIXUS by your side. We develop AI
          algorithms that will analyse graphs figures and extract text which will help to make known decisions.
        </p>
        <Row className='desktop-row'>
          <Col xl={4} md={4} sm={4} className='mt-4'>
            <div className="bg-dark-grey p-4">
              <div>
                <h3 className="small-heading gradient-text">
                  01. Name Entity Recognition
                </h3>
                <p className="primary-text">
                  Traditionally individuals read long paragraphs and articles to extract targeted entities.
                  With the development of the modern world, NIXUS offers Named Entity Recognition services
                  using the ingenious AI techniques to locate and classify unstructured texts into targeted entities.
                </p>
              </div>
              <img className='w-100' src={'/assets/images/name-entity.png'} alt="object-detection" />
            </div>
          </Col>

          <Col xl={8} md={8} sm={8} className='mt-4'>
            <div className="bg-dark-grey p-4 h-100">
              <div>
                <h3 className="small-heading gradient-text">
                  02. Semantic Search
                </h3>
                <p className="primary-text">
                  In the modern days, busy schedules tend to not having much time to look for exact keywords in any content.
                  NIXUS's Semantic Search services let you search your desired content without worrying about searching for
                  exact match keywords instead filter content whom nature matches your content needs.
                </p>
              </div>
              {/* <img
                  className=""
                  src={"/assets/images/semantic-search.png"}
                  alt="object-detection"
                /> */}
            </div>
          </Col>
          <Col lg={4} md={4} sm={4} className='mt-4'>
            <div className="bg-dark-grey box-size p-4">
              <div>
                <h3 className="small-heading gradient-text">
                  03. Semantic Analysis
                </h3>
                <p className="primary-text">
                  NIXUS has a history of providing all kinds of AI solutions. We offer semantic analysis
                  services so you don't need to read and understand the meaning and intent of the content.
                  Our built algorithms will analyse the meaning, intent and purpose of the content with just one click.
                </p>
              </div>
              <img
                className="w-100"
                src={"/assets/images/semantic-analysis.png"}
                alt="object-detection"
              />
            </div>
          </Col>

          <Col lg={4} md={4} sm={4} className='mt-4'>
            <div className="bg-dark-grey box-size p-4">
              <div>
                <h3 className="small-heading gradient-text">
                  04. Text classification
                </h3>
                <p className="primary-text">
                  NIXUS offers text classification services using Machine Learning techniques so you can classify
                  and categorise unstructured text into predefined groups and categories. NIXUS's this service can
                  both used medically and commercially to understand writer' psychological state or to categorise
                  content according to complexity.
                </p>
              </div>
              <img
                className="w-100"
                src={"/assets/images/text-classification.png"}
                alt="object-detection"
              />
            </div>
          </Col>
          <Col lg={4} md={4} sm={4} className='mt-4'>
            <div className="bg-dark-grey box-size p-4">
              <div>
                <h3 className="small-heading gradient-text">
                  05. Text Extraction
                </h3>
                <p className="primary-text">
                  NIXUS offer text extraction services with custom built algorithms for every individual to extract
                  their desired text from a raw content. Whether you are searching for numbers or some specific
                  terms, our AI algorithms will do the work without you putting efforts to read the whole content.
                </p>
              </div>
              <img
                className="w-100"
                src={"/assets/images/text-extraction.png"}
                alt="object-detection"
              />
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} className='mt-4'>
            <div className='bg-dark-grey p-4'>
              <div>
                <h3 className='small-heading gradient-text'>06. Aspect Mining</h3>
                <p className='primary-text'>
                  Every individual analyses a text according to their personal perspectives. Hiring individuals to
                  analyse a text with a different perspective might be impossible. We develop and train AI algorithms
                  that analyse your raw text according to your desired custom aspect.
                </p>
              </div>
              <img src={'/assets/images/aspect-mining.png'} className='w-100' alt="localization" />
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} className='mt-4'>
            <div className='bg-dark-grey p-4'>
              <div>
                <h3 className='small-heading gradient-text'>07. Topic Modeling</h3>
                <p className='primary-text'>
                  Wasting time reading lengthy time consuming blogs is too traditional. NIXUS has been
                  successful in developing unique AI algorithms that let you extract specific keywords
                  and topics from the text, allowing you to know which part of the text is talking about
                  your desired keyword or topic.
                </p>
              </div>
              <img src={'/assets/images/topic-modeling.png'} className='w-100' alt="localization" />
            </div>
          </Col>
        </Row>
        <Row className='mobile-row'>
          <Carousel className='features-carousel' interval={null}>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey p-4 pt-5">
                  <div>
                    <h3 className="small-heading gradient-text">
                      01. Name Entity Recognition
                    </h3>
                    <p className="primary-text">
                      Traditionally individuals read long paragraphs and articles to extract targeted entities.
                      With the development of the modern world, NIXUS offers Named Entity Recognition services
                      using the ingenious AI techniques to locate and classify unstructured texts into targeted entities.
                    </p>
                  </div>
                  <img className='w-100' src={'/assets/images/name-entity.png'} alt="object-detection" />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className="bg-dark-grey p-4 pt-5 h-100">
                  <div>
                    <h3 className="small-heading gradient-text">
                      02. Semantic Search
                    </h3>
                    <p className="primary-text">
                      In the modern days, busy schedules tend to not having much time to look for exact keywords in any content.
                      NIXUS's Semantic Search services let you search your desired content without worrying about searching for
                      exact match keywords instead filter content whom nature matches your content needs.
                    </p>
                  </div>
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
                  <div>
                    <h3 className="small-heading gradient-text">
                      03. Semantic Analysis
                    </h3>
                    <p className="primary-text">
                      NIXUS has a history of providing all kinds of AI solutions. We offer semantic analysis
                      services so you don't need to read and understand the meaning and intent of the content.
                      Our built algorithms will analyse the meaning, intent and purpose of the content with just one click.
                    </p>
                  </div>
                  <img
                    className="w-100"
                    src={"/assets/images/semantic-analysis.png"}
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
                      04. Text classification
                    </h3>
                    <p className="primary-text">
                      NIXUS offers text classification services using Machine Learning techniques so you can classify
                      and categorise unstructured text into predefined groups and categories. NIXUS's this service can
                      both used medically and commercially to understand writer' psychological state or to categorise
                      content according to complexity.
                    </p>
                  </div>
                  <img
                    className="w-100"
                    src={"/assets/images/text-classification.png"}
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
                      05. Text Extraction
                    </h3>
                    <p className="primary-text">
                      NIXUS offer text extraction services with custom built algorithms for every individual to extract
                      their desired text from a raw content. Whether you are searching for numbers or some specific
                      terms, our AI algorithms will do the work without you putting efforts to read the whole content.
                    </p>
                  </div>
                  <img
                    className="w-100"
                    src={"/assets/images/text-extraction.png"}
                    alt="object-detection"
                  />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className='bg-dark-grey p-4 pt-5'>
                  <div>
                    <h3 className='small-heading gradient-text'>06. Aspect Mining</h3>
                    <p className='primary-text'>
                      Every individual analyses a text according to their personal perspectives. Hiring individuals to
                      analyse a text with a different perspective might be impossible. We develop and train AI algorithms
                      that analyse your raw text according to your desired custom aspect.
                    </p>
                  </div>
                  <img src={'/assets/images/aspect-mining.png'} className='w-100' alt="localization" />
                </div>
              </Col>
            </Carousel.Item>
            <Carousel.Item>
              <Col>
                <div className='bg-dark-grey p-4 pt-5'>
                  <div>
                    <h3 className='small-heading gradient-text'>07. Topic Modeling</h3>
                    <p className='primary-text'>
                      Wasting time reading lengthy time consuming blogs is too traditional. NIXUS has been
                      successful in developing unique AI algorithms that let you extract specific keywords
                      and topics from the text, allowing you to know which part of the text is talking about
                      your desired keyword or topic.
                    </p>
                  </div>
                  <img src={'/assets/images/topic-modeling.png'} className='w-100' alt="localization" />
                </div>
              </Col>
            </Carousel.Item>
          </Carousel>
        </Row>

      </Container>
    </section>
  )
}

export default KnowText