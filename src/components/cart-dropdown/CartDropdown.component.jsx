import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/CustomButton.component'
import CartItem from '../cart-item/CartItem.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions'


import './CartDropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ?
            cartItems.map(item => <CartItem key={CartItem.id} item={item}/>)
            : <span className="empty-message">Cart is empty</span>
        }
        </div>
        <CustomButton onClick={() =>{
             history.push('/checkout')
             dispatch(toggleCartHidden())
            }}
        >
            CHECKOUT {">"}
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown))