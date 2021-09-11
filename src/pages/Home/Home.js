import React from 'react';
import {Container} from 'react-bootstrap';
import Header from '../../components/Header/Header';
import TrendingNews from '../../components/Trending_News/TrendingNews';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    return (
        <div >
            <Header></Header>
            <TrendingNews></TrendingNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;