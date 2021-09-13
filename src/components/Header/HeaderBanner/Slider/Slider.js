import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './slider.css'
import demoImg from '../../../../images/placeholder-rect.jpg'

const SliderArea = (props) => {
    const {category, newsTitle, imageURL ,newsDescription, newsTag} = props.data;

    return (
        <section className=''>
            <Container>
                    <div style={{height: "450px"}}>
                        <img style={{height: "90%", width: '100%'}} className='img-fluid' src={`${imageURL == null ? demoImg :imageURL }`} alt=''/>
                        <Link className='textPrimary'>
                            <p>{newsTitle}</p>
                        </Link>
                    </div>
            </Container>
        </section>
    );
};

export default SliderArea;