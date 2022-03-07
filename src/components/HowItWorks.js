import React,{useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import FormModal from "./FormModal";

const HowItWorks = () => {
  let [isMobile, setIsMobile] = useState(false);
  const [showModal, setShowModal] = useState(false);
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
    <section className="how-it-work back-image" id="how-it-works">
      <Container className="text-container">
        <div>
          <hr />
          <h2 className="sub-heading-1">How It Works</h2>
        </div>
        <Row className="desktop-row">
          <Col>
            <div className="p-4 guide-step">
              <img
                className="image-section"
                src={"/assets/images/discover.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">1.Get To Know</h3>
              <p className="primary-text x-small-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                euismod lectus interdum in varius amet.
              </p>
            </div>
          </Col>
          <Col>
            <div className="p-4 guide-step">
              <img
                className="image-section"
                src={"/assets/images/Frame 2925.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">2. Prototyping</h3>
              <p className="primary-text x-small-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                euismod lectus interdum in varius amet.
              </p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="p-4 guide-step">
              <img
                className="image-section"
                src={"/assets/images/contribute.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">3. Development</h3>
              <p className="primary-text x-small-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                euismod lectus interdum in varius amet.
              </p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="p-4 guide-step">
              <img
                className="image-section"
                src={"/assets/images/dark.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">4. Testing</h3>
              <p className="primary-text x-small-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                euismod lectus interdum in varius amet.
              </p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="p-4 guide-step">
              <img
                className="image-section"
                src={"/assets/images/graphic.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">5. Deployment</h3>
              <p className="primary-text x-small-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                euismod lectus interdum in varius amet.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mobile-row">
          <div className='d-flex mob-fields'>
            <div className="p-4 guide-step">
              <img
                className=""
                src={"/assets/images/discover.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">1.Get To Know</h3>
              <p className="primary-text x-small-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                euismod lectus interdum in varius amet.
              </p>
            </div>
            <div className="p-4 guide-step">
              <img
                className="image-section"
                src={"/assets/images/Frame 2925.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">2. Prototyping</h3>
              <p className="primary-text x-small-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                euismod lectus interdum in varius amet.
              </p>
            </div>
            <div className="p-4 guide-step">
              <img
                className="image-section"
                src={"/assets/images/contribute.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">3. Development</h3>
              <p className="primary-text x-small-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                euismod lectus interdum in varius amet.
              </p>
            </div>
            <div className="p-4 guide-step">
              <img
                className="image-section"
                src={"/assets/images/dark.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">4. Testing</h3>
              <p className="primary-text x-small-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                euismod lectus interdum in varius amet.
              </p>
            </div>
            <div className="p-4 guide-step">
              <img
                className="image-section"
                src={"/assets/images/graphic.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">5. Deployment</h3>
              <p className="primary-text x-small-heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                euismod lectus interdum in varius amet.
              </p>
            </div>
          </div>
        </Row>
        <div className="text-center">
        <button className="btn-rounded py-2 mt-5 px-5 py-2" onClick={() => setShowModal(true)}>Get Started</button>
        </div>
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
              <button className="btn-rounded-2 px-5 py-2 mb-4" onClick={() => setShowModal(true)}>Get Started</button>
            </div>
          </Col>
          <Col lg={4} md={12} sm={12} className="p-0">
            <img
              className="w-100 h-100"
              src={ isMobile ? "/assets/images/choose-us.png" : "/assets/images/choose-us-desktop.png"}
              alt=""
            />
          </Col>
        </Row>
        </Container>
      </section>

      <FormModal show={showModal} setShow={setShowModal} />
    </section>
  );
};

export default HowItWorks;
