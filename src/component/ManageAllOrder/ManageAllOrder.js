import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './ManageAllOrder.css'

const ManageAllOrder = () => {
    const [orders, setOrder] = useState([])
    const [status, setStatus] = useState(false);

    useEffect(() => {
        fetch('https://immense-dawn-79364.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [status])
    const handleDelete = id => {
        const url = `https://immense-dawn-79364.herokuapp.com/order/${id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("data delete succesfully")
                    const remaining = orders.filter(service => service._id !== id)
                    setOrder(remaining);
                }
            })
    }
    const updateStatus = (id) => {

        axios.put(`http://localhost:5000/updateOrder`, { id })
            .then(res => console.log("Order Approved"))
            .then((data) => setStatus(true))

    };

    return (
        <Container className="banner-row">
            <h1 className="my-5">Manage all Order</h1>
            <Row className="m-3 p-4 order-head text-center">
                <Col xs={4} md={4}>
                    <strong>Service info </strong>
                    <hr className="w-50 mx-auto" />

                </Col>
                <Col xs={4} md={4}>
                    <strong>Product info </strong>
                    <hr className="w-50 mx-auto" />

                </Col>
                <Col xs={4} md={4}>
                    <strong>Order Status </strong>
                    <hr className="w-50 mx-auto" />

                </Col>
            </Row>
            {
                orders.map(order => <Row className="m-3 p-4 order-body">
                    <Col xs={4} md={4}>
                        <p>Service Name: { }</p>
                        <p>Product : {order.service_name} </p>
                    </Col>
                    <Col xs={6} md={6}>
                        <p>Email : {order.email}</p>
                        <p>Order By : {order.user_name}</p>
                        <p>Address : </p>
                        <p>Delevery Date: </p>
                        <p>Phone : </p>
                    </Col>
                    <Col xs={2} md={2} className="d-flex flex-column justify-content-center align-items-center">
                        <p>Status : {order?.status}</p>
                        <Button onClick={() => handleDelete(order._id)} variant="danger">Delete Order</Button>

                        {
                            (order.status === "Approved") ? <Button
                                variant="info">
                                {order?.status}
                            </Button> :
                                <Button
                                    onClick={() => updateStatus(order._id)}
                                    variant="info">
                                    {order?.status}
                                </Button>
                        }
                    </Col>
                </Row>)
            }

        </Container>
    );
};

export default ManageAllOrder;