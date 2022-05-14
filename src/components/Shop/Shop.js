import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [ cart, setCart ] = useState( [] );
    const [ product, setProduct ] = useState( [] );
    useEffect( () => {
        fetch( 'products.json' )
            .then( res => res.json() )
            .then( data => setProduct( data ) );
    }, [] );

    const handleAddToCart = ( product ) => {
        console.log( product );
        const newCart = [ ...cart, product ];
        setCart( newCart );
    };

    return (
        <div className='shop-container'>
            <div className="product-container">

                {
                    product.map( product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product> )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;