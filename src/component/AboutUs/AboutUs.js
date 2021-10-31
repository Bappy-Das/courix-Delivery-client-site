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
                        <img className="img-fluid" src={aboutImage} alt="" srcSet="" />
                    </Col>
                    <Col xs={12} md={6} className="p-4">
                        <h1>We always <span className="custom-text-color">work on</span> the conscience.</h1>
                        <p>Each our employee loves what he or she does. That’s why our services are the best for any despatch goal.</p>



                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>General Information</Accordion.Header>
                                <Accordion.Body>
                                    Welcome to our Privacy Policy page! When you use our web site services, you trust us with your information. This Privacy Policy is meant to help you understand what data we collect, why we collect it, and what we do with it. When you share information with us, we can make our services even better for you. For instance, we can show you more relevant search results and ads, help you connect with people or to make sharing with others quicker and easier. As you use our services, we want you to be clear how we’re using information and the ways in which you can protect your privacy. This is important; we hope you will take time to read it carefully. Remember, you can find controls to manage your information and protect your privacy and security. We’ve tried to keep it as simple as possible.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Fast Work</Accordion.Header>
                                <Accordion.Body>
                                    We appreciate your time and provide quick and efficient services for our clients. Our working plan is organized and always innovated with a growth of technologies. Our educated couriers deliver your cargo in the right place at the right time safely.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Management Of Personal Data</Accordion.Header>
                                <Accordion.Body>
                                    You can view or edit your personal data online for many of our services. You can also make choices about our collection and use of your data. How you can access or control your personal data will depend on which services you use. You can choose whether you wish to receive promotional communications from our web site by email, SMS, physical mail, and telephone. If you receive promotional email or SMS messages from us and would like to opt out, you can do so by following the directions in that message. You can also make choices about the receipt of promotional email, telephone calls, and postal mail by visiting and signing into Company Promotional Communications Manager, which allows you to update contact information, manage contact preferences, opt out of email subscriptions, and choose whether to share your contact information with our partners. These choices do not apply to mandatory service communications that are part of certain web site services.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Sharing Your Information</Accordion.Header>
                                <Accordion.Body>
                                    We share your personal data with your consent or as necessary to complete any transaction or provide any service you have requested or authorized. For example, we share your content with third parties when you tell us to do so. When you provide payment data to make a purchase, we will share payment data with banks and other entities that process payment transactions or provide other financial services, and for fraud prevention and credit risk reduction. In addition, we share personal data among our controlled affiliates and subsidiaries. We also share personal data with vendors or agents working on our behalf for the purposes described in this statement. For example, companies we've hired to provide customer service support or assist in protecting and securing our systems and services may need access to personal data in order to provide those functions. In such cases, these companies must abide by our data privacy and security requirements and are not allowed to use personal data they receive from us for any other purpose. We may also disclose personal data as part of a corporate transaction such as a merger or sale of assets.
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