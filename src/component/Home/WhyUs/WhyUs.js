import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './WhyUs.css'
const WhyUs = () => {
    return (
        <>
            <Container className="why-us">
                <Row className="my-5 ">
                    <Col xs={12} md={4}>
                        <h1 className="why-head fw-bold mb-5">We work quickly and <span className="custom-text-color">efficiently!</span> </h1>
                        <p>We provide local and international delivery services. Machiter is number one company implementing logistics services. With our rich experience we have unique skills and professional staff.</p>
                        <p>Working closely with our clients to customize their exact needs has always been very rewarding for us.</p>
                        <Button className="fw-bold" variant="warning">Know More About us</Button>
                    </Col>
                    <Col xs={12} md={8} className="">
                        <Row xs={1} md={2} className="g-4 mt-2">

                            <Col >
                                <Card border="warning">

                                    <Card.Body className="card-body-height">
                                        <Card.Title>Cost savings</Card.Title>
                                        <Card.Text>
                                            Save your money with our logistics service taking advantage of quickly delivery.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card border="warning">

                                    <Card.Body className="card-body-height">
                                        <Card.Title>Secure services</Card.Title>
                                        <Card.Text>
                                            We provide security of your delivery. You can use our online tracking system to check where your cargo is.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card border="warning">

                                    <Card.Body className="card-body-height">
                                        <Card.Title>Cargo express</Card.Title>
                                        <Card.Text>
                                            Our educated couriers deliver your cargo in the right place at the right time safely..
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <Card border="warning">

                                    <Card.Body className="card-body-height">
                                        <Card.Title>Proven Experience</Card.Title>
                                        <Card.Text>
                                            Thousands of happy clients, hundreds of permanent customers are the result of our work.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>



            </Container>
        </>
    );
};

export default WhyUs;