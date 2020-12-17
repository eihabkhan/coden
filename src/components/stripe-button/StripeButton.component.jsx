import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const stripePrice = price * 100
    const PUBLISHABLE_KEY = "pk_test_51HzPCgGsIJOna9P4XjA3oq75GnOwvcyZERDsJ75GRYr0G1wvzRuwkPm2YDfg3NzqrMnhHyRKfKgdTiLnd1FoOh4u00XzabdbZe"

    const onToken = token => {
        console.log(token);
        // Normally you would pass this token to your back-end
        alert("Payment successful")
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='coden'
            billingAddress
            shippingAddress
            image='https://github.com/eihabkhan/coden/blob/master/src/assets/logo.svg'
            description={`Your total is $${price}`}
            amount={stripePrice}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={PUBLISHABLE_KEY}
        />
    )
}

export default StripeCheckoutButton