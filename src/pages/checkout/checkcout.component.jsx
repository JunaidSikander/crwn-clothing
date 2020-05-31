import React from "react";
import {connect} from 'react-redux'
import {selectCartItems, selectCartTotal} from "../../redux/cart/cart.selector";
import {createStructuredSelector} from "reselect";
import CheckoutItems from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
    CheckoutHeaderContainer,
    CheckoutPageContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
} from "./checkout.styles"

const Checkout = ({cartItems ,total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <div className='header-block'>
                <span> Product </span>
            </div>
            <HeaderBlockContainer>
                <span> Description </span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span> Quantity </span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span> Price </span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span> Remove </span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem => (
                <CheckoutItems key={cartItem.id} cartItem={cartItem}/>
                ))
        }
        <TotalContainer> TOTAL: ${total} </TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payments*
            <br />
            4242 4242 4242 4242 -CVV: 123
        </WarningContainer>
            <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);