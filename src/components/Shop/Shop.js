import React, { Component, useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const firstTen = fakeData.slice(0, 50);
    const [products, setProducts] = useState(firstTen);
    const [cart, setCart] = useState([]);

    const handleAddProducts = (product) => {
        // console.log('handleAddProducts', product);
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(prdct => <Product
                        key={prdct.key}
                        showAddButton={true}
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