import React from 'react';
import {connect} from 'react-redux'


import CustomButton from '../custom-button/CustomButton.component'
import {addItem} from '../../redux/cart/cart.actions'

import {
  CollectiopnItemContainer,
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  NameContainer,
  PriceContainer
} from './CollectionItem.styles'

const CollectionItem = ({ item, addItem}) => {
    const { name, price, imageUrl} = item
    return(
  <CollectiopnItemContainer>
    <BackgroundImage imageUrl = {imageUrl} />
    <CollectionFooterContainer>
      <NameContainer>{name}</NameContainer>
      <PriceContainer>{`$${price}`}</PriceContainer>
    </CollectionFooterContainer>
    <AddButton onClick={() => addItem(item)} inverted>ADD TO CART</AddButton>
  </CollectiopnItemContainer>
)}

const mapDispatchToProps = disptach => ({
    addItem: item => disptach(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);