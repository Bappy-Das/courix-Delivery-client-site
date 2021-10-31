import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://immense-dawn-79364.herokuapp.com/shipping', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Succesfully Inserted")
                    reset();
                }
            })
    }
    return (
        <Container className="banner-row add-service">
            <h1>shipping</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} value={user?.displayName} />
                <input {...register("email")} value={user?.email} />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />

                <input type="submit" />
            </form>
        </Container>
    );
};

export default Shipping;