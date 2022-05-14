import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
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

    useEffect( () => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for ( const id in storedCart ) {
            const addedProduct = product.find( prod => prod.id === id );
            if ( addedProduct ) {
                const quantity = storedCart[ id ];
                addedProduct.quantity = quantity;
                savedCart.push( addedProduct );
            }
            setCart( savedCart );
        }
    }, [ product ] );

    const handleAddToCart = ( selectedProduct ) => {
        // console.log( product );
        let newCart = [];
        const exist = cart.find( product => product.id === selectedProduct.id );
        if ( !exist ) {
            selectedProduct.quantity = 1;
            newCart = [ ...cart, selectedProduct ];
        } else {
            const rest = cart.filter( product => product.id !== selectedProduct.id );
            exist.quantity = exist.quantity + 1;
            newCart = [ ...rest, exist ];
        }

        setCart( newCart );
        addToDb( selectedProduct.id );
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