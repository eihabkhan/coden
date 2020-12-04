import React from 'react'
import { connect } from 'react-redux'

import CustomButton from '../custom-button/CustomButton.component'
import CartItem from '../cart-item/CartItem.component'

import './CartDropdown.styles.scss'

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.map(item => <CartItem key={CartItem.id} item={item}/>)
        }
        </div>
        <CustomButton>CHECKOUT {">"}</CustomButton>
    </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown)