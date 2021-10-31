import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Service.css'



const Service = () => {
    const [service, setService] = useState([]);
    useEffect(() => {
        fetch('https://immense-dawn-79364.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <Container id="service" className="banner-row">
            <Row xs={1} md={2} className="my-5">
                <h1><span className="custom-text-color">Services</span> on which we specialize</h1>
                <p className="p-4">We offer you with a wide range of services, which will make your delivery process easy and quick. All our services are presented here.</p>
            </Row>

            <Row xs={1} md={3} className="g-4">

                {
                    service.map(data => <Col>
                        <Card>
                            <Card.Img variant="top" src={data.img} />
                            <Card.Body>
                                <Card.Title>{data.name}</Card.Title>
                                <Card.Text>
                                    {data.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <Link to={`./servicedetails/${data._id}`}>
                                    <Button className="fw-bold" variant="warning">Details <FaArrowRight /></Button>
                                </Link>
                            </Card.Footer>
                        </Card>
                    </Col>)
                }
            </Row>
            <Row>

                <section class="light">
                    <div class="container py-2">
                        <div class="h1 text-center text-dark" id="pageHeaderTitle">My Cards Light</div>

                        {
                            service.map(data => <article class="postcard light blue">
                                <a class="postcard__img_link" href="#">
                                    <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                                </a>
                                <div class="postcard__text t-dark">
                                    <h1 class="postcard__title blue"><a href="#">Podcast Title</a></h1>
                                    <div class="postcard__subtitle small">
                                        <time datetime="2020-05-25 12:00:00">
                                            <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                        </time>
                                    </div>
                                    <div class="postcard__bar"></div>
                                    <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>

                                    <Link to={`./servicedetails/${data._id}`}>
                                        <Button className="fw-bold" variant="warning">Details <FaArrowRight /></Button>
                                    </Link>
                                </div>
                            </article>)
                        }

                    </div>
                </section>
            </Row>
        </Container>
    );
};

export default Service;