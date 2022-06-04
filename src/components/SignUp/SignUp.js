import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './SignUp.css';


const SignUp = () => {
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );
    const [ confirmPassword, setConfirmPassword ] = useState( '' );
    const [ error, setError ] = useState( '' );
    const navigate = useNavigate();
    const [ createUserWithEmailAndPassword, user ] = useCreateUserWithEmailAndPassword( auth );


    const handleEmail = event => {
        setEmail( event.target.value );
    };
    const handlePassword = event => {
        setPassword( event.target.value );
    };
    const handleConfirmPassword = event => {
        setConfirmPassword( event.target.value );
    };
    if ( user ) {
        navigate( '/' );
    }
    const handleCreateUser = event => {
        event.preventDefault();

        if ( password !== confirmPassword ) {
            setError( 'Password does not match!, Please try again.' );
            return;
        }
        if ( password.length < 6 ) {
            setError( 'Password must be 6 characters or long' );
            return;
        }
        createUserWithEmailAndPassword( email, password );

    };
    return (
        <div className="form-container">
            <div>
                <h3 className='form-title'>Sign Up Form</h3>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="email">Email Address</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required />
                        <p style={{ 'color': 'red' }}>{error}</p>
                    </div>
                    <div className='input-group'>
                        <label htmlFor="c-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="c-password" id="" required />
                        <p style={{ 'color': 'red' }}>{error}</p>
                    </div>
                    <div className='input-group'>
                        <button className='form-btn'>Sign Up</button>
                        <p style={{ 'margin-top': '6px' }}>Already have an account? <Link to="/login">Login Now</Link></p>
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
            </div >
        </div >
    );
};

export default SignUp;