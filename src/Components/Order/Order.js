import React from 'react';
import "./Order.css";


const Order = (props) => {

    const cart = props.cart;
    const priceOfProducts = cart.reduce((total, prd)=>(total + prd.price) ,0);

    console.log(cart);

    let shipping = 0;
    if(priceOfProducts > 500){
        shipping = 0;
    }else if(priceOfProducts > 150){
        shipping = 4.49;
    }else if(priceOfProducts > 100){
        shipping = 9.99;
    }else if(priceOfProducts > 0){
        shipping = 12.99;
    }

    const totalBeforeTax = shipping + priceOfProducts;
    const texAmount = (totalBeforeTax * 0.15);
    const grandAmount = totalBeforeTax + texAmount;

    const decimalController = (amount) =>{
        const precision = amount.toFixed(2);
        return Number(precision);
    }


    return (
        <div className="order-summary">
            <h2>Order Summary</h2>
            <h3>Items ordered: {cart.length}</h3>

            <table className="order-table">
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>${decimalController(priceOfProducts)}</td>
                    </tr>
                    <tr>
                        <td>Shipping Charge:</td>
                        <td>${shipping}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:</td>
                        <td>${decimalController(totalBeforeTax)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:</td>
                        <td>${decimalController(texAmount)}</td>
                    </tr>
                </tbody>
                <tfoot>                                                                                                                                                                                                                                                                                                                                                                           
                    <tr>
                        <td><h3>Order Total:</h3></td>
                        <td><h3>${decimalController(grandAmount)}</h3></td>
                    </tr>
                </tfoot>
            </table>

            <button className="btn">Review Your Order</button>
            
        </div>
    );
};

export default Order;