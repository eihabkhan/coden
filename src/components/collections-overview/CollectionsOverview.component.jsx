import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import { selectCollections } from '../../redux/shop/shop.selectors.js'

import CollectionPreview from '../../components/collection-preview/CollectionPreview.component'

import { CollectionOverviewContainer } from './CollectionsOverview.styles'



const CollectionsOverview = ({collections}) => {
    let collectionsArray = []
    Object.keys(collections).map(key => collectionsArray.push(collections[key]))
    return (
    <CollectionOverviewContainer>
        {
            
        collectionsArray.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key ={id} {...otherCollectionProps}/>
        ))}
    </CollectionOverviewContainer>
)}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)