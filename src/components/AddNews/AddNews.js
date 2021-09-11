import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Button, Form, FormControl, FormGroup, FormLabel, Row, FormSelect } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import DashboardNavbar from '../Dashboard-Navbar/DashboardNavbar';

const DashboardRightSIde = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [ImageUrl, setImageUrl] = useState(null);

    const onSubmit = newNews => {
        console.log('onsubmit data', onSubmit)
        const newsData = {
            date: newNews.date,
            ReporterName: newNews.ReporterName,
            ReporterDesignation: newNews.ReporterDesignation,
            newsTitle: newNews.newsTitle,
            newsDescription: newNews.newsDescription,
            category: newNews.category,
            newsTag: newNews.newsTag,
            imageURL: ImageUrl
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


    const handleImageUpload = img => {
        const imageData = new FormData();
        imageData.set('key', '994392279289c0649211748cc7b4c09d');
        imageData.append('image', img.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
        .then(function (res) {
            setImageUrl(res.data.data.display_url);
            alert("image adde imgbb", res);
        })
        .catch(function (err) {
            alert("imgbb error", err);
        });

    }





    return (
        <>
            <DashboardNavbar></DashboardNavbar>
            <div className='formContainer'> 
                <Container>
                    <Form className="newsForm shadowSoft" onSubmit={handleSubmit(onSubmit)}>


                        <Row className="mb-3">
                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Date:</FormLabel>
                                <Form.Control placeholder={ `${(new Date()).toString()}`} disabled />
                            </FormGroup>
                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Reporter Name:</FormLabel>
                                <FormControl type="text" placeholder="Juned Ahmed" disabled />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Reporter Email:</FormLabel>
                                <FormControl placeholder="Juned0941@gmail.com" disabled  />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Reporter Designation:</FormLabel>
                                <FormControl  placeholder="Admin" disabled/>
                            </FormGroup>
                        </Row>
                            
                            <FormGroup className="mb-3" controlId="formGridAddress1">
                                <FormLabel>News Title:</FormLabel>
                                <FormControl placeholder="news title" {...register('newsTitle', { required: true })}/>
                                {errors.newsTitle && <span className="error">News Title is required</span>}
                            </FormGroup>

                            <FormGroup className="mb-3" controlId="formGridAddress1">
                                <FormLabel>News Description:</FormLabel>
                                <FormControl as="textarea" cols={30} rows={10} placeholder="news description" {...register('newsDescription', { required: true })}/>
                                {errors.newsDescription && <span className="error">News Description is required</span>}
                            </FormGroup>

                            <FormGroup className="mb-3" controlId="formGridAddress1">
                                <FormLabel>Featured Image:</FormLabel>
                                <FormControl type="file" onChange={handleImageUpload} {...register('image', { required: true })} />
                                {errors.image && <span className="error">Image is required</span>}
                            </FormGroup>
                        
                        <Row className="mb-3">
                            <FormGroup as={Col} controlId="formGridState">

                                <FormLabel>Category</FormLabel>
                                <FormSelect {...register('category', { required: true })} >
                                    <option value="all">Choose...</option>
                                    <option value="all">All</option>
                                    <option value="food">Food</option>
                                    <option value="lifeStyle">Life Style</option>
                                    <option value="racing" >Racing</option>
                                    <option value="sports">Sports</option>
                                    <option value="technology">Technology</option>
                                    <option value="travel">Travel</option>
                                    <option value="world">World</option>
                                </FormSelect>
                                {errors.category && <span className="error">Image is required</span>}
                            </FormGroup>
                        

                            <FormGroup as={Col} controlId="formGridZip">
                                <FormLabel>News Tags:</FormLabel>
                                <FormControl placeholder="#headlines    #todaysnews     #newsreporter " {...register('newsTag', { required: true })}/>
                                {errors.newsTag && <span className="error">News Title is required</span>}
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

export default DashboardRightSIde;