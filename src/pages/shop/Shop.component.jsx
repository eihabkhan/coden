import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Collection from '../collection/Collection.component'
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview.component'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils.js'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/WithSpinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(Collection);
class Shop extends Component {
    state = {
        isLoading: true
    }

    unsubFromSnapshot = null

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections')



        this.unsubFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({
                isLoading: false
            })
        })
    }

    render() {
        const {match} = this.props
        const { isLoading } = this.state
        return (
            <div className='shop-page'> 
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isLoading} {...props}/>} />
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={isLoading} {...props}/>} />
                {/* This allows to access categoryId as a parameter on the match object */} 
            </div>
        )
    };
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(Shop)