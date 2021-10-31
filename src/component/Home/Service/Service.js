import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import './Service.css'
// import './box.css'



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
                <h1><span className="custom-text-color">Services</span> on which <br /> we specialize</h1>
                <p className="p-4">We offer you with a wide range of services, which will make your delivery process easy and quick. All our services are presented here.</p>
            </Row>


            <Row>
                <div className="container">

                    <div className="row">

                        {
                            service.map(data => <div
                                key={data?._id}
                                className="col-md-4 col-sm-6 service">
                                <div className="card card-block p-3 m-3">
                                    <img src={data.img} alt="card-img" />
                                    <h5 className="card-title  mt-3 mb-3">{data?.name}</h5>
                                    <p className="card-text">{data?.description}</p>
                                    <ul>
                                        <li>Big Cartoon Cost : {data?.big_carton} $</li>
                                        <li>Small Cartoon Cost: {data?.small_carton} $</li>
                                        <li>Over 20 Kg : {data?.avoveKg} $ Per Kg</li>
                                    </ul>
                                    <hr />
                                    <Link to={`./servicedetails/${data._id}`}>
                                        <Button className="fw-bold" variant="warning">Details <FaArrowRight /></Button>
                                    </Link>
                                </div>
                            </div>)
                        }


                    </div>

                </div>

            </Row>


        </Container>
    );
};

export default Service;