import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
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
        <div>
            <Row xs={1} md={3} className="g-4 m-5">
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
        </div>
    );
};

export default Service;