import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='container '>
            <div className="navbar bg-light">
                <Link className="active" to="/home">GOAL</Link >
                <Link className="#" to="/activity">ACTIVITY</Link >
                <Link className="#" to="/profile">PROFILE</Link >
                <Link className="#" to="/select">SELECT COACH</Link >

            </div>
        </div>
    );
};

export default Navbar;