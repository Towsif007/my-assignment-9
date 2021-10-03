import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="container-fluid bg-danger py-5">   
            <h1>LEXICON IELTS CENTER</h1>

            <nav className="text-dark">
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/contact">Contact</NavLink>
           
            </nav>
        </div>
        
    );
};

export default Header;