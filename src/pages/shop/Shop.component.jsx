import React from 'react'
import { Route } from 'react-router-dom'

import Collection from '../collection/Collection.component'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component'

const Shop = ({ match }) => (
    <div className='shop-page'> 
        <Route exact path={`${match.path}`} component= {CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
        {/* This allows to access categoryId as a parameter on the match object */} 
    </div>
)


export default Shop