import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Button, Form, FormControl, FormGroup, FormLabel, Row, FormSelect } from 'react-bootstrap';
import DashboardNavbar from '../Dashboard-Navbar/DashboardNavbar';
import './AddNews.css'

const DashboardRightSIde = () => {

    const [ImageUrl, setImageUrl] = useState(null);

    const handleSubmit = data => {
        const addNews = {
            name: data.author,
            email: data.email,
            newsTitle: data.newsTitle,
            newsDescription: data.newsDescription,
            imageUrl: ImageUrl,
            food: data.food,
            all: data.all,
            lifeStyle: data.lifeStyle,
            racing: data.racing,
            sports: data.sports,
            technology: data.technology,
            travel: data.travel,
            world: data.world,
            date: new Date()
        };

        const url = `http://localhost:5000/addNews`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNews)
        })
        .then(res => console.log('server side responded', res))
    };


    const handleImageUplode = img => {
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
            <div className="add_news_container">
                <Container>
                    <Form className="add_news_form" onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Date:</FormLabel>
                                <FormControl type="text" placeholder="news date" />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Author Name:</FormLabel>
                                <FormControl name="author" type="text" placeholder="news description" />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Author Email:</FormLabel>
                                <FormControl name='email' type="text" placeholder="news description" />
                            </FormGroup>
                        </Row>
                            
                            <FormGroup className="mb-3" controlId="formGridAddress1">
                            <FormLabel>News Title:</FormLabel>
                            <FormControl name="newsTitle" placeholder="news title" />
                            </FormGroup>

                            <FormGroup className="mb-3" controlId="formGridAddress1">
                            <FormLabel>News Description:</FormLabel>
                            <FormControl name="newsDescription" placeholder="news description" />
                            </FormGroup>

                            <FormGroup className="mb-3" controlId="formGridAddress1">
                            <FormLabel>Featured Image:</FormLabel>
                            <FormControl type="file" onChange={handleImageUplode} />
                            </FormGroup>
                        
                        <Row className="mb-3">
                            <FormGroup as={Col} controlId="formGridCity">
                                <FormLabel>Category:</FormLabel>
                                <FormControl />
                            </FormGroup>
                        
                            <FormGroup as={Col} controlId="formGridState">
                                <FormLabel>Category</FormLabel>
                                <FormSelect defaultValue="Choose...">
                                <option>Choose...</option>
                                <option name="all">All</option>
                                <option name="food">Food</option>
                                <option name="lifeStyle">Life Style</option>
                                <option name="racing">Racing</option>
                                <option name="sports">Sports</option>
                                <option name="technology">Technology</option>
                                <option name="travel">Travel</option>
                                <option name="world">World</option>
                                </FormSelect>
                            </FormGroup>
                        
                            <FormGroup as={Col} controlId="formGridZip">
                                <FormLabel>News Tags:</FormLabel>
                                <FormControl />
                            </FormGroup>
                        </Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Container>
            </div>
         </>
    );
};

export default DashboardRightSIde;