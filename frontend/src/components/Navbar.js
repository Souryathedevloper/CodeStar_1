import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Knock Nok</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/booking">Book Now</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Navbar;
