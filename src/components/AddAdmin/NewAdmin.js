import React, { useState } from 'react';
import { Col, Container, Button, Form, FormControl, FormGroup, FormLabel, Row, FormSelect } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DashboardNavbar from '../Dashboard-Navbar/DashboardNavbar';

const NewsAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = newNews => {
        console.log('onsubmit data', onSubmit)
        // const addNews = {
        //     name: data.name,
        //     email: data.email,
        //     price: data.price,
        //     facilities1: data.facilities1,
        //     facilities2: data.facilities2,
        //     facilities3: data.facilities3,
        //     imageURL: ImageUrl
        //     newsTitle: data.newsTitle,
        //     newsDescription: data.newsDescription,
        //     imageUrl: ImageUrl,
        //     food: data.food,
        //     all: data.all,
        //     lifeStyle: data.lifeStyle,
        //     racing: data.racing,
        //     sports: data.sports,
        //     technology: data.technology,
        //     travel: data.travel,
        //     world: data.world,
        //     date: new Date()
        // };

        const newsData = {
            title: newNews.title,
            email: newNews.email,
            price: newNews.price
        }

        const url = `http://localhost:5000/newsadd`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newsData)
        })
        // .then(res => alert('server side responded', res))
        .then(res => res.json())
        .then(success => {
            alert('server side responded', success)
            // if(success){
            //     alert('server side responded')
            // }
        })
    };



    return (
        <>
            <DashboardNavbar></DashboardNavbar>
            <div className='formContainer'>
                <Container>
                    <Form className="newsForm shadowHard" onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <strong className="textPrimary">Authority Information</strong>
                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Date:</FormLabel>
                                <Form.Control placeholder={ `${(new Date()).toString()}`} disabled {...register('date', { required: true })}/>
                            </FormGroup>
                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Author Name:</FormLabel>
                                <FormControl type="text" placeholder="Juned Ahmed" disabled {...register('author', { required: true })}/>
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Author Email:</FormLabel>
                                <FormControl placeholder="Juned0941@gmail.com" disabled {...register('authorEmail', { required: true })} />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Author Designation:</FormLabel>
                                <FormControl  placeholder="Admin" disabled {...register('authorDesignation', { required: true })}/>
                            </FormGroup>
                        </Row>

                        <strong className='textPrimary'>New user information</strong>
                            
                            <FormGroup className="mb-3" controlId="formGridAddress1">
                                <FormLabel>Name</FormLabel>
                                <FormControl placeholder="Name" {...register('name', { required: true })}/>
                                {errors.name && <span className="error">News Title is required</span>}
                            </FormGroup>

                            <FormGroup className="mb-3" controlId="formGridAddress1">
                                <FormLabel>Email</FormLabel>
                                <FormControl placeholder="Email" {...register('email', { required: true })}/>
                                {errors.email && <span className="error">News Description is required</span>}
                            </FormGroup>
                        
                        <Row className="mb-3">
                            <FormGroup as={Col} controlId="formGridState">
                                <FormLabel>Designation</FormLabel>
                                <FormSelect {...register('category', { required: true })} >
                                    <option>Choose...</option>
                                    <option value="admin">Admin</option>
                                    <option value="moderator">Moderator</option>
                                    <option value="editor">Editor</option>
                                    <option value="reporter" >Reporter</option>
                                </FormSelect>
                                {errors.category && <span className="error">Image is required</span>}
                            </FormGroup>
                        </Row>

                        <Button className="btnPrimary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
         </>
    );
};

export default NewsAdmin;