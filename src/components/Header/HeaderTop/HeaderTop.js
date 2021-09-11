import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './headerTop.css';
import logo from '../../../images/logo@2x.png';
import banner from '../../../images/banner.jpg';
const Home = () => {
    // DATE
    let date1 = new Date();
    let Month = date1.toLocaleString('en-us', { month: 'long' }); 
    let today = date1.toLocaleString('en-us', { weekday: 'long' }); 
    let todayDate = today + ", " + date1.getDate() + "-" + Month + "-" + date1.getFullYear();

    return (
        <div className="header">
            <Row className="header-title">
                <Col md={3}>
                    <p><strong>Date:</strong> {todayDate}</p>
                </Col>
                <Col className="breaking_News" md={2}>
                    <p>Breaking News</p>
                </Col>
                <Col className="breaking_News_Headline" md={4}>
                    <marquee  direction="left">
                        This is a sample scrolling text that has scrolls texts to left.
                    </marquee>
                </Col>
                <Col md={3}>
                   <p> social media icon</p>
                </Col>
            </Row>




            <Row>
                <Col className="p-4" md={4}>
                    <img className="d-block w-100"
                    src={logo}
                    alt="First slide"
                    />
                </Col>
                <Col className="p-3 d-flex justify-content-end" md={8}>
                    <a href="#">
                        <img className="d-block w-80"
                        src={banner}
                        alt="Banner"
                        />
                    </a>
                </Col>
            </Row>
        </div>
    );
};

export default Home;