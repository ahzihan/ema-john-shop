import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <div>
            <header>
                <nav className='container'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <div className='menu'>
                        <a href="/home">Home</a>
                        <a href="/shop">Shop</a>
                        <a href="/enventory">Enventory</a>
                        <a href="/about">About</a>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;