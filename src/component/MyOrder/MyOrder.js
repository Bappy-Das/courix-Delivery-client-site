import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrder] = useState([])
    // const [myData, setMyData] = useState([])
    // console.log("orders : ", orders)
    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    const remainig = orders.filter(order => order.email == user?.email)
    console.log(remainig)
    // setMyData(remainig)
    return (
        <Container className="banner-row">
            <h1>This is my Order {user?.email}</h1>
            {
                remainig.map(booked => <div>
                    <p>{booked.service_name}</p>
                </div>)
            }
        </Container>
    );
};

export default MyOrder;