import React from 'react';
import { Col, Container, Button, Form, FormControl, FormGroup, FormLabel, Row, FormSelect } from 'react-bootstrap';
import DashboardNavbar from '../Dashboard-Navbar/DashboardNavbar';
import './NewAdmin.css';
const DashboardRightSIde = () => {
    return (
        <>
            <DashboardNavbar></DashboardNavbar>
            <div className="new_admin_Container">
                <Container>
                    <Form className="new_admin_form">
                        <Row className="mb-3">
                            <h4> Who added admin? </h4>
                            <hr></hr>
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
                        <Row className="mb-3">
                            <h4> New admin information: </h4>
                            <hr></hr>
                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>New Admin Email:</FormLabel>
                                <FormControl type="email" placeholder="New Admin Email" />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>ANew Admin Name:</FormLabel>
                                <FormControl type="text" placeholder="New Admin Name" />
                            </FormGroup>

                            <FormGroup as={Col} controlId="formGridPassword">
                                <FormLabel>New Admin Image:</FormLabel>
                                <FormControl type="text" placeholder="news description" />
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