import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import Navbar from '../Navbar/Navbar';
import HeaderBanner from './HeaderBanner/HeaderBanner';
const Header = () => {
    return (
        <div>
            <HeaderTop></HeaderTop>
            <Navbar></Navbar>
            <HeaderBanner></HeaderBanner>
        </div>
    );
};

export default Header;