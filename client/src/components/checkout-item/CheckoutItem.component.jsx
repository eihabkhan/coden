import React from 'react'
import { connect } from 'react-redux'

import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    RemoveButtonContainer
} from './CheckoutItem.styles'

import { removeItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, removeItemFromCart, removeItem, addItem}) => {
    const {name, imageUrl, price, quantity} = cartItem
    return (
    <CheckoutItemContainer>
        <ImageContainer>
            <img src={imageUrl} alt="item"/>
        </ImageContainer>
        <TextContainer>{name}</TextContainer>
        <QuantityContainer>
            <div onClick={()=> removeItem(cartItem)}>&nbsp;&#10094;&nbsp;</div>
            <span>{quantity}</span>
            <div onClick={()=> addItem(cartItem)}>&nbsp;&#10095;&nbsp;</div>
        </QuantityContainer>
        <TextContainer className="price">{price}</TextContainer>
        <RemoveButtonContainer onClick={() => removeItemFromCart(cartItem)}>&#10005;</RemoveButtonContainer>
    </CheckoutItemContainer>
)}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)