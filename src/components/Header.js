import React from 'react'
import { Navbar, Nav, Container, } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className='app-bar'>
            <Container>
                <Navbar.Brand href="#home"><img src="/assets/icons/header-logo.svg" alt="header logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='ms-auto align-items-center'>
                        <Link
                            activeClass="active"
                            to={'ai-fields'}
                            href={'ai-fields'}
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
                            href={'how-it-works'}
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
                            href={'why-choose-us'}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            className="nav-link"
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
                            className="nav-link"
                        // key={i}
                        >
                           News
                        </Link>
                       
                        <Nav.Link href="#"><button className='btn-rounded header-btn'>Get Started</button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;