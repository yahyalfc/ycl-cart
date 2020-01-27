import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_b6DPK0PPDaSh2HM0c0FKksKt00gP2XUF9z'
    
    //here we sent token to backend
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout 
            label= 'Pay Now'
            name= 'YCL'
            billingAddress
            shippingAddress
            image='https://img.icons8.com/nolan/64/shopping-cart-loaded.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}
export default StripeCheckoutButton
