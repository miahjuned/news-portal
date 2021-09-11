import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../../Data/Fakedata';
import Category from './Catagory/Catagory';
import Slider from './Slider/Slider';
const HeaderBanner = () => {
    return (
        <section>
            <Container>
                <Row className='mt-5 mb-5'>
                    <Col md={3}>
                        
                        <h2 className='textPrimary'>Category</h2>
                        {
                            fakeData.map((data, index) => (
                            <Category key={index} data={data}>
                            </Category>
                        ))}
                   </Col>
                    <Col md={9}>
                        {
                            fakeData.map((data, index) => (
                            <Slider key={index} data={data}>
                            </Slider>
                        ))}
                   </Col>
                </Row>
            </Container>            
        </section>
    );
};

export default HeaderBanner;