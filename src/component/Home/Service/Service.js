import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <Container className="my-5">
            <Row xs={1} md={2} className="my-5">
                <h1><span className="custom-text-color">Services</span> on which we specialize</h1>
                <p>We offer you with a wide range of services, which will make your delivery process easy and quick. All our services are presented here.</p>
            </Row>
            <Row xs={1} md={3} className="g-4">

                {
                    service.map(data => <Col>
                        <Card>
                            <Card.Img variant="top" src={data.img} />
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text>
                                    {data.details}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`./servicedetails/${data.id}`}>
                                    <Button>Details <FaArrowRight /></Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>)
                }
            </Row>
        </Container>
    );
};

export default Service;