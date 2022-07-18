import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [ products, setProducts ] = useState( [] );
    const [ cart, setCart ] = useCart();
    const [ pageCount, setPageCount ] = useState( 0 );
    const [ page, setPage ] = useState( 0 );
    const [ size, setSize ] = useState( 10 );

    useEffect( () => {
        fetch( `http://localhost:5000/product?page=${ page }&size=${ size }` )
            .then( res => res.json() )
            .then( data => setProducts( data ) );
    }, [ page, size ] );

    useEffect( () => {
        fetch( 'http://localhost:5000/productCount' )
            .then( res => res.json() )
            .then( data => {
                const count = data.count;
                const pages = Math.ceil( count / 10 );
                setPageCount( pages );
            } );
    }, [] );

    const handleAddToCart = ( selectedProduct ) => {
        // console.log( product );
        let newCart = [];
        const exist = cart.find( product => product._id === selectedProduct._id );
        if ( !exist ) {
            selectedProduct.quantity = 1;
            newCart = [ ...cart, selectedProduct ];
        } else {
            const rest = cart.filter( product => product._id !== selectedProduct._id );
            exist.quantity = exist.quantity + 1;
            newCart = [ ...rest, exist ];
        }

        setCart( newCart );
        addToDb( selectedProduct._id );
    };

    return (
        <div className='shop-container'>
            <div>
                <h2 className='title'>All Products</h2>
                <div className="product-container">

                    {
                        products.map( product => <Product key={product._id} product={product} handleAddToCart={handleAddToCart}></Product> )
                    }

                </div>
                <div className='pagination'>
                    {
                        [ ...Array( pageCount ).keys() ].map( number => <button className={page === number ? 'selected' : ''} onClick={() => setPage( number )}>{number + 1}</button> )
                    }
                    <select onChange={e => setSize( e.target.value )}>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                    </select>
                </div>
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;