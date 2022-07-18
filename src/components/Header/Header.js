import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [ user ] = useAuthState( auth );
    const handleSignOut = () => {
        signOut( auth );
    };
    return (
        <div className='header'>
            <header>
                <nav className='container'>
                    <div className='logo'>
                        <Link to='/'><img src={logo} alt="Logo" /></Link>
                    </div>
                    <div className='menu'>
                        <Link to='/'>Shop</Link>
                        <Link to='/orders'>Orders</Link>
                        <Link to='/inventory'>Inventory</Link>
                        <Link to='/about'>About</Link>
                        {user ? <Link onClick={handleSignOut} to='/login'>Sign Out</Link> : <Link to='/login'>Login</Link>}
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Header;