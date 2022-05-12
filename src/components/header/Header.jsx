import React, { useEffect, useRef } from "react";

import { Link, useLocation } from "react-router-dom";

import './header.scss';

const headerNav =[
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'Tv Series',
        path: '/tv'
    },
  
    {
        display: 'Sign Up',
        path: '/1/2/signup'
    },
    

];
const Header = () => {

    const {pathname} = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const skrinHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', skrinHeader);
        return () => {
            window.removeEventListener('scroll', skrinHeader);
        };
    }, []);

    return(
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <Link to="/">Etfrag</Link>
                </div>
                <ul className="header__nav">
                    {
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

            </div>
        </div>
    );
}
export default Header;