import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-scroll';
import FormModal from './FormModal';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <footer className='footer-section'>
      <Container>
        <Row>
          <Col lg={3} md={3} sm={12} xs={12} className='mt-5'>
            <div>
              <img src={'/assets/icons/footer-logo.png'} alt="footer-logo" />
              </div>
          </Col>
          <Col lg={3} md={3} sm={6} xs={6} className='mt-5'>
            <h3 className='small-heading'>
              Sitemap
            </h3>
            <div className='d-flex flex-column footer-links'>
              <Link
                activeClass="active"
                to={'ai-fields'}
                href={'ai-fields'}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='primary-text'
              // key={i}
              >

                Our Fields of AI

              </Link>
              <Link
                activeClass="active"
                to={'how-it-works'}
                href={'how-it-works'}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='primary-text'
              // key={i}
              >
                How It Works
              </Link>
              <Link
                activeClass="active"
                to={'why-choose-us'}
                href={'why-choose-us'}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='primary-text'
              // key={i}
              >
                Why Choose Us
              </Link>
              <Link
                activeClass="active"
                to={'news'}
                href={'news'}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className='primary-text'
              // key={i}
              >
                News
              </Link>
            </div>
          </Col>
          <Col lg={2} md={2} sm={6} xs={6} className='mt-5'>
            <h3 className='small-heading'>Contact Us</h3>
            <div className='d-flex flex-column footer-links'>
              <a href="/email" className='primary-text' target="_blank">
                Email
              </a>
              <a href="/twitter" className='primary-text' target="_blank">
                Twitter
              </a>
              <a href="/discord" className='primary-text' target="_blank">
                Discord
              </a>
            </div>
          </Col>
          <Col lg={4} md={4} sm={12} xs={12} className='my-5'>
            <h3 className='small-heading mb-5'>
              We'll drop the best new bounties in your inbox every week.
            </h3>
            <button className='btn-rounded header-btn' onClick={() => setShowModal(true)}>Get Started</button>
          </Col>
        </Row>
      </Container>

      <FormModal show={showModal} setShow={setShowModal} />
    </footer>
  )
}

export default Footer