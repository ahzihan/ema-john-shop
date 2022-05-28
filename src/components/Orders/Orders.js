import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import OrderReview from '../OrderReview/OrderReview';
import './Orders.css';

const Orders = () => {
    const [ products, setProducts ] = useProducts();
    const [ cart, setCart ] = useCart( products );
    const handleRemoveProduct = product => {
        const rest = cart.filter( pd => pd.id !== product.id );
        setCart( rest );
        removeFromDb( product.id );
    };
    return (
        <div className='order-container'>
            <div className='order-review'>
                <div>
                    {
                        cart.map( product => <OrderReview key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></OrderReview> )
                    }
                </div>
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;