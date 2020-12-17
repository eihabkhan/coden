import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CheckoutItem from '../../components/checkout-item/CheckoutItem.component'
import StripeCheckoutButton from '../../components/stripe-button/StripeButton.component'

import { selectCartItems, selectCartTotalPrice } from '../../redux/cart/cart.selectors'

import './Checkout.styles.scss'

const CheckoutPage = ({cartItems, totalPrice}) => (
    <div className='checkout-page'>
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {cartItems.map(item => (<CheckoutItem cartItem={item} key={item.id}/>))}
        <div className="total">{<span>TOTAL: ${totalPrice}</span>}</div>
        <div className="test-warning">
            *Please use the following test credit card for payment*
            <br/>
            4242 4242 4242 4242 - exp: 01/21 - CVC: 123
        </div>
        <StripeCheckoutButton price={totalPrice} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)