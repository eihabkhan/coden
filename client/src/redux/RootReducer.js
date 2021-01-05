import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // This is the actual localStorage object on the window object

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer'
import shopReducer from './shop/shop.reducer'

const persistConfig = {
    key: 'root', // Where in our reducer do we want to store everything
    storage, // this tells where we want to store, which in our case is the localStorage
    whiteList:['cart'] // Array of the string names of any reducers we want to store. !The names in the array are the same keys in combineReducers
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer) 