import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';

const ManageAllOrder = () => {
    const [orders, setOrder] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/order/${id}`
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
    return (
        <Container className="banner-row">
            <h1>Manage all Order</h1>
            {
                orders.map(order => <div className="d-flex my-4">
                    <h3>{order.service_name}</h3>
                    {/* <button onClick={() => handleDelete(service._id)}>Delete Service</button> */}
                    <Button onClick={() => handleDelete(order._id)} variant="danger">Delete</Button>
                </div>)
            }
        </Container>
    );
};

export default ManageAllOrder;