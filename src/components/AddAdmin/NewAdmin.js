

import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Button, Form, FormControl, FormGroup, FormLabel, Row, FormSelect } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DashboardNavbar from '../Dashboard-Navbar/DashboardNavbar';

const NewAdmin = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();



    const onSubmit = newNews => {
        console.log('onsubmit data', onSubmit)
        const newsData = {
            date: newNews.date,
            ReporterName: newNews.ReporterName,
            ReporterDesignation: newNews.ReporterDesignation,
            newAdminName: newNews.NewAdminname,
            newAdminEmail: newNews.NewAdminEmail,
            designation: newNews.designation,
            date: new Date()
        }

        const url = `http://localhost:5000/newadmin`;
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
                    <Form className="newsForm shadowSoft" onSubmit={handleSubmit(onSubmit)}>


                        <Row className="mb-3">
                            <strong className="textPrimary">Authority Information</strong>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel className="textSecondary">Date:</FormLabel>
                                <Form.Control placeholder={ `${(new Date()).toString()}`} disabled />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel  className="textSecondary">Author Name:</FormLabel>
                                <FormControl type="text" placeholder="Juned Ahmed" disabled />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel  className="textSecondary">Author Email:</FormLabel>
                                <FormControl placeholder="Juned0941@gmail.com" disabled  />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel  className="textSecondary">Author Designation:</FormLabel>
                                <FormControl  placeholder="Admin" disabled/>
                            </FormGroup>
                        </Row>
                            <strong className='textPrimary'>New user information</strong>
                            
                            <FormGroup className="mb-3" controlId="formGridAddress1">
                                <FormLabel  className="textSecondary">Name:</FormLabel>
                                <FormControl placeholder="news title" {...register('NewAdminname', { required: true })}/>
                                {errors.newsTitle && <span className="error">News Title is required</span>}
                            </FormGroup>

                            <FormGroup className="mb-3" controlId="formGridAddress1">
                                <FormLabel  className="textSecondary">Email:</FormLabel>
                                <FormControl type="email" placeholder="news description" {...register('NewAdminEmail', { required: true })}/>
                                {errors.newsDescription && <span className="error">News Description is required</span>}
                            </FormGroup>
                        
                        <Row className="mb-3">
                            <FormGroup as={Col} controlId="formGridState">

                                <FormLabel  className="textSecondary">Designation:</FormLabel>
                                <FormSelect {...register('designation', { required: true })} >
                                    <option value="user">Choose...</option>
                                    <option value="admin">Admin</option>
                                    <option value="moderator">Moderator</option>
                                    <option value="editor">Editor</option>
                                    <option value="reporter" >Reporter</option>
                                </FormSelect>
                                {errors.category && <span className="error">Designation is required</span>}
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

export default NewAdmin;