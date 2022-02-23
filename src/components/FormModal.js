import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const FormModal = ({ show, setShow }) => {
    // const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    return (
        <>
            <Modal
                show={show}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={handleClose}
                className='form-modal'
                >

                {/* <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header> */}
                <Modal.Body>

                <button className='modal-close-btn' onClick={handleClose}>
                    <img src={'/assets/icons/close-icon.png'} alt="close-icon" />
                </button>
                    <h1 className='medium-heading mb-5 gradient-text'>Need A Service And Got No Clue Where To Start? Let's Discuss </h1>

                    <Form>
                        <Form.Control type="text" placeholder="Your Name" className='input-field' />
                        <Form.Control type="email" placeholder="Your Email" className='input-field' />
                        <Form.Control type="text" placeholder="Your Phone" className='input-field' />
                        <Form.Control type="text" placeholder="Your website" className='input-field' />
                        <Form.Select aria-label="Default select example" className='input-field select-filed'>
                            <option className='selection-val'>--Choose a Service--</option>
                            <option className='selection-val' value="1">One</option>
                            <option className='selection-val' value="2">Two</option>
                            <option className='selection-val' value="3">Three</option>
                        </Form.Select>
                        <Form.Control as="textarea" rows={3} placeholder='Message' className='input-field' />

                        <Button className='submit-btn'>Send Message</Button>
                    </Form>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default FormModal