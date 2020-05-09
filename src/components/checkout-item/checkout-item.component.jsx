import React from "react";

import './checkout-item.styles.scss';

const CheckoutItems = ({item: {imageUrl, name, quantity, price}}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item'/>
        </div>
        <span className='name'> {name}</span>
        <span className='quantity'> {quantity}</span>
        <span className='price'> {price}</span>
        <span className='remove-button'> &#10005;g </span>
    </div>
);

export default CheckoutItems;