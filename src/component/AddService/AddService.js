import axios from 'axios';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddSeervice = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('https://immense-dawn-79364.herokuapp.com/addservice', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Succesfully Inserted")
                    reset();
                }
            })
    }

    return (
        <Container className="banner-row add-service">
            <Row>
                <Col className="d-flex justify-content-center align-items-center">
                    <h1 className="fw-bold h1-font">Add a New Service</h1>
                </Col>
                <Col>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <span>Service Name : </span>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        <span>Service Description : </span>
                        <textarea {...register("description")} placeholder="Description" />

                        <span>Big Carton Price : </span>
                        <input type="number" {...register("big_carton")} placeholder="Big Carton Kg " />
                        <span>Small Carton Price : </span>
                        <input type="number" {...register("small_carton")} placeholder="Small Carton Kg Price" />

                        <span>Over 20 Kg : </span>
                        <input type="number" {...register("avoveKg")} placeholder="Over 20 Kg" />

                        <span>Service Image Url : </span>
                        <input {...register("img")} placeholder="Image Url" />

                        <input type="submit" />
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddSeervice;