import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const TreasureHunter = () => {
    return (
        <section>
            <Container>
                <div>
                    <span className='heading-icon'><img src="/assets/icons/Icosahedron.png" /></span>
                    <h2 className='sub-heading'>Treasure Hunter</h2>
                </div>
                <Row>
                    <Col>
                       <div className='bg-dark-grey p-4'>
                           <h3 className='small-heading gradient-text'>01. Object detection</h3>
                           <p className='primary-text'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                           </p>
                           <img src={'/assets/images/object-detection.png'} alt="object-detection" />
                       </div>
                    </Col>
                    <Col>
                    <div className='bg-dark-grey p-4'>
                           <h3 className='small-heading gradient-text'>02. Localization</h3>
                           <p className='primary-text'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                           </p>
                           <img src={'/assets/images/localization.png'} alt="localization" />
                       </div>
                    </Col>
                    <Col>
                    <div className='bg-dark-grey p-4'>
                           <h3 className='small-heading gradient-text'>03. Instance Segmentation</h3>
                           <p className='primary-text'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod lectus interdum in varius amet.
                           </p>
                           <img src={'/assets/images/instance-segment.png'} alt="instance-segment" />
                       </div>
                    </Col>
                    <Col lg={12} md={12} sm={12} className='mt-4'>
                    <div className='bg-dark-grey p-4'>
                           <h3 className='small-heading gradient-text'>04. Instance Segmentation</h3>
                           <p className='primary-text'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra euismod <br />lectus interdum in varius amet.
                           </p>
                           <div className='img-classification'>
                               <div className='img-box me-5'>
                                   <img src={'/assets/images/dog.png'} />
                                   <span>Dog</span>
                               </div>
                               <div className='img-box ms-5'>
                                   <img src={'/assets/images/dog.png'} />
                                   <span>Dog</span>
                               </div>
                           </div>
                       </div>
                    </Col>
                </Row>
               
            </Container>
        </section>
    )
}

export default TreasureHunter