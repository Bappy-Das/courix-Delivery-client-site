import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bannerImage from '../../../images/Banner imag.PNG';
import './Banner.css'
const Banner = () => {
    return (
        <>
            <Container className="banner-row">
                <Row className=" ">
                    <Col xs={12} md={6} className="p-5">
                        <h5 className="my-4">Courix Courier</h5>
                        <h2 className="my-4">Reliable Delivery <br /> for Your Business.</h2>
                        <h4 className="">Courix Courier guarantees reliable delivery of your product to your customer, at the right location in the right time through its efficient distribution management.</h4>
                        <Button variant="warning" className="fw-bold mt-4">Become a Merchant</Button>
                    </Col>
                    <Col xs={12} md={6}><img className="img-fluid" src={bannerImage} alt="" srcset="" /></Col>
                </Row>
            </Container>
        </>
    );
};

export default Banner;