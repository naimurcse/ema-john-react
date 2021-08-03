import React, { useState } from 'react';
import Order from '../Order/Order';
import Products from '../Products/Products';
import "./Shop.css";
import fakeData from './../../fakeData';



const Shop = () => {

    const first10 = fakeData.slice(0,10);

    const [items, setItems] = useState(first10);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (pd) => {
        const newCart = [...cart, pd];
        setCart(newCart);
    };

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    items.map(product => <Products 
                        products={product} 
                        key={product.key}
                        handleAddProduct={handleAddProduct}
                        ></Products>)
                }
            </div>
            
            <div className="order-container">
                <Order cart={cart}></Order>
            </div>
        </div>
    );
};

export default Shop;