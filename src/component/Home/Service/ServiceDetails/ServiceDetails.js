import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const [service, setService] = useState({})
    const { id } = useParams();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        data.status = "pending";
        data.booked_service = service
        axios.post('https://immense-dawn-79364.herokuapp.com/shipping', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Succesfully Inserted")
                    reset();
                }
            })
    };


    useEffect(() => {
        fetch(`https://immense-dawn-79364.herokuapp.com/services/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    return (
        <Container className="ship-service">
            <h1 className="text-center fw-bold custom-text-color">Shipment Information</h1>
            <hr className="w-50 mx-auto" />
            <Row>
                <Col xs={12} md={6} className="p-5 mt-4">

                    <Card>
                        <Card.Img className="img-fluid" variant="top" src={service.img} />
                        <Card.Body>
                            <Card.Title>{service.name}</Card.Title>
                            <Card.Text>
                                <p>{service.description}</p>
                                <ul>
                                    <li>Big Cartoon Cost : {service?.big_carton} $</li>
                                    <li>Small Cartoon Cost: {service?.small_carton} $</li>
                                    <li>Over 20 Kg : {service?.avoveKg} $ Per Kg</li>
                                </ul>


                            </Card.Text>
                        </Card.Body>
                    </Card>


                </Col>
                <Col xs={12} md={6} className="add-service">
                    <h1 className="text-center custom-text-color">Booking From</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <span>Name :</span>
                        <input {...register("user_name")} value={user?.displayName} />
                        <span>Email :</span>
                        <input {...register("email")} value={user?.email} />
                        {/* <span>Product Sent Via :</span> */}
                        {/* <input {...register("service_name")} value={service?.name?.toLowerCase()} /> */}
                        <input
                            {...register("date", { required: true })}
                            placeholder="date"
                            defaultValue={new Date()}
                            className="p-2 m-2"
                        />
                        <span>Product Type :</span>
                        <select {...register("product_Type")}>
                            <option value="Documentation">Documentation</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Goods">Goods</option>
                        </select>
                        <span>Shipping Method :</span>
                        <select {...register("payment_option")}>
                            <option value="cash_on_delevery">Cash On Delivery</option>
                            <option value="cas">Pre Peyment</option>
                        </select>
                        <span>Shipping Address :</span>
                        <input {...register("address", { required: true })} placeholder="Shipping Address" />
                        <span>Phone Number :</span>
                        <input type="number" {...register("phone", { required: true })} placeholder="Phone Number" />
                        <span>Product Quantity :</span>
                        <input type="number" {...register("product_quantity", { required: true })} placeholder="Product Quantity" />

                        {/* <button className="my-5 btn-cls" type="submit" /> */}
                        <button type="submit" className="my-5 btn-cls fw-bold">Book Order</button>
                    </form>
                </Col>
            </Row>
        </Container>
    );









};

export default ServiceDetails;