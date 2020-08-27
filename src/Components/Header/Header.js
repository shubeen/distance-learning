import React from 'react';
import logo from '../../images/distance-education.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt=""/>
            <nav>
                <a href="/course">Courses</a>
                <a href="/review">Review Courses</a>
                <a href="/bookmark"> BookMark Courses</a>
            </nav>
        </div>
      
    );
};

export default Header;