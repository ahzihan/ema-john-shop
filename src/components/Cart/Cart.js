
import React from 'react';
import './Cart.css';

const Cart = ( props ) => {
    const { cart } = props;
    let total = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    let quantity = 0;
    for ( const product of cart ) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        tax = ( total * 0.1 ).toFixed( 2 );
        grandTotal = total + shipping + parseFloat( tax );
    }
    return (
        <div className='shopping-cart'>
            <h3>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h5>Grand Total: ${grandTotal.toFixed( 2 )}</h5>
            {props.children}
        </div>
    );
};

export default Cart;