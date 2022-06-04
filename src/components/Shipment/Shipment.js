import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [ user ] = useAuthState( auth );
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ phone, setPhone ] = useState( '' );
    const [ address, setAddress ] = useState( '' );


    const handleName = event => {
        setName( event.target.value );
    };
    const handlePhone = event => {
        setPhone( event.target.value );
    };
    const handleAddress = event => {
        setAddress( event.target.value );
    };

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, phone, address };
        console.log( shipping );
    };

    return (
        <div className="form-container">
            <div>
                <h3 className='form-title'>Shipping Information</h3>
                <form onSubmit={handleCreateUser}>
                    <div className='input-group'>
                        <label htmlFor="name">Name</label>
                        <input onBlur={handleName} type="text" name="name" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="email">Email Address</label>
                        <input value={user?.email} type="email" name="email" id="" readOnly required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhone} type="text" name="phone" id="" required />
                    </div>
                    <div className='input-group'>
                        <label htmlFor="c-password">Address</label>
                        <textarea onBlur={handleAddress} name="address" id="" cols="53" rows="7" required></textarea>
                    </div>
                    <div className='input-group'>
                        <button className='form-btn'>Add Shipping</button>
                    </div>

                </form>

            </div >
        </div >
    );
};

export default Shipment;