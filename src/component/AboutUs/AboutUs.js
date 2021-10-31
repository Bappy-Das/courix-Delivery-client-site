import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import aboutImage from '../../images/mt-2006-about-img.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <Container className="banner-row">
                <Row className="about">
                    <Col xs={12} md={6} className="p-4">
                        <img className="img-fluid" src={aboutImage} alt="" srcset="" />
                    </Col>
                    <Col xs={12} md={6} className="p-4">
                        <h1>We always <span className="custom-text-color">work on</span> the conscience.</h1>
                        <p>Each our employee loves what he or she does. That’s why our services are the best for any despatch goal.</p>



                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>We Are Reliable</Accordion.Header>
                                <Accordion.Body>
                                    We appreciate your time and provide quick and efficient services for our clients. Our working plan is organized and always innovated with a growth of technologies. Our educated couriers deliver your cargo in the right place at the right time safely.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Fast Work</Accordion.Header>
                                <Accordion.Body>
                                    We appreciate your time and provide quick and efficient services for our clients. Our working plan is organized and always innovated with a growth of technologies. Our educated couriers deliver your cargo in the right place at the right time safely.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>We Guarantee The Quality Of Transportation</Accordion.Header>
                                <Accordion.Body>
                                    We appreciate your time and provide quick and efficient services for our clients. Our working plan is organized and always innovated with a growth of technologies. Our educated couriers deliver your cargo in the right place at the right time safely.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>













                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default AboutUs;