import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
// import './AddNewService.css';

const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://creepy-warlock-17654.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Data Inserted SuccessFully');
                    reset();
                }
            })
    };

    return (
        <div>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="d-flex flex-column w-50 mx-auto my-5">
                        <input type="text" {...register("country")} placeholder="country" />
                        <input type="text" {...register("packagename")} placeholder="packagename" />
                        <input type="number" {...register("price")} placeholder="price" />
                        <input type="number" {...register("duration")} placeholder="duration" />
                        <input type="text" {...register("description")} placeholder="description" />
                        <input type="text" {...register("img")} placeholder="img url" />


                        <input className="input-btn bg-warning" type="submit" value="Add Service" />

                    </div>
                </form>
            </Container>
        </div>
    );
};

export default AddNewService;