import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <>
                <Navbar bg="success" variant="dark" sticky="top" collapseOnSelect expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Rochester Regional Health logo</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end text-white">
                            <Nav.Link as={Link} to="/home"> <Button variant="outline-danger text-white">Home</Button></Nav.Link>
                            <Nav.Link as={Link} to="/services"><Button variant="outline-danger text-white">Services</Button></Nav.Link>
                            <Nav.Link as={Link} to="/ductor"> <Button variant="outline-danger text-white">Ductor</Button></Nav.Link>
                            <Nav.Link as={Link} to="/appointment"> <Button variant="outline-danger text-white">Appointment</Button></Nav.Link>
                            <Nav.Link as={Link} to="/login"> <Button variant="outline-danger text-white">Login</Button></Nav.Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;