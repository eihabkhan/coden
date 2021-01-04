import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'


import CollectionPageContainer from '../collection/Collection.container'
import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container'


const Shop = ({fetchCollectionsStar, match }) => {
    useEffect(()=> {
        fetchCollectionsStar()
    }, [fetchCollectionsStar])
    return (
        <div className='shop-page'> 
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            {/* This allows to access categoryId as a parameter on the match object */} 
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop)