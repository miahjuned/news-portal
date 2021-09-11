import React from 'react';
import FooterCOl from './FooterCol';
import {Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    const usefulLink = [
        {name:"Emergency Dental Care", link: "/emergency"},
        {name:"Check Up", link:"/checkup"},
        {name:"Treatment of Personal Diseases", link:'/personal-disease'},
        {name:"Tooth Extraction", link: "/tooth-extraction"},
        {name: "Check Up", link: "/checkup"},
    ]
    const ourAddress = [
        {name:"New York- 101006 Hubson", link: "/google.com"},
        {name:" Yards", link:"/peronal"}
    ]
    const oralHealth = [
        {name:"Emergency Dental Care", link: "/emergency"},
        {name:"Check Up", link:"/checkup"},
        {name:"Treatment of Personal Diseases", link:'/personal-disease'},
        {name:"Tooth Extraction", link: "/tooth-extraction"},
        {name: "Check Up", link: "/checkup"},
    ]
    const services = [
        {name:"Emergency Dental Care", link: "/emergency"},
        {name:"Check Up", link:"/checkup"},
        {name:"Treatment of Personal Diseases", link:'/personal-disease'},
        {name:"Tooth Extraction", link: "/tooth-extraction"},
        {name: "Check Up", link: "/checkup"},
    ]
    return (
        <footer className='footer-area clear-both'>
            <Container className='pt-5'>
                <Row className='py-5'>
                    <FooterCOl key={1} menuTitle={"Useful Link"} menuItem={usefulLink}/>
                    <FooterCOl key={2} menuTitle={"Oral Health"} menuItem={oralHealth}/>
                    <FooterCOl key={3} menuTitle={"Services"} menuItem={services}/>
                    <FooterCOl key={4} menuTitle={"Our Address"} menuItem={ourAddress}>
                        <ul className='social-media list-inline'>
                            <li className='list-inline-item'><a href='//facebook.com/zuned1'><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className='list-inline-item'><a href='//facebook.com/zuned1'><FontAwesomeIcon className="icon active-icon" icon={faGooglePlusG} /></a></li>
                            <li className='list-inline-item'><a href='//facebook.com/zuned1'><FontAwesomeIcon className="icon active-icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className='mt-5'>
                            <h6>Call now</h6>
                            <button className='btn btn-primary'>01700000000</button>
                        </div>
                    </FooterCOl>
                </Row>
                <div className="copyright text-center pb-3">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </Container>
            
        </footer>
    );
};

export default Footer;