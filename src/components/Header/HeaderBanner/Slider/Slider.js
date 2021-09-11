import React from 'react';
import { Col } from 'react-bootstrap';

const Slider = (props) => {
    const data = props.data;
    console.log('data', data)
    const {name, desc, img , designation} = data;
    return (
        <div><li>{name}</li>
        </div>
    );
};

export default Slider;