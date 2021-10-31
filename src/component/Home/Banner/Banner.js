import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import bannerImage from '../../../images/mt-2006-home-bg-2.jpg';
import './Banner.css'
const Banner = () => {
    return (
        <>
            <Container className="banner-row">
                <Row className=" ">
                    <Col xs={12} md={6} className="p-5">
                        <h3 className="my-4 main-color fw-bold">Courix Courier</h3>
                        <h1 className="my-4 fw-bold"> <span className="custom-text-color">Reliable Delivery</span> for Your Business.</h1>
                        <h5 className="banner-text">Courix Courier guarantees reliable delivery of your product to your customer, at the right location in the right time through its efficient distribution management.</h5>
                        <Button variant="warning" className="fw-bold mt-4">Become a Merchant</Button>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="banner-img">
                            <img className="img-fluid" src={bannerImage} alt="" srcSet="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Banner;