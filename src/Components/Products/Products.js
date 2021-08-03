import React from 'react';
import "./Products.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {

    const {name, seller,price, shipping,img,stock} = props.products; 

    // console.log(props);

    return (
        <div className="product">
            <div className="product-image">
                <img src={img} alt=""></img>
            </div>        
            <div className="product-content">
                <h3>{name}</h3>  
                <div className="product-details">
                    <p>by: {seller}</p>
                    <h4>${price}</h4>
                    <p>only {stock} left in stock - order soon</p>
                    <button className="btn" onClick={() => props.handleAddProduct(props.products)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                </div> 
            </div>
        </div>
    );
};

export default Products;