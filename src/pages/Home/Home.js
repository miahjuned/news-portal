import React from 'react';
import {Container} from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Slider from '../../components/Slider/Slider';
import TrendingNews from '../../components/Trending_News/TrendingNews';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <Navbar></Navbar>
            <Slider></Slider>
            <TrendingNews></TrendingNews>
        </div>
    );
};

export default Home;