import React from 'react';
import StripeCheckout from "react-stripe-checkout";

import crwn from '../../assets/crwn-icon.ico'

const StripeCheckoutButton = ({price}) =>  {
    const priceForStripe = (price * 159) ;
    const publishableKey = 'pk_test_xFDHQYX6kJrEMfnIbcikU4W300KyUMwvtB';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image={crwn}
            description={`Your total is $:${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton