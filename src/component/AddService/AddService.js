import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddService.css'
const AddSeervice = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="Image Url" />

                <input type="submit" />
            </form>
        </Container>
    );
};

export default AddSeervice;