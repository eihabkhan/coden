import React from 'react'

import {
    CartItemContainer,
    ItemImage,
    ItemDetailsContainer,
    ItemName
} from './CartItem.styles'

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
    <CartItemContainer>
        <ItemImage src={imageUrl} alt={name}/>
        <ItemDetailsContainer>
            <ItemName>{name}</ItemName>
            <span className="price">
                {quantity} x ${price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem