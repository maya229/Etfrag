import React from "react";

import './footer.scss';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import bg from '../../assets/footer.jpg';

const Footer = () => {
    return(
        <div className="footer" style={ {backgroundImage: `url(${bg})` } }>
            
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <Link to="/">Etfrag</Link>
                    </div>
                </div>
                 <div className="footer__content__menus">
                     <div className="footer__content__menu">
                         <HashLink smooth to='/#m' >Home </HashLink>
                         <Link to="/contact/ContactUs">Contact us</Link>
                         <Link to="/">Term of services</Link>
                         <Link to="/about/AboutUs">About us</Link>
                     </div>

                     <div className="footer__content__menu">
                         <Link to="/">Live</Link>
                         <Link to="/">FAQ us</Link>
                         <Link to="/">Premium</Link>
                         <Link to="/">Pravacy policy</Link>
                     </div>

                     <div className="footer__content__menu">
                         <HashLink smooth to='/#must' > You must watch </HashLink>
                         <Link to="/tv">Recent release </Link>
                         <HashLink smooth to='/#trend' > Top IMDB</HashLink>
                         
                        
                     </div>
                 </div>
            </div>
        </div>
    );
}
export default Footer;