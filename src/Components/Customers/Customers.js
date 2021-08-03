import React from 'react';
import "./Customers.css";

const Customers = (props) => {

    const {name, email, address:{city} = {}} = props.users;

    return (
        <div className="customers-container">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>City: {city}</p>
        </div>
    );
};

export default Customers;