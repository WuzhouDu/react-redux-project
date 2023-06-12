import {configureStore} from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import { allProductsReducer, selectProductReducer, cartProductsReducer, pathReducer } from './slice';

const rootReducer = combineReducers({
    allProducts: allProductsReducer,
    productSeen: selectProductReducer,
    cartProducts: cartProductsReducer,
    path: pathReducer,
});

const store = configureStore({
    reducer: rootReducer
})


export default store;