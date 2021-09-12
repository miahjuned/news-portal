import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SliderArea = (props) => {
    const {title, name ,from, img} = props.data;

    return (
        <section className=''>
            <Container>
                    <div>
                        <img className='img-fluid' src={img} alt=''/>
                        <Link className='textPrimary'>{title}</Link>
                    </div>
            </Container>
        </section>
    );
};

export default SliderArea;