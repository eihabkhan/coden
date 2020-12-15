import React from 'react'
import { connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'

import { selectCollections } from '../../redux/shop/shop.selectors.js'

import CollectionPreview from '../../components/collection-preview/CollectionPreview.component'

import './CollectionsOverview.styles.scss'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
        collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key ={id} {...otherCollectionProps}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)