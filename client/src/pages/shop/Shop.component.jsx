import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop.actions'
import Spinner from '../../components/spinner/Spinner.component'


// import CollectionPageContainer from '../collection/Collection.container'
// import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverview.container'

const CollectionPageContainer = lazy(() => import('../collection/Collection.container'))
const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/CollectionsOverview.container'))


const Shop = ({fetchCollectionsStart, match }) => {
    useEffect(()=> {
        fetchCollectionsStart()
    }, [fetchCollectionsStart])
    return (
        <div className='shop-page'> 
            <Suspense fallback={<Spinner />}>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </Suspense>
            {/* This allows to access categoryId as a parameter on the match object */} 
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(Shop)