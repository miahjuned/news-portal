
import React from 'react';
import { Col } from 'react-bootstrap';

const Catagory = (props) => {
    const data = props.data;
    console.log('data', data)
    const {name, desc, img , designation} = data;
    return (
        <div>
                        <ul>
                    <li>{name}</li>
                    </ul>
        </div>
    );
};

export default Catagory;