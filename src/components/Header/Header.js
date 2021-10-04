import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


const Header = () => {
    return (
        <div className="container-fluid bg-success py-5 bg-opacity-75 px-5">   
            <h1 className="text-danger fw-bold fs-1">LEXICON IELTS CENTER</h1>

            <div className="py-4">
            <nav>
                <NavLink className="mx-2" to="/home">
                    <button className="btn btn-dark">Home</button>
                </NavLink>
                <NavLink className="mx-2"  to="/about">
                    <button className="btn btn-dark">About</button>
                </NavLink>
                <NavLink className="mx-2"  to="/services">
                    <button className="btn btn-dark">Services</button>
                </NavLink>
                <NavLink className="mx-2"  to="/contact">
                    <button className="btn btn-dark">Contact</button>
                </NavLink>
            </nav>
            </div>
        </div>
        
    );
};

export default Header;