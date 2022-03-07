import React, { useState } from 'react'
import { Navbar, Nav, Container, } from 'react-bootstrap';
import { Link } from 'react-scroll';
import {NavLink as ReactLink} from 'react-router-dom'
import FormModal from './FormModal';

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <Navbar collapseOnSelect expand="lg" variant="dark" className='app-bar'>
            <Container>
                <Navbar.Brand href="/"><img src="/assets/icons/header-logo.svg" alt="header logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='ms-auto align-items-center'>
                        <Link
                            activeClass="active"
                            to={'ai-fields'}
                            href={''}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-link"
                        // key={i}
                        >
                            Our Fields of AI
                        </Link>
                        <Link
                            activeClass="active"
                            to={'how-it-works'}
                            href={''}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-link"
                        // key={i}
                        >
                            How It Works
                        </Link>
                        <Link
                            activeClass="active"
                            to={'why-choose-us'}
                            href={''}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-link"
                        // key={i}
                        >
                            Why Choose Us
                        </Link>
                        {/* <Link
                            activeClass="active"
                            to={'news'}
                            href={''}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-link"
                        >
                           News
                        </Link> */}
                        <ReactLink
                            to={'/blogs'}
                            className="nav-link"
                        >
                           Blogs
                        </ReactLink>
                        <ReactLink
                            to={'/usecases'}
                            className="nav-link"
                        >
                           Use Cases
                        </ReactLink>
                       
                        <button className='btn-rounded header-btn ms-3' onClick={() => setShowModal(true)}>Get Started</button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <FormModal show={showModal} setShow={setShowModal} />
        </>
    )
}

export default Header;