import React, { useEffect, useState } from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import fakeData from '../../../Data/Fakedata';
import Category from './Catagory/Catagory';
import SliderDetails from './Slider/Slider';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom';
const HeaderBanner = () => {



  const [news, setNews] = useState([]);

  useEffect(() => {
      fetch('https://updated-news.herokuapp.com/allnews')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])




    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
        autoplay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    return (
        <section>
            <Container>
                <Row  className=' mt-5 mb-5'>
                    <Col style={{height: "450px"}} className='text-uppercase text-center pt-2 border' md={3}>
                        
                        <h2 className='textPrimary text-uppercase border'>Category</h2>
                      <Category></Category>
                   </Col>
                    <Col md={9}>
                        
                        <Slider {...settings}>
                            {
                                news.map((data, index) => (
                                <SliderDetails key={index} data={data}>
                                </SliderDetails>
                            ))}
                        </Slider>
                   </Col>
                </Row>
            </Container>            
        </section>
    );
};

export default HeaderBanner;