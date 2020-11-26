import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul>
            <li><NavLink activeClassName="active" exact to='/weather'>Home</NavLink></li>
            <li><NavLink activeClassName="active" to='/about'>About</NavLink></li>
        </ul>
    )
}

export default Navbar;