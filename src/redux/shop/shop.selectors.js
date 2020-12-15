import { createSelector } from 'reselect'

const COLLECTION_ID_MAP = {
    desks: 1,
    monitors: 2,
    keyboards: 3,
    mice: 4,
    headphones: 5
}

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = collectionUrlParams => 
    createSelector(
        [selectCollections],
        collections => 
            collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParams])
    )