import React from 'react';
import { Link } from 'react-router-dom';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0)

    let total = 0;
    cart.map((product) => (total = total + product.price * product.quantity || 1));
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shippingCost = 0;
    // if (total > 35) {
    //     total = 0;
    // }
    if (total > 15) {
        shippingCost = 4.99;
    }
    else if (total > 0) {
        shippingCost = 12.99;
    }
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    const tax = Math.round(total / 10);
    const grandTotal = (total + shippingCost + Number(tax)).toFixed(2);
    return (
        <div>
            <h4>Order Summary</h4>
            <h4>Item Ordered: {cart.length} </h4>
            <p>Product price: ${formatNumber(total)}</p>
            <p>Shipping Cost: ${shippingCost}</p>
            <p>Tax + VAT: ${tax}</p>
            <p>Total price: ${grandTotal}</p>
            <Link to="/review"><button className="main-button">Review order</button></Link>

        </div>
    );
};

export default Cart;