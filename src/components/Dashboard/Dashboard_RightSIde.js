import React from 'react';
import { Col, Container, Button, Form, FormControl, FormGroup, FormLabel, Row, FormSelect } from 'react-bootstrap';
import DashboardSidebar from '../Dashboard_sidebar/DashboardSidebar';
const DashboardRightSIde = () => {
    return (
        <Row>
        <Col>
            <DashboardSidebar></DashboardSidebar>
        </Col>
            <Col md={9}>
            <Form>
                <Row className="mb-3">
                    <FormGroup as={Col} controlId="formGridEmail">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="email" placeholder="Enter email" />
                    </FormGroup>
                
                    <FormGroup as={Col} controlId="formGridPassword">
                        <FormLabel>Password</FormLabel>
                        <FormControl type="password" placeholder="Password" />
                    </FormGroup>
                </Row>
                    
                    <FormGroup className="mb-3" controlId="formGridAddress1">
                    <FormLabel>Address</FormLabel>
                    <FormControl placeholder="1234 Main St" />
                    </FormGroup>
                
                    <FormGroup className="mb-3" controlId="formGridAddress2">
                    <FormLabel>Address 2</FormLabel>
                    <FormControl placeholder="Apartment, studio, or floor" />
                    </FormGroup>
                
                <Row className="mb-3">
                    <FormGroup as={Col} controlId="formGridCity">
                        <FormLabel>City</FormLabel>
                        <FormControl />
                    </FormGroup>
                
                    <FormGroup as={Col} controlId="formGridState">
                        <FormLabel>State</FormLabel>
                        <FormSelect defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                        </FormSelect>
                    </FormGroup>
                
                    <FormGroup as={Col} controlId="formGridZip">
                        <FormLabel>Zip</FormLabel>
                        <FormControl />
                    </FormGroup>
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
         </Form>
         </Col>
      </Row>
    );
};

export default DashboardRightSIde;