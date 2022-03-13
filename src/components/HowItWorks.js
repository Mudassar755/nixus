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
                // className="image-section"
                src={"/assets/images/get-to-know.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">1.Get To Know</h3>
              <p className="primary-text x-small-heading">
              Once you have decided to let NIXUS work on your project while you sit back, 
              it's time you deliver to us all necessary details about your project, your 
              requirements and answer a few questions from us.
              </p>
            </div>
          </Col>
          <Col>
            <div className="p-4 guide-step">
              <img
                // className="image-section"
                src={"/assets/images/prototyping.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">2. Prototyping</h3>
              <p className="primary-text x-small-heading">
              Once you let us know your requirements and project details, before proceeding to the development section, 
              our professionals will create a prototype so you can know how your products will look in future and 
              inform you in advance if there are any changes you want according to the prototype.
              </p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="p-4 guide-step">
              <img
                // className="image-section"
                src={"/assets/images/development.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">3. Development</h3>
              <p className="primary-text x-small-heading">
              After getting your approval on our prototype, we will start the development section of your 
              project to deliver your project in the committed time frame. We have a team of highly 
              trained and experienced professionals in our development department that will develop 
              and train algorithms with immense perfection.
              </p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="p-4 guide-step">
              <img
                // className="image-section"
                src={"/assets/images/testing.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">4. Testing</h3>
              <p className="primary-text x-small-heading">
              Once your product is ready, we pass our products from a testing phase before delivering it to you. 
              We will run and test the algorithms for any malfunctions and bugs and that can become a hurdle 
              in the premium user experience and if found any, our professionals will immediately improve the changes.
              </p>
            </div>
          </Col>
          <Col>
            {" "}
            <div className="p-4 guide-step">
              <img
                // className="image-section"
                src={"/assets/images/deployment.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">5. Deployment</h3>
              <p className="primary-text x-small-heading">
              Having passed the testing phase and finished with the development step, your project is now ready 
              to be delivered to you. We will deploy our developed AI algorithm where it should be serving its 
              purpose and you enjoy the next-level quality AI services from NIXUS.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="mobile-row">
          <div className='d-flex mob-fields'>
            <div className="p-4 guide-step">
              <img
                className=""
                src={"/assets/images/get-to-know.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">1.Get To Know</h3>
              <p className="primary-text x-small-heading">
              Once you have decided to let NIXUS work on your project while you sit back, 
              it's time you deliver to us all necessary details about your project, your 
              requirements and answer a few questions from us.
              </p>
            </div>
            <div className="p-4 guide-step">
              <img
                // className="image-section"
                src={"/assets/images/prototyping.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">2. Prototyping</h3>
              <p className="primary-text x-small-heading">
              Once you let us know your requirements and project details, before proceeding to the development section, 
              our professionals will create a prototype so you can know how your products will look in future and 
              inform you in advance if there are any changes you want according to the prototype.
              </p>
            </div>
            <div className="p-4 guide-step">
              <img
                // className="image-section"
                src={"/assets/images/deployment.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">3. Development</h3>
              <p className="primary-text x-small-heading">
              After getting your approval on our prototype, we will start the development section of your 
              project to deliver your project in the committed time frame. We have a team of highly 
              trained and experienced professionals in our development department that will develop 
              and train algorithms with immense perfection.
              </p>
            </div>
            <div className="p-4 guide-step">
              <img
                // className="image-section"
                src={"/assets/images/testing.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">4. Testing</h3>
              <p className="primary-text x-small-heading">
              Once your product is ready, we pass our products from a testing phase before delivering it to you. 
              We will run and test the algorithms for any malfunctions and bugs and that can become a hurdle 
              in the premium user experience and if found any, our professionals will immediately improve the changes.
              </p>
            </div>
            <div className="p-4 guide-step">
              <img
                // className="image-section"
                src={"/assets/images/deployment.png"}
                alt="object-detection"
              />
              <h3 className="small-heading gradient-text">5. Deployment</h3>
              <p className="primary-text x-small-heading">
              Having passed the testing phase and finished with the development step, your project is now ready 
              to be delivered to you. We will deploy our developed AI algorithm where it should be serving its 
              purpose and you enjoy the next-level quality AI services from NIXUS.
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
              Nixus.ai offers AI-based solutions that help businesses increase productivity and efficiency. 
              Our solutions are designed to help businesses automate tasks and processes, making it easier 
              for them to get things done. We understand the importance of efficiency and productivity and 
              believe that our solutions can help businesses achieve their goals.
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
