import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Appointment = () => {
    return (
        <div className="pt-5">
            <h2>Appointment Form</h2>
            <Form>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="your name" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Present Address</Form.Label>
                    <Form.Control placeholder="Present Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Permanent Address</Form.Label>
                    <Form.Control placeholder="Permanent Address" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    <Link to={`/login`}><button className="btn btn-danger btn-sm p-3 m-3" >Submit</button></Link>
                </Button>
            </Form>
        </div>
    );
};

export default Appointment;