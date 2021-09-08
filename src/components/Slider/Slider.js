import React from 'react';
import { Carousel, CarouselItem, Container } from 'react-bootstrap';
import img from "../../utilits/bg.png";
import './Slider.css';
const Slider = () => {
    return (
        <div className="Slider">
            <Carousel >
                <CarouselItem className="Slider_item">
                    <img
                    className="d-block w-100"
                    src={img}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="Slider_info">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="Slider_item">
                    <img
                    className="d-block w-100"
                    src={img}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div className="Slider_info">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem className="Slider_item">
                    <img
                    className="d-block w-100"
                    src={img}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div className="Slider_info">
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </div>
    );
};

export default Slider;