import React, { Component, useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const firstTen = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);

    const handleAddProducts = (product) => {
        // console.log('handleAddProducts', product);
        const newCart=[...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(prdct => <Product
                        handleAddProducts={handleAddProducts}
                        product={prdct}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                {/* <h4>Order summary</h4> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
}

export default Shop;