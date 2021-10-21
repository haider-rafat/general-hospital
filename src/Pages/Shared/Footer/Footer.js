import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-dark text-white p-3 mt-3">
            <h3>Enhancing Lives. Preserving Health.</h3>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="2">
                        <h4>Your Care</h4>
                        <ul>Find a Provider</ul>
                        <ul>Locations</ul>
                        <ul>Our Services</ul>
                        <ul>Patients & Visitors</ul>
                    </Col>
                    <Col>
                        <h4>Company</h4>
                        <ul>About Us</ul>
                        <ul>Diversity and Inclusion</ul>
                        <ul>Volunteer</ul>
                        <ul>Sustainability</ul>
                    </Col>
                    <Col xs lg="2">
                        <h4>Resources</h4>
                        <ul>Make a Gift</ul>
                        <ul>Sponsorships</ul>
                        <ul>MyCare</ul>
                        <ul>Medical Education & Research</ul>
                    </Col>
                </Row>
            </Container>
            <p>© 2021 Rochester Regional Health by Md. Saiful Islam</p>
        </div>
    );
};

export default Footer;