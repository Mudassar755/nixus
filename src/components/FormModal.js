import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'

const FormModal = ({ show, setShow }) => {
    // const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        website: "",
        service: "",
        message: "",
    });

    const resetForm = () => {
        setFormData({
            name: "",
            email: "",
            phone: "",
            website: "",
            service: "",
            message: "",

        });
    };
    const { name, email, phone, website, service, message } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = e => {
        e.preventDefault();

        console.log("formData", formData)
        resetForm()
    };
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
                        <span>
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="BtnGradient">
                                        <stop offset="10%" stop-color="#6415ff" />
                                        <stop offset="90%" stop-color="#f6808a" />
                                    </linearGradient>
                                </defs>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.725393 0.067848C0.61529 0.106711 0.447707 0.221838 0.33021 0.339287C-0.0163063 0.685786 -0.0973893 1.19302 0.123031 1.635C0.187648 1.76453 1.60153 3.20788 4.80044 6.4099L9.38524 10.9992L4.80027 15.5883C1.59607 18.7953 0.187476 20.2332 0.122902 20.363C-0.352418 21.3175 0.637431 22.335 1.61223 21.894C1.7235 21.8436 3.26205 20.3363 6.38719 17.2158L10.998 12.6118L15.5875 17.1964C18.8271 20.4325 20.2323 21.8086 20.3652 21.8749C20.7768 22.0803 21.2613 22.0197 21.6127 21.7189C21.9596 21.422 22.0864 20.948 21.9403 20.495C21.8688 20.2736 21.6597 20.0572 17.2384 15.6312L12.6113 10.999L17.2384 6.36682C21.6597 1.94075 21.8688 1.72434 21.9403 1.50302C22.0864 1.04995 21.9596 0.575989 21.6127 0.279058C21.2613 -0.0217001 20.7768 -0.082273 20.3652 0.12309C20.2323 0.189381 18.8271 1.5654 15.5876 4.80147L10.9982 9.38592L6.36578 4.75947C2.11674 0.515889 1.71584 0.12726 1.52152 0.063291C1.26047 -0.0226459 0.977025 -0.0210123 0.725393 0.067848Z" fill="url(#BtnGradient)" />
                            </svg>
                        </span>
                        {/* <img src={'/assets/icons/close-icon.png'} alt="close-icon" /> */}
                    </button>
                    <h1 className='medium-heading mb-5 gradient-text'>Need A Service And Got No Clue Where To Start? Let's Discuss </h1>

                    <Form onSubmit={handleSubmit}>
                        <Form.Control
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className='input-field'
                        />
                        <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className='input-field' />
                        <Form.Control
                            type="text"
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            placeholder="Your Phone"
                            className='input-field' />
                        <Form.Control
                            type="text"
                            name="website"
                            value={website}
                            onChange={handleChange}
                            placeholder="Your website"
                            className='input-field' />
                        <Form.Select
                            name="service"
                            value={service}
                            onChange={handleChange}
                            aria-label="Default select example"
                            className='input-field select-filed'>
                            <option className='selection-val'>--Choose a Service--</option>
                            <option className='selection-val' value="1">One</option>
                            <option className='selection-val' value="2">Two</option>
                            <option className='selection-val' value="3">Three</option>
                        </Form.Select>
                        <Form.Control
                            as="textarea"
                            rows={3} placeholder='Message'
                            name="message"
                            value={message}
                            onChange={handleChange}
                            className='input-field' />

                        <Button className='submit-btn' type='submit'>Send Message</Button>
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