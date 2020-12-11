import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import CheckoutItem from '../../components/checkout-item/CheckoutItem.component'

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
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    totalPrice: selectCartTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage)