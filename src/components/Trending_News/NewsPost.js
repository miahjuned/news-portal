import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import demoImg from '../../images/placeholder-rect.jpg'

const NewsPost = (props) => {
    const { newsTitle, imageURL ,newsDescription, newsTag} = props.news;
    return (
        <Col md={3} className='py-3'>
            
            <Card className='px-1' style={{ width: '18rem', height: '30rem' }} >
                <Card.Img variant="top" src={`${imageURL == null ? demoImg :imageURL }`} alt=''/>
                <Card.Body>
                    <Card.Title>{newsTitle}</Card.Title>
                    <Card.Text >
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Link className="btnPrimary">Read more</Link>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">{newsTag}</small>
                </Card.Footer>
            </Card>
        </Col>
        
    );
};

export default NewsPost;