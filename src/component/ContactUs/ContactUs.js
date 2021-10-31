import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { MdLocationOn, MdOutlineMail, MdLocalPhone } from "react-icons/md";

const ContactUs = () => {
    return (
        <>
            <Container className="banner-row">

                <Row className="my-5">
                    <div className="col-md-8 p-5">
                        <h2 className="mb-5 custom-text-color">Leave Us Message</h2>
                        <hr />
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control className="p-3" type="text" placeholder="First Name" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control className="p-3" type="text" placeholder="Last Name" />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control className="p-3" type="email" placeholder="Email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control className="p-3" type="text" placeholder="Phone" />
                                </Form.Group>
                            </Row>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control className="p-3" placeholder="1234 Main St" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Massage</Form.Label>
                                <Form.Control className="p-4" as="textarea" rows={3} />
                            </Form.Group>

                            <Button variant="warning" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                    <div className="col-md-4 mt-5">
                        <h3 className="custom-text-color mb-5">Address</h3>
                        <hr className="w-50 " />
                        <h5 className="lh-lg"><MdLocationOn /> Courix Delivery (pvt) Ltd.</h5>
                        <h5 className="lh-lg"><MdOutlineMail /> example@example.com</h5>
                        <h5 className="lh-lg"><MdLocalPhone /> (+123) 88 44400</h5>
                    </div>
                </Row>


            </Container>
        </>
    );
};

export default ContactUs;