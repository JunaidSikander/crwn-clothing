import React from "react";
import {connect} from 'react-redux'
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";
import {CheckoutItemContainer, TextContainer, ImageContainer, QuantityContainer, RemoveButtonContainer} from './checkout-item.styles'

const CheckoutItems = ({cartItem, clearItemFromCart, addItem, removeItem}) => {
    const {imageUrl, name, quantity, price} = cartItem;
    return(
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt='item'/>
        </ImageContainer>
        <TextContainer> {name}</TextContainer>
        <QuantityContainer>
            <span className='arrow' onClick={() => removeItem(cartItem)}> &#10094;</span>
            <span className='value'>{quantity}</span>
            <span className='arrow' onClick={() => addItem(cartItem)}> &#10095; </span>
        </QuantityContainer>
        <TextContainer> {price}</TextContainer>
        <RemoveButtonContainer onClick={() => clearItemFromCart(cartItem)}> &#10005; </RemoveButtonContainer>
    </CheckoutItemContainer>
)};

const mapDispatchToProps = {
    clearItemFromCart,
    addItem,
    removeItem
};

export default connect(null, mapDispatchToProps)(CheckoutItems);