import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './TrendingNews.css';

const TrendingNews = () => {
    return (
        <Container className='border mb-5 pb-5 pt-5'>
            <div>
                <Row>
                    <Col md={2}>
                        <h2>Trending News</h2>
                    </Col>
                    <Col md={7}>
                        <ul className="d-flex justify-content-evenly">
                            <li>All</li>
                            <li>Food</li>
                            <li>Life Style</li>
                            <li>Racing</li>
                            <li>Sports</li>
                            <li>Technology</li>
                            <li>Travel</li>
                            <li>World</li>
                        </ul>
                    </Col>
                    <Col md={3}>
                        <h2>Follow Us</h2>
                    </Col>
                </Row>
            </div>
            <div>
                <Row>
                    <Col md={6}>
                        <Row>
                            <Col md={6}></Col>
                            <Col md={6}></Col>
                        </Row>
                    </Col>
                    <Col md={6}></Col>
                </Row>
            </div>
       </Container>
    );
};

export default TrendingNews;