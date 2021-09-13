import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './TrendingNews.css';
import NewsPost from './NewsPost';

const TrendingNews = () => {

    
  const [news, setNews] = useState([]);

  useEffect(() => {
      fetch('https://updated-news.herokuapp.com/allnews')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])

    const allCategory = [
        {name: 'All',link: '/all'},
        {name: 'Food', link: '/all'},
        {name: 'Life', link: '/life'},
        {name: 'Racing', link: '/racing'},
        {name: 'Technology', link: '/technology'},
        {name: 'Travel', link: '/travel'},
        {name: 'World', link: '/world'}
    ]
    return (
        <div>
            <Container >

                <div>
                    <Row className='d-flex  justify-content-center align-items-center border my-2 py-1'>
                        <Col md={2}>
                            <h3 className='textPrimary'>Trending News</h3>
                        </Col>
                        <Col md={7}>
                            <ul className="d-flex justify-content-evenly">                                
                                {
                                    allCategory.map((data, index) => (
                                        <li className='text-capitalize' data={data} key={index}>
                                            <Link to={`${data.link}`} className='textSecondary'>
                                                {data.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </Col>
                        <Col md={3}>
                            <h2 className='textPrimary'>Follow Us</h2>
                        </Col>
                    </Row>
                </div>

                <div>
                    <Row className='mb-5 pb-5 pt-3'> 
                         {news.map((news, index) => (
                            <NewsPost news={news} key={index}></NewsPost>
                        ))}
                    </Row>
                </div>
        </Container>
       </div>
    );
};

export default TrendingNews;