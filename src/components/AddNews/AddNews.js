import React from 'react';
import { Col, Container, Button, Form, FormControl, FormGroup, FormLabel, Row, FormSelect } from 'react-bootstrap';
import DashboardNavbar from '../Dashboard-Navbar/DashboardNavbar';
import './AddNews.css'
const DashboardRightSIde = () => {
    return (
        <>
            <DashboardNavbar></DashboardNavbar>
            <div className="add_news_container">
                <Container>
                    <Form className="add_news_form">
                        <Row className="mb-3">
                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Date:</FormLabel>
                                <FormControl type="text" placeholder="news date" />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Author Name:</FormLabel>
                                <FormControl type="text" placeholder="news description" />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>Author Email:</FormLabel>
                                <FormControl type="text" placeholder="news description" />
                            </FormGroup>
                        </Row>
                            
                            <FormGroup className="mb-3" controlId="formGridAddress1">
                            <FormLabel>News Title:</FormLabel>
                            <FormControl placeholder="news title" />
                            </FormGroup>

                            <FormGroup className="mb-3" controlId="formGridAddress1">
                            <FormLabel>News Description:</FormLabel>
                            <FormControl placeholder="news description" />
                            </FormGroup>

                            <FormGroup className="mb-3" controlId="formGridAddress1">
                            <FormLabel>Featured Image:</FormLabel>
                            <FormControl placeholder="1234 Main St" />
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
                                <option>All</option>
                                <option>Food</option>
                                <option>Life Style</option>
                                <option>Racing</option>
                                <option>Sports</option>
                                <option>Technology</option>
                                <option>Travel</option>
                                <option>World</option>
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