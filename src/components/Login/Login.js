
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Login.css';

const Login = () => {
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const navigate = useNavigate();
    const location = useLocation();
    const [ signInWithEmailAndPassword, user, loading, error ] = useSignInWithEmailAndPassword( auth );

    const from = location.state?.from?.pathname || "/";

    const handleEmail = event => {
        setEmail( event.target.value );
    };
    const handlePassword = event => {
        setPassword( event.target.value );
    };
    if ( user ) {
        navigate( from, { replace: true } );
    }
    const handleSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword( email, password );
    };
    return (
        <div className="form-container">
            <div>
                <h3 className='form-title'>Login Form</h3>
                <form onSubmit={handleSignIn}>
                    <div className='input-group'>
                        <label htmlFor="email">Email Address</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                        <p style={{ 'color': 'red' }}>{error?.message}</p>
                    </div>
                    <div className='input-group'>
                        <button className='form-btn'>Login</button>
                        <p style={{ 'margin-top': '6px' }}>New to Ema-John? <Link to="/signup">Register Now</Link></p>
                    </div>
                    <div className='input-group'>
                        <p className="line"></p>
                        <span className='or'>Or</span>
                        <p className="line"></p>
                    </div>
                </form>
                <div className='input-group'>
                    <button className='form-btn'>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;