import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';
import './Orders.css';

const Orders = () => {
    const [ products, setProducts ] = useProducts();
    const [ cart, setCart ] = useCart();
    const handleRemoveProduct = product => {
        const rest = cart.filter( pd => pd._id !== product._id );
        setCart( rest );
        removeFromDb( product._id );
    };
    return (
        <div className='order-container'>
            <div className='order-review'>
                <div>
                    {
                        cart.map( product => <OrderReview key={product._id} product={product} handleRemoveProduct={handleRemoveProduct}></OrderReview> )
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <Link to='/shipment'>
                        <button>Proceed Checkout </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;