import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header>
                <nav className='container'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='menu'>
                        <Link to='/'>Shop</Link>
                        <Link to='/orders'>Orders</Link>
                        <Link to='/inventory'>Inventory</Link>
                        <Link to='/about'>About</Link>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;