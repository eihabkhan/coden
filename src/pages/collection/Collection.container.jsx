import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionLoading } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/WithSpinner.component'
import CollectionPage from './Collection.component'

const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionLoading(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage) 

export default CollectionPageContainer
