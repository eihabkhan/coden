import React from 'react'

import CustomButton from '../custom-button/CustomButton.component'

import './CartDropdown.styles.scss'

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">

        </div>
        <CustomButton>CHECKOUT {">"}</CustomButton>
    </div>
)

export default CartDropdown