import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
const ServiceDetails = () => {
    const [service, setService] = useState({})
    const { id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/shipping', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Succesfully Inserted")
                    reset();
                }
            })
    };


    useEffect(() => {
        fetch(`http://localhost:5000/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <Container className="banner-row">
            <Row>
                <Col xs={12} md={6}>
                    {/* <h2>this is booking: {id}</h2> */}
                    <img className="img-fluid" src={service?.img} alt="" srcset="" />
                    <h2>Service Name : {service?.name}</h2>
                    <p>{service.description}</p>
                    <p>Price : {service?.price}</p>
                    {/* <Link to="/shipping">
                        <Button>Send Parcel <FaArrowRight /></Button>
                    </Link> */}
                </Col>
                <Col xs={12} md={6} className="add-service">
                    <h1 className="text-center">shipping</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <span>Name :</span>
                        <input {...register("user_name")} value={user?.displayName} />
                        <span>Email :</span>
                        <input {...register("email")} value={user?.email} />
                        <span>Service Id :</span>
                        <input {...register("service_Id")} value={id} />
                        {/* <span>Service Name :</span>
                        <input {...register("service-name")} value={service?.name?.toLowerCase()} /> */}
                        <span>Product Type :</span>
                        <input {...register("service_name")} placeholder="Product Type" />
                        <span>Shipping Address :</span>
                        <input {...register("address")} placeholder="Shipping Address" />
                        <span>Product Quantity :</span>
                        <input type="number" {...register("product_quantity")} placeholder="Product Quantity" />

                        <input type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
    );









};

export default ServiceDetails;