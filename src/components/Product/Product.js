import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = ( props ) => {
    const { product, handleAddToCart } = props;
    const { name, img, price, seller, ratings } = product;

    return (
        <div className='container'>
            <div className="cart">
                <img src={img} alt="" />
                <div className="product-info">
                    <h4>Name: {name}</h4>
                    <h5>Price: ${price}</h5>
                    <p>Brand: {seller}</p>
                    <h6>Ratings: {ratings} Stars</h6>
                </div>
                <button onClick={() => handleAddToCart( product )}>Add To Cart <span><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
            </div>
        </div>
    );
};

export default Product;