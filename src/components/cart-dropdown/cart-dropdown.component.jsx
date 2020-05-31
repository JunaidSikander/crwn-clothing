import React from "react";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {selectCartItems} from "../../redux/cart/cart.selector";
import {toggleCartHidden} from "../../redux/cart/cart.actions";
import {createStructuredSelector} from 'reselect'
import CartItem from "../cart-item/cart-item.component";

import {
    CartDropdownButton,
    CartDropdownContainer,
    CartItemsContainer,
    EmptyMessageContainer
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
            {cartItems.length ? (
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                ))
            ) : (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )}
        </CartItemsContainer>
        <CartDropdownButton
            onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}
        >
            GO TO CHECKOUT
        </CartDropdownButton>
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));