import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './OrderReview.css';
const OrderReview = ( props ) => {
    const { product, handleRemoveProduct } = props;
    const { name, img, price, shipping, quantity } = product;
    return (
        <div className='cart-review-container container'>
            <img src={img} alt="" />
            <div className='product-info-container'>
                <div className='product-info'>
                    <h5 title={name}>{name.length > 20 ? name.slice( 0, 20 ) + '...' : name}</h5>
                    <p>Price: <span className='orange-color'>${price}</span></p>
                    <p><small>Shipping: <span className='orange-color'>${shipping}</span></small></p>
                    <p><small>Quantity: <span className='orange-color'>{quantity}</span></small></p>
                </div>
                <div>
                    <button onClick={() => handleRemoveProduct( product )} className='delete-btn'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;